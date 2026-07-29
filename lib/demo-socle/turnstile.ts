// ============================================================================
//  TURNSTILE — chargement et rendu du widget Cloudflare
//  ---------------------------------------------------------------------------
//  Widget en mode "Managed" : invisible par défaut, s'affiche seulement si
//  Cloudflare détecte un comportement suspect. Le token obtenu est passé à
//  agent-orchestrator dans le body de la 1ère question Delco.
// ============================================================================

const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js";

let scriptLoaded = false;
let scriptLoadPromise: Promise<void> | null = null;

export interface TurnstileHandle {
  getToken: () => string | null;
  reset: () => void;
}

// Charge le script Turnstile une seule fois
function loadScript(): Promise<void> {
  if (scriptLoaded) return Promise.resolve();
  if (scriptLoadPromise) return scriptLoadPromise;

  scriptLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      scriptLoaded = true;
      resolve();
    };
    script.onerror = () => {
      scriptLoadPromise = null;
      reject(new Error("Chargement Turnstile échoué"));
    };
    document.head.appendChild(script);
  });

  return scriptLoadPromise;
}

// Rend le widget dans un container et retourne un handle pour récupérer le token
export async function renderTurnstile(
  container: HTMLElement,
  siteKey: string,
): Promise<TurnstileHandle> {
  await loadScript();

  // Attendre que window.turnstile soit disponible (le script s'auto-initialise)
  for (let i = 0; i < 50; i++) {
    if ((window as any).turnstile) break;
    await new Promise((r) => setTimeout(r, 100));
  }
  const ts = (window as any).turnstile;
  if (!ts) throw new Error("window.turnstile indisponible après chargement");

  let currentToken: string | null = null;

  const widgetId = ts.render(container, {
    sitekey: siteKey,
    size: "flexible",
    callback: (token: string) => {
      currentToken = token;
    },
    "error-callback": () => {
      currentToken = null;
    },
    "expired-callback": () => {
      currentToken = null;
    },
  });

  return {
    getToken: () => currentToken,
    reset: () => {
      ts.reset(widgetId);
      currentToken = null;
    },
  };
}
