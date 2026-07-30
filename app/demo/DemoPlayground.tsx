// ============================================================================
//  DemoPlayground v2 — reproduit fidèlement l'architecture One Data
//  ---------------------------------------------------------------------------
//  Comme le vrai socle.js :
//   - modules PERSISTANTS montés une fois : topnav, site-bus, delco-badge,
//     notif-badge, voip-init (barre + FAB Delco flottant, présents partout)
//   - un module CONTENEUR par route (dashboard, fiche-shell, kanban…), qui
//     monte lui-même ses sous-modules via ses propres ancres data-od-module
//   - navigation par chemin : topnav appelle wwLib.goTo('/xxx'), le shim
//     traduit en router.push('/demo/xxx')
// ============================================================================

"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { bootstrapSocleDemo, SocleDemoInstance } from "@/lib/demo-socle";

const CONFIG = {
  supabaseUrl: process.env.NEXT_PUBLIC_DEMO_SUPABASE_URL!,
  supabaseAnonKey: process.env.NEXT_PUBLIC_DEMO_SUPABASE_ANON_KEY!,
  visitorEmail: process.env.NEXT_PUBLIC_DEMO_VISITOR_EMAIL!,
  visitorPassword: process.env.NEXT_PUBLIC_DEMO_VISITOR_PASSWORD!,
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
};

// Route (sous /demo) → module conteneur One Data.
// Le chemin nu "" correspond à /demo (accueil = dashboard).
const ROUTE_MODULE: Record<string, string> = {
  "": "dashboard",
  client: "client-search",
  notifications: "notifications",
  "pipe-commercial": "kanban",
  performances: "performances",
  objectifs: "objectifs",
  bilaterales: "bilaterales",
  activite: "activite",
  marketing: "lead-mgmt",
  "vo-liste": "vo-liste",
  "vn-liste": "kanban",
  "bdc-vn": "bdc-vn",
  delco: "delco-chat",
  "fiche-client": "fiche-shell",
  annuaire: "annuaire",
  tutos: "tutos",
};

function moduleForPath(pathname: string): string {
  // pathname = /demo, /demo/fiche-client, ...
  const sub = pathname.replace(/^\/demo\/?/, "").split("/")[0] || "";
  return ROUTE_MODULE[sub] || "dashboard";
}

// Le socle est stocké au niveau MODULE (hors composant) pour survivre à tout
// remontage du composant provoqué par la navigation Next.js. Le bootstrap ne
// se lance donc qu'une seule fois pour toute la session /demo.
let globalSocle: SocleDemoInstance | null = null;
let globalBootPromise: Promise<SocleDemoInstance> | null = null;
let globalNavigate: ((url: string) => void) | null = null;

