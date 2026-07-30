// ============================================================================
//  TURNSTILE — chargement et rendu du widget Cloudflare (robuste prod)
//  ---------------------------------------------------------------------------
//  Le widget est rendu en mode "flexible" dans un container discret mais NON
//  caché (Cloudflare refuse de rendre un widget display:none / visibility:hidden).
//  waitForToken() attend activement que le token soit disponible.
// ============================================================================

const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js";

let scriptLoaded = false;
let scriptLoadPromise: Promise<void> | null = null;

export interface TurnstileHandle {
  getToken: () => string | null;
  waitForToken: (timeoutMs?: number) => Promise<string | null>;
  reset: () => void;
}

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

export async function renderTurnstile(
  container: HTMLElement,
  siteKey: string,
): Promise<TurnstileHandle> {
  await loadScript();

  for (let i = 0; i < 50; i++) {
    if ((window as any).turnstile) break;
    await new Promise((r) => setTimeout(r, 100));
  }
  const ts = (window as any).turnstile;
  if (!ts) throw new Error("window.turnstile indisponible apres chargement");

  let currentToken: string | null = null;
  const tokenWaiters: ((t: string | null) => void)[] = [];

  const widgetId = ts.render(container, {
    sitekey: siteKey,
    size: "flexible",
    callback: (token: string) => {
      currentToken = token;
      tokenWaiters.splice(0).forEach((fn) => fn(token));
    },
    "error-callback": () => {
      currentToken = null;
    },
    "expired-callback": () => {
      currentToken = null;
      try {
        ts.reset(widgetId);
      } catch (_e) {}
    },
  });

  return {
    getToken: () => currentToken,
    waitForToken: (timeoutMs = 8000) =>
      new Promise((resolve) => {
        if (currentToken) return resolve(currentToken);
        let done = false;
        const timer = setTimeout(() => {
          if (done) return;
          done = true;
          resolve(currentToken);
        }, timeoutMs);
        tokenWaiters.push((t) => {
          if (done) return;
          done = true;
          clearTimeout(timer);
          resolve(t);
        });
      }),
    reset: () => {
      ts.reset(widgetId);
      currentToken = null;
    },
  };
}
