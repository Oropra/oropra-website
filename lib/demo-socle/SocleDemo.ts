// ============================================================================
//  SOCLE DÉMO — orchestrateur principal
//  ---------------------------------------------------------------------------
//  Équivalent démo du socle.js WeWeb : monte tout dans l'ordre, gère la
//  navigation SPA, et fournit aux modules un environnement compatible.
//
//  Séquence :
//    1. Créer le client Supabase demo-public
//    2. Installer le shim wwLib
//    3. Installer le registre OD
//    4. Se logguer avec le visiteur
//    5. Charger USER → window.oropraUser
//    6. Monter les modules présents sur la page
// ============================================================================

import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { installWwLibShim } from "./wwLibShim";
import { installODRegistry, ODRegistry, ODTenant } from "./OD";
import { loginVisitor, loadUser, DemoUser } from "./auth";
import { getSessionId } from "./session";
import { renderTurnstile, TurnstileHandle } from "./turnstile";
import { installFetchPatch } from "./fetchPatch";

export interface SocleDemoConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
  visitorEmail: string;
  visitorPassword: string;
  turnstileSiteKey: string;
  tenantMeta?: Partial<ODTenant>;
  onNavigate?: (url: string) => void;
}

export interface SocleDemoInstance {
  supabase: SupabaseClient;
  registry: ODRegistry;
  user: DemoUser | null;
  turnstile: TurnstileHandle | null;
  sessionId: string;
  destroy: () => void;
}

// Référentiels universels — extraits de socle.js (barème carte grise, etc.)
// Ces valeurs sont identiques pour tous les tenants et doivent être servies
// via wwVariable.getValue(<uuid>) par les modules qui les consomment.
const OD_REF_VARS: Record<string, unknown> = {
  "a7b18463-aeb8-456a-99ee-9ee0d8b4bca5": 11,
  "cddb6b4a-7bec-4a8d-9fb5-ce940ea50398": 2.76,
  "f2a30399-02d6-4a95-bace-742f23a076f9": 34,
  "7e24f595-e1fd-4257-99f4-76f179032788": ["Aucun", "NPAI", "Décédé"],
  // Le référentiel des formes juridiques est plus long — on l'omet ici, il
  // pourra être ajouté au besoin quand un module précis en aura besoin.
};

