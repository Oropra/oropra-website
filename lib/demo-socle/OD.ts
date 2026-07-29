// ============================================================================
//  OD REGISTRY — reproduit OD.define / OD.mountAll pour la démo
//  ---------------------------------------------------------------------------
//  Les modules `one-data-blocs` s'enregistrent via `OD.define('nom', {...})`.
//  Le socle les monte via `OD.mountAll()` qui scanne les ancres du DOM.
//
//  Chargement des modules : depuis le CDN jsDelivr (dernier commit main).
// ============================================================================

import type { SupabaseClient } from "@supabase/supabase-js";

export interface ODModule {
  mount: (anchor: HTMLElement, ctx: ODContext) => void | Promise<void>;
  [key: string]: unknown;
}

export interface ODTenant {
  id: string;
  supabase_url: string;
  supabase_anon_key: string;
  logo_url?: string;
  group_name?: string;
  branding?: Record<string, unknown>;
}

export interface ODContext {
  el: HTMLElement;
  supabase: SupabaseClient;
  tenant: ODTenant;
  user: Record<string, unknown> | null;
  fn: (name: string, body?: unknown, opts?: RequestInit) => Promise<Response>;
  props: Record<string, unknown>;
}

export interface ODRegistry {
  modules: Record<string, ODModule>;
  manifest: Record<string, { source: "cdn" | "inline"; cdn_url?: string; code?: string }>;
  loading: Record<string, Promise<void>>;
  define: (key: string, def: ODModule) => void;
  ensureLoaded: (key: string) => Promise<void>;
  mountAll: () => Promise<void>;
  remountPage: () => Promise<void>;
  persistent: Set<string>;
  tenant: ODTenant | null;
  supabase: SupabaseClient | null;
  fn: ODContext["fn"] | null;
  getUser: () => Record<string, unknown> | null;
}

// CDN base — pointe sur le dernier commit main du repo public
const CDN_BASE = "https://cdn.jsdelivr.net/gh/Oropra/one-data-blocs@main";

// Manifeste par défaut (nom → chemin CDN). On peut en ajouter à la volée.
const DEFAULT_MANIFEST: Record<string, string> = {
  "site-bus":      `${CDN_BASE}/site-bus.js`,
  "topnav":        `${CDN_BASE}/topnav.js`,
  "notif-badge":   `${CDN_BASE}/notif-badge.js`,
  "delco-badge":   `${CDN_BASE}/delco-badge.js`,
  "delco-chat":    `${CDN_BASE}/delco-chat.js`,
  "delco-page":    `${CDN_BASE}/delco-page.js`,
  "dashboard":     `${CDN_BASE}/dashboard.js`,
  "cf-fiche":      `${CDN_BASE}/cf-fiche.js`,
  "fiche-shell":   `${CDN_BASE}/fiche-shell.js`,
  "likes":         `${CDN_BASE}/likes.js`,
  "contacts":      `${CDN_BASE}/contacts.js`,
  "rdv":           `${CDN_BASE}/rdv.js`,
  "vehicules":     `${CDN_BASE}/vehicules.js`,
  "pcom":          `${CDN_BASE}/pcom.js`,
  "entreprise":    `${CDN_BASE}/entreprise.js`,
  "historique":    `${CDN_BASE}/historique.js`,
  "annuaire":      `${CDN_BASE}/annuaire.js`,
  "client-search": `${CDN_BASE}/client-search.js`,
  "client-history":`${CDN_BASE}/client-history.js`,
  "notifications": `${CDN_BASE}/notifications.js`,
  "objectifs":     `${CDN_BASE}/objectifs.js`,
  "activite":      `${CDN_BASE}/activite.js`,
  "bilaterales":   `${CDN_BASE}/bilaterales.js`,
  "performances":  `${CDN_BASE}/performances.js`,
  "kanban":        `${CDN_BASE}/kanban.js`,
  "lead-mgmt":     `${CDN_BASE}/lead-mgmt.js`,
  "vo-liste":      `${CDN_BASE}/vo-liste.js`,
  "propale-vo":    `${CDN_BASE}/propale-vo.js`,
  "bdc-vn":        `${CDN_BASE}/bdc-vn.js`,
  "voip-init":     `${CDN_BASE}/voip-init.js`,
  "voip-ui":       `${CDN_BASE}/voip-ui.js`,
  "sms":           `${CDN_BASE}/sms.js`,
  "whatsapp":      `${CDN_BASE}/whatsapp.js`,
  "email":         `${CDN_BASE}/email.js`,
  "agenda":        `${CDN_BASE}/agenda.js`,
  "rpv":           `${CDN_BASE}/rpv.js`,
  "tours":         `${CDN_BASE}/tours.js`,
  "tutos":         `${CDN_BASE}/tutos.js`,
  "onboarding":    `${CDN_BASE}/onboarding.js`,
  "admin":         `${CDN_BASE}/admin.js`,
};