export default function DemoPlayground() {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    globalSocle ? "ready" : "loading",
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [currentModule, setCurrentModule] = useState(() =>
    typeof window !== "undefined" ? moduleForPath(window.location.pathname) : "dashboard",
  );
  // FAB Delco : panneau chat flottant (fermé par défaut)
  const [delcoOpen, setDelcoOpen] = useState(false);

  // La fonction de navigation pointe toujours vers le router courant
  globalNavigate = (url: string) => {
    let target = url.replace(/^\/fr/, "");
    if (!target.startsWith("/demo")) {
      target = "/demo" + (target.startsWith("/") ? target : `/${target}`);
    }
    target = target.replace(/\/demo\/$/, "/demo");
    router.push(target);
  };

  // ---- Bootstrap (une seule fois pour toute la session) ----
  useEffect(() => {
    let cancelled = false;

    if (globalSocle) {
      setStatus("ready");
      return;
    }

    if (!globalBootPromise) {
      globalBootPromise = bootstrapSocleDemo({
        ...CONFIG,
        tenantMeta: {
          logo_url: "/logo-one-data.svg",
          group_name: "One Data",
        },
        onNavigate: (url: string) => globalNavigate?.(url),
      });
    }

    globalBootPromise
      .then((socle) => {
        globalSocle = socle;
        if (!cancelled) {
          setCurrentModule(moduleForPath(window.location.pathname));
          setStatus("ready");
        }
      })
      .catch((e) => {
        console.error("[playground] bootstrap KO", e);
        globalBootPromise = null;
        if (!cancelled) {
          setErrorMsg((e as Error).message || String(e));
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;
      // On NE détruit PAS le socle au démontage : il doit survivre à la
      // navigation entre pages du playground.
    };
  }, []);

  // ---- Changement de route → changer le module conteneur + remonter ----
  useEffect(() => {
    if (status !== "ready") return;
    const mod = moduleForPath(pathname);
    setCurrentModule(mod);
    // Laisser React poser la nouvelle ancre, puis remonter
    const t = setTimeout(() => {
      globalSocle?.registry.remountPage();
    }, 40);
    return () => clearTimeout(t);
  }, [pathname, status]);

  // ---- Ouverture du panneau Delco (FAB) → monter delco-chat dedans ----
  useEffect(() => {
    if (status !== "ready" || !delcoOpen) return;
    const t = setTimeout(() => {
      globalSocle?.registry.mountAll();
    }, 40);
    return () => clearTimeout(t);
  }, [delcoOpen, status]);

  if (status === "error") {
    return (
      <div style={errStyle.wrap}>
        <div style={{ textAlign: "center", maxWidth: 420 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>😕</div>
          <h1 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            La démo n&apos;a pas pu démarrer
          </h1>
          <p style={{ fontSize: 14, color: "#5c6470", marginBottom: 16 }}>{errorMsg}</p>
          <button style={errStyle.btn} onClick={() => window.location.reload()}>
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="od-playground" style={{ minHeight: "100vh", background: "#f5f7fa", display: "flex", flexDirection: "column" }}>
      {/* Isolation CSS : rétablit l'environnement attendu par les modules One Data
          (police Nunito Sans, pas d'héritage du CSS marketing du site) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700;6..12,800;6..12,900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .od-playground, .od-playground * {
          font-family: "Nunito Sans", system-ui, -apple-system, sans-serif;
        }
        /* Les modules One Data définissent leurs propres couleurs de liens ;
           on annule le "a { color: inherit }" global du site. */
        .od-playground a { color: revert; }
        /* Rétablir une base neutre pour les titres/paragraphes que le site
           marketing pourrait styliser globalement. */
        .od-playground h1, .od-playground h2, .od-playground h3,
        .od-playground h4, .od-playground p, .od-playground button {
          margin: revert;
          font-size: revert;
          line-height: revert;
          font-weight: revert;
        }
        /* Zone principale : large sur desktop, padding réduit sur mobile */
        .od-pg-main {
          flex: 1;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 16px 24px 60px;
        }
        @media (max-width: 640px) {
          .od-pg-main {
            padding: 10px 10px 48px;
          }
          /* Bandeau démo : masquer le texte central, garder retour + CTA */
          .od-banner-center {
            display: none !important;
          }
          .od-banner-wrap {
            padding: 8px 12px !important;
          }
          .od-banner-back, .od-banner-link {
            font-size: 12px !important;
          }
        }
      `}</style>


      {/* Bandeau démo — couleurs One Data */}
      <div className="od-banner-wrap" style={banner.wrap}>
        <a href="/" className="od-banner-back" style={banner.back}>
          ← Retour au site
        </a>
        <span className="od-banner-center" style={banner.center}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-one-data.svg" alt="One Data" style={{ height: 18, width: "auto", verticalAlign: "middle" }} />
          <span style={{ marginLeft: 8 }}>
            Démonstration — données fictives, rien n&apos;est enregistré.
          </span>
        </span>
        <a
          href="mailto:bienvenue@oropra.com?subject=Demande%20de%20d%C3%A9mo%20One%20Data&body=Bonjour%2C%0A%0AJe%20souhaite%20une%20d%C3%A9mo%20de%20One%20Data%20sur%20mes%20propres%20donn%C3%A9es.%0A%0AConcession%20%3A%20%0ANombre%20de%20sites%20%3A%20%0ANombre%20d%27utilisateurs%20%3A%20%0AT%C3%A9l%C3%A9phone%20%3A%20%0A%0AMerci%20%21"
          target="_blank"
          rel="noopener noreferrer"
          className="od-banner-link"
          style={banner.link}
        >
          Demander une vraie démo →
        </a>
      </div>

      {/* Loader plein écran */}
      {status === "loading" && (
        <div style={loader.wrap}>
          <div style={loader.spin} />
          <div style={{ fontSize: 14, color: "#5c6470" }}>Préparation de la démo…</div>
        </div>
      )}

      {/* Modules PERSISTANTS — montés une fois, présents sur toutes les pages */}
      <div data-od-module="site-bus" style={{ display: "none" }} />
      <div data-od-module="voip-init" style={{ display: "none" }} />

      {/* Topnav One Data (barre de navigation complète du produit) */}
      <div data-od-module="topnav" id="nav-root" />

      {/* Zone principale — module conteneur de la route courante */}
      <main className="od-pg-main">
        <div key={currentModule} data-od-module={currentModule} />
      </main>

      {/* Le badge Delco et le compteur de notifs sont rendus PAR le topnav
          (comme dans le vrai produit) : cliquer sur "Delco" dans la nav
          navigue vers /demo/delco. Rien à monter séparément ici. */}

      {/* FAB Delco flottant — présent sur toutes les pages SAUF /demo/delco
          (où le chat occupe déjà la zone centrale). Permet de tester Delco
          sans quitter la page courante. */}
      {currentModule !== "delco-chat" && (
        <>
          {!delcoOpen && (
            <button
              onClick={() => setDelcoOpen(true)}
              style={fab.btn}
              title="Discuter avec Delco"
              aria-label="Ouvrir Delco"
            >
              <span style={fab.pulse} />
              <svg viewBox="0 0 64 64" fill="none" style={{ width: 30, height: 30 }}>
                <path d="M 36 8 L 18 36 L 30 36 L 26 56 L 46 28 L 34 28 L 36 8 Z" fill="currentColor" />
              </svg>
            </button>
          )}
          {delcoOpen && (
            <div style={fab.panel}>
              <button
                onClick={() => setDelcoOpen(false)}
                style={fab.close}
                aria-label="Fermer Delco"
              >
                ✕
              </button>
              {/* Ancre delco-chat montée à l'ouverture */}
              <div data-od-module="delco-chat" style={{ height: "100%" }} />
            </div>
          )}
        </>
      )}

      <style>{`@keyframes odspin { to { transform: rotate(360deg); } }
        @keyframes odpulse { 0%,100% { transform: scale(1); opacity: .5 } 50% { transform: scale(1.6); opacity: 0 } }
      `}</style>
    </div>
  );
}

const banner = {
  wrap: {
    background: "#f2f6fc",
    borderBottom: "1px solid #e8eef7",
    padding: "9px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 13,
    gap: 16,
    fontFamily: '"Nunito Sans", system-ui, sans-serif',
  },
  center: {
    color: "#1F4A85",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    whiteSpace: "nowrap" as const,
  },
  link: {
    color: "#2a5ea9",
    fontWeight: 700,
    textDecoration: "none",
    whiteSpace: "nowrap" as const,
  },
  back: {
    color: "#5c6470",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    whiteSpace: "nowrap" as const,
  },
};

const loader = {
  wrap: {
    position: "fixed" as const,
    inset: 0,
    zIndex: 50,
    background: "white",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  spin: {
    width: 44,
    height: 44,
    border: "4px solid #e8eef7",
    borderTopColor: "#2a5ea9",
    borderRadius: "50%",
    animation: "odspin 0.8s linear infinite",
  },
};

const errStyle = {
  wrap: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f7fa",
    padding: 32,
  },
  btn: {
    padding: "10px 20px",
    background: "#0f1419",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
};

const fab = {
  btn: {
    position: "fixed" as const,
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #53bda7, #2a5ea9)",
    color: "white",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 8px 28px rgba(42,94,169,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 60,
  },
  pulse: {
    position: "absolute" as const,
    inset: 0,
    borderRadius: "50%",
    background: "#53bda7",
    animation: "odpulse 2.4s ease-out infinite",
    zIndex: -1,
  },
  panel: {
    position: "fixed" as const,
    bottom: 24,
    right: 24,
    width: "min(440px, calc(100vw - 32px))",
    height: "min(640px, calc(100vh - 120px))",
    background: "white",
    borderRadius: 18,
    boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
    zIndex: 60,
    overflow: "hidden",
    border: "1px solid #e8eef7",
  },
  close: {
    position: "absolute" as const,
    top: 10,
    right: 12,
    zIndex: 61,
    width: 30,
    height: 30,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.9)",
    border: "1px solid #e8eef7",
    cursor: "pointer",
    fontSize: 14,
    color: "#5c6470",
    lineHeight: 1,
  },
};