export async function bootstrapSocleDemo(
  config: SocleDemoConfig,
): Promise<SocleDemoInstance> {
  console.log("[socle-démo] bootstrap");

  // ==== 1. Client Supabase demo-public ====================================
  const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      storageKey: "od-demo-auth",
    },
  });

  // ==== 2. Shim wwLib ======================================================
  installWwLibShim({
    supabase,
    onNavigate: config.onNavigate,
    refVars: OD_REF_VARS,
  });
  console.log("[socle-démo] ✅ wwLib shim installé");

  // ==== 3. Registre OD =====================================================
  const registry = installODRegistry();
  registry.supabase = supabase;

  // Le tenant est fabriqué localement (pas de control plane pour la démo)
  const tenant: ODTenant = {
    id: "demo-public",
    supabase_url: config.supabaseUrl,
    supabase_anon_key: config.supabaseAnonKey,
    logo_url: config.tenantMeta?.logo_url,
    group_name: config.tenantMeta?.group_name || "Démo One Data",
    branding: config.tenantMeta?.branding,
  };
  registry.tenant = tenant;

  // fn = appel Edge Function, avec injection automatique du session_id et
  // du turnstile_token pour les appels agent-orchestrator (Delco)
  const sessionId = getSessionId();
  registry.fn = async (name, body, opts = {}) => {
    const base = tenant.supabase_url.replace(/\/$/, "");
    let token = tenant.supabase_anon_key;
    try {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.access_token) token = data.session.access_token;
    } catch (_e) {}

    // Injection des garde-fous démo si c'est un appel Delco
    let finalBody = body;
    if (name === "agent-orchestrator" && body && typeof body === "object") {
      finalBody = {
        ...(body as Record<string, unknown>),
        session_id: sessionId,
        turnstile_token: turnstileHandle?.getToken() ?? null,
      };
    }

    return fetch(`${base}/functions/v1/${name}`, {
      method: opts.method || "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: tenant.supabase_anon_key,
        Authorization: `Bearer ${token}`,
        ...(opts.headers as Record<string, string> || {}),
      },
      body: finalBody != null ? JSON.stringify(finalBody) : undefined,
      signal: opts.signal,
    });
  };
  console.log("[socle-démo] ✅ registre OD installé");

  // ==== 4. Login visiteur ==================================================
  await loginVisitor(supabase, config.visitorEmail, config.visitorPassword);

  // ==== 5. Charger USER → window.oropraUser ================================
  const user = await loadUser(supabase);
  if (!user) {
    console.warn("[socle-démo] user introuvable, montage sans user");
  }

  // ==== 6. Turnstile (chargé mais rendu à la demande) =====================
  let turnstileHandle: TurnstileHandle | null = null;
  const turnstileContainer = document.createElement("div");
  turnstileContainer.id = "od-demo-turnstile";
  // Cloudflare refuse de rendre un widget caché (visibility:hidden/display:none).
  // On le place discrètement en bas, très petit et peu opaque, mais RENDU.
  turnstileContainer.style.cssText =
    "position:fixed;right:8px;bottom:8px;z-index:1;opacity:0.5;transform:scale(0.7);transform-origin:bottom right";
  document.body.appendChild(turnstileContainer);
  try {
    turnstileHandle = await renderTurnstile(
      turnstileContainer,
      config.turnstileSiteKey,
    );
    console.log("[socle-démo] ✅ Turnstile prêt");
  } catch (e) {
    console.warn("[socle-démo] Turnstile KO :", e);
  }

  // ==== 6bis. Patch fetch : injecte session_id + turnstile_token dans les
  //           appels agent-orchestrator (delco-chat fait un fetch direct,
  //           sans passer par ctx.fn). Modules inchangés.
  const restoreFetch = installFetchPatch({
    sessionId,
    getTurnstileToken: () =>
      turnstileHandle ? turnstileHandle.waitForToken(8000) : Promise.resolve(null),
  });
  console.log("[socle-démo] ✅ fetch patché (garde-fous Delco)");

  // ==== 7. Monter les modules présents dans le DOM =========================
  await registry.mountAll();

  // Écouter l'ajout dynamique d'ancres (débounce léger)
  let mountTimer: number | null = null;
  const observer = new MutationObserver(() => {
    if (mountTimer !== null) window.clearTimeout(mountTimer);
    mountTimer = window.setTimeout(() => registry.mountAll(), 50);
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Navigation SPA : re-monter les ancres non-persistantes au changement de path
  let lastPath = window.location.pathname;
  let navTimer: number | null = null;
  const onNav = () => {
    if (navTimer !== null) window.clearTimeout(navTimer);
    navTimer = window.setTimeout(() => {
      if (window.location.pathname === lastPath) return;
      lastPath = window.location.pathname;
      registry.remountPage();
    }, 80);
  };
  const origPush = history.pushState.bind(history);
  const origReplace = history.replaceState.bind(history);
  history.pushState = function (...args) {
    const r = origPush(...args);
    onNav();
    return r;
  };
  history.replaceState = function (...args) {
    const r = origReplace(...args);
    onNav();
    return r;
  };
  window.addEventListener("popstate", onNav);

  console.log("[socle-démo] ✅ prêt");

  return {
    supabase,
    registry,
    user,
    turnstile: turnstileHandle,
    sessionId,
    destroy: () => {
      observer.disconnect();
      window.removeEventListener("popstate", onNav);
      history.pushState = origPush;
      history.replaceState = origReplace;
      restoreFetch();
      try {
        turnstileContainer.remove();
      } catch (_e) {}
    },
  };
}