export function installODRegistry(): ODRegistry {
  const registry: ODRegistry = {
    modules: {},
    manifest: {},
    loading: {},
    tenant: null,
    supabase: null,
    fn: null,
    persistent: new Set([
      "topnav",
      "voip-init",
      "voip-ui",
      "sms",
      "whatsapp",
      "email",
      "client-history",
      "site-bus",
      "delco-badge",
      "notif-badge",
    ]),
    getUser: () => {
      try {
        let u = (window as any).oropraUser;
        if (Array.isArray(u)) u = u[0];
        return u || null;
      } catch (_e) {
        return null;
      }
    },
    define: (key, def) => {
      registry.modules[key] = def;
    },
    ensureLoaded: (key) => ensureLoaded(registry, key),
    mountAll: () => mountAll(registry),
    remountPage: async () => {
      // Réinitialise le montage des ancres non-persistantes puis remonte tout
      document
        .querySelectorAll<HTMLElement>("[data-od-module][data-od-mounted]")
        .forEach((el) => {
          const key = el.dataset.odModule;
          if (key && !registry.persistent.has(key)) {
            delete el.dataset.odMounted;
          }
        });
      await mountAll(registry);
    },
  };

  // Initialiser le manifeste avec les entrées par défaut
  Object.entries(DEFAULT_MANIFEST).forEach(([key, url]) => {
    registry.manifest[key] = { source: "cdn", cdn_url: url };
  });

  (window as any).OD = registry;
  return registry;
}

async function ensureLoaded(registry: ODRegistry, key: string): Promise<void> {
  if (registry.modules[key]) return;
  const pending = registry.loading[key];
  if (pending) return pending;

  const entry = registry.manifest[key];
  if (!entry) {
    throw new Error(`Module inconnu : '${key}' (absent du manifeste)`);
  }

  registry.loading[key] = new Promise<void>((resolve, reject) => {
    if (entry.source === "cdn" && entry.cdn_url) {
      const script = document.createElement("script");
      script.src = entry.cdn_url;
      script.async = true;
      script.onload = () => {
        console.log(`[OD] chargé : ${key}`);
        resolve();
      };
      script.onerror = () => {
        reject(new Error(`Chargement CDN échoué : ${entry.cdn_url}`));
      };
      document.head.appendChild(script);
    } else if (entry.source === "inline" && entry.code) {
      try {
        new Function(entry.code)();
        resolve();
      } catch (e) {
        reject(e);
      }
    } else {
      reject(new Error(`Source inconnue pour '${key}'`));
    }
  });

  return registry.loading[key];
}

async function mountAll(registry: ODRegistry): Promise<void> {
  const anchors = Array.from(
    document.querySelectorAll<HTMLElement>(
      "[data-od-module]:not([data-od-mounted])",
    ),
  );

  for (const el of anchors) {
    const key = el.dataset.odModule;
    if (!key) continue;
    el.dataset.odMounted = "1";
    try {
      await ensureLoaded(registry, key);
      const def = registry.modules[key];
      if (!def?.mount) {
        throw new Error(`Module '${key}' chargé mais sans mount()`);
      }
      const props = el.dataset.odProps ? JSON.parse(el.dataset.odProps) : {};
      const ctx: ODContext = {
        el,
        supabase: registry.supabase!,
        tenant: registry.tenant!,
        user: registry.getUser(),
        fn: registry.fn!,
        props,
      };
      await def.mount(el, ctx);
      console.log(`[OD] ✅ monté : ${key}`);
    } catch (e) {
      delete el.dataset.odMounted;
      console.error(`[OD] montage KO : ${key}`, e);
    }
  }
}
