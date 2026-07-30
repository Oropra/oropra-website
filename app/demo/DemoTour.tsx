"use client";

// ============================================================================
//  DemoTour — accompagnement de la démo One Data
//  ---------------------------------------------------------------------------
//  Inspiré de tours.js (spotlight + tooltip + navigation), mais orienté
//  découverte de la démo :
//   - un bouton flottant « Montre-moi » présent sur chaque page (bas gauche)
//   - à l'arrivée, une bulle d'accueil pointe le bouton
//   - chaque route a son tour contextuel (dashboard, clients, pipe, VO, Delco…)
//   - spotlight sur la cible + tooltip Précédent/Suivant
// ============================================================================

import { useEffect, useRef, useState } from "react";

type TourStep = {
  target?: string; // sélecteur CSS de l'élément à surligner (optionnel → étape centrée)
  title: string;
  body: string;
};

type TourDef = {
  label: string; // titre du tour (affiché nulle part mais utile)
  steps: TourStep[];
};

// Tours par route (clé = sous-chemin de /demo, "" = accueil/dashboard)
const TOURS: Record<string, TourDef> = {
  "": {
    label: "Votre tableau de bord",
    steps: [
      {
        title: "Bienvenue chez One Data 👋",
        body: "Vous êtes Jules, vendeur chez Renault Lyon Part-Dieu. Cette démo tourne sur des données fictives, mais tout le reste est le vrai produit. Suivez le guide.",
      },
      {
        target: '[data-od-module="dashboard"] .d-hero, #dash-root',
        title: "Votre journée en un coup d'œil",
        body: "Dès la connexion, votre tableau de bord vous dit où vous en êtes : commandes, position dans l'équipe, cycles ouverts. Pas un rapport — un point de départ pour agir.",
      },
      {
        target: ".od-bar-inner, .od-bar",
        title: "Toute la concession, ici",
        body: "Clients, Ventes, Management, Véhicules : chaque univers du produit est accessible depuis cette barre. On y reviendra page par page.",
      },
      {
        target: ".od-delco",
        title: "Voici Delco, votre agent IA",
        body: "Cliquez sur Delco à tout moment pour lui poser une question en français. Il lit vos données et vous répond avec le chiffre — et vous souffle la bonne action.",
      },
      {
        title: "À vous de jouer",
        body: "Explorez les pages, ouvrez une fiche client, interrogez Delco. Sur chaque page, le bouton « Montre-moi » en bas à gauche relance une visite guidée.",
      },
    ],
  },
  client: {
    label: "La base client",
    steps: [
      {
        title: "La base client",
        body: "Tous vos clients, cherchables en un instant. Chaque client réunit ses coordonnées, ses véhicules, ses opportunités et tout l'historique de contact.",
      },
      {
        target: '[data-od-module="client-search"] input, .od-playground input',
        title: "Recherchez un client",
        body: "Tapez un nom, un véhicule ou un numéro. La fiche s'ouvre avec tout le contexte, partagé par toute la concession.",
      },
    ],
  },
  "pipe-commercial": {
    label: "Le pipeline commercial",
    steps: [
      {
        title: "Le pipeline commercial",
        body: "Toutes vos affaires, de Brouillon à Gagné. Chaque carte est un client et son véhicule ; l'âge de l'affaire vous alerte quand elle traîne.",
      },
      {
        target: '[data-od-module="kanban"] .kan-board, #kanban-root',
        title: "Les étapes de vente",
        body: "Propale, BDC, Gagné : en tête de chaque colonne, le nombre d'affaires, le montant et le taux de conversion. Glissez une carte pour la faire avancer.",
      },
    ],
  },
  "vo-liste": {
    label: "Le stock VO",
    steps: [
      {
        title: "Le stock VO",
        body: "Tout votre stock d'occasion, avec pour chaque véhicule son prix, sa marge, ses jours de stock. Les véhicules contremarqués ressortent en rouge.",
      },
      {
        target: '[data-od-module="vo-liste"] table, .od-playground table',
        title: "Repérez le stock dormant",
        body: "La colonne des jours de stock vous alerte : au-delà de 90-180 jours, la dépréciation s'accélère. Demandez à Delco vos VO les plus vieux !",
      },
    ],
  },
  delco: {
    label: "Delco, votre agent IA",
    steps: [
      {
        title: "Delco, votre agent IA",
        body: "Posez votre question comme à un collègue : « Mes 3 VO les plus vieux ? », « Comment va mon équipe cette semaine ? ». Delco lit vos données et répond.",
      },
      {
        target: '[data-od-module="delco-chat"] .cp-quick, .od-playground .cp-quick',
        title: "Des raccourcis prêts à l'emploi",
        body: "Pas d'inspiration ? Cliquez un raccourci : mes leads à relancer, mes propales, préparer un RDV, stock VO. Delco fait le reste.",
      },
    ],
  },
};

const DEFAULT_TOUR: TourDef = {
  label: "Cette page",
  steps: [
    {
      title: "Explorez cette page",
      body: "Vous êtes dans le vrai produit One Data, sur des données fictives. Cliquez, ouvrez, testez — rien n'est enregistré. Et interrogez Delco à tout moment.",
    },
  ],
};

function tourForPath(pathname: string): TourDef {
  const sub = pathname.replace(/^\/demo\/?/, "").split("/")[0] || "";
  return TOURS[sub] || DEFAULT_TOUR;
}

export default function DemoTour({ pathname }: { pathname: string }) {
  const [active, setActive] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [hint, setHint] = useState(false); // bulle d'accueil qui pointe le bouton
  const hlRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const [tipPos, setTipPos] = useState<{ top: number; left: number } | null>(null);
  const [hlBox, setHlBox] = useState<DOMRect | null>(null);

  const tour = tourForPath(pathname);
  const step = tour.steps[stepIdx];

  // Bulle d'accueil au 1er chargement de la session
  useEffect(() => {
    let shown = false;
    try {
      shown = sessionStorage.getItem("od_tour_hint_shown") === "1";
    } catch (_e) {}
    if (!shown) {
      const t = setTimeout(() => setHint(true), 1400);
      const t2 = setTimeout(() => {
        setHint(false);
        try {
          sessionStorage.setItem("od_tour_hint_shown", "1");
        } catch (_e) {}
      }, 8000);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
      };
    }
  }, []);

  // Repositionner le spotlight + tooltip sur la cible de l'étape courante
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    let tries = 0;

    const place = () => {
      if (!step.target) {
        setHlBox(null);
        setTipPos(null); // → tooltip centré via CSS
        return;
      }
      const el = document.querySelector(step.target) as HTMLElement | null;
      if (el) {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) {
          try {
            el.scrollIntoView({ block: "center", behavior: "smooth" });
          } catch (_e) {}
          setTimeout(() => {
            const rr = el.getBoundingClientRect();
            setHlBox(rr);
            positionTip(rr);
          }, 260);
          return;
        }
      }
      // cible pas encore là → réessayer un peu
      if (tries < 12) {
        tries++;
        raf = window.setTimeout(place, 200);
      } else {
        setHlBox(null);
        setTipPos(null);
      }
    };

    const positionTip = (r: DOMRect) => {
      const tw = 320;
      const th = tipRef.current?.offsetHeight || 160;
      const m = 12;
      let top = r.bottom + m;
      let left = r.left;
      if (top + th > window.innerHeight - m) top = Math.max(m, r.top - th - m);
      if (left + tw > window.innerWidth - m) left = window.innerWidth - tw - m;
      if (left < m) left = m;
      setTipPos({ top, left });
    };

    place();

    const onScrollResize = () => {
      if (!step.target) return;
      const el = document.querySelector(step.target) as HTMLElement | null;
      if (el) {
        const r = el.getBoundingClientRect();
        setHlBox(r);
        positionTip(r);
      }
    };
    window.addEventListener("scroll", onScrollResize, true);
    window.addEventListener("resize", onScrollResize);
    return () => {
      clearTimeout(raf);
      window.removeEventListener("scroll", onScrollResize, true);
      window.removeEventListener("resize", onScrollResize);
    };
  }, [active, stepIdx, step, pathname]);

  const startTour = () => {
    setHint(false);
    try {
      sessionStorage.setItem("od_tour_hint_shown", "1");
    } catch (_e) {}
    setStepIdx(0);
    setActive(true);
  };

  const endTour = () => {
    setActive(false);
    setHlBox(null);
    setTipPos(null);
  };

  const next = () => {
    if (stepIdx >= tour.steps.length - 1) endTour();
    else setStepIdx(stepIdx + 1);
  };
  const prev = () => setStepIdx(Math.max(0, stepIdx - 1));

  return (
    <>
      {/* Bouton flottant « Montre-moi » (bas gauche, opposé au FAB Delco) */}
      {!active && (
        <div style={fab.wrap}>
          {hint && (
            <div style={fab.hint}>
              <b>Nouvelle page ?</b> Cliquez ici pour une visite guidée.
              <div style={fab.hintArrow} />
            </div>
          )}
          <button style={fab.btn} onClick={startTour} aria-label="Visite guidée">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Montre-moi
          </button>
        </div>
      )}

      {/* Overlay actif : spotlight + tooltip */}
      {active && (
        <>
          {/* Catcher : capte les clics pour ne pas interagir avec la page pendant la visite */}
          <div style={overlay.catcher} onClick={(e) => e.stopPropagation()} />

          {/* Spotlight sur la cible */}
          {hlBox && (
            <div
              ref={hlRef}
              style={{
                ...overlay.hl,
                left: hlBox.left - 6,
                top: hlBox.top - 6,
                width: hlBox.width + 12,
                height: hlBox.height + 12,
              }}
            />
          )}
          {/* Si pas de cible : voile plein pour centrer la bulle */}
          {!hlBox && <div style={overlay.veil} />}

          {/* Tooltip */}
          <div
            ref={tipRef}
            style={{
              ...overlay.tip,
              ...(tipPos
                ? { top: tipPos.top, left: tipPos.left }
                : {
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }),
            }}
          >
            <button style={overlay.quit} onClick={endTour} aria-label="Quitter">
              ✕
            </button>
            <div style={overlay.tipTitle}>{step.title}</div>
            <div style={overlay.tipBody}>{step.body}</div>
            <div style={overlay.foot}>
              <span style={overlay.stepCount}>
                {stepIdx + 1} / {tour.steps.length}
              </span>
              <div style={{ display: "flex", gap: 8 }}>
                {stepIdx > 0 && (
                  <button style={overlay.btnPrev} onClick={prev}>
                    Précédent
                  </button>
                )}
                <button style={overlay.btnNext} onClick={next}>
                  {stepIdx >= tour.steps.length - 1 ? "Terminer" : "Suivant"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

/* ===================== styles ===================== */
const fab = {
  wrap: {
    position: "fixed" as const,
    bottom: 24,
    left: 24,
    zIndex: 70,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
    gap: 10,
  },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#2557a1",
    color: "white",
    border: "none",
    borderRadius: 999,
    padding: "11px 18px",
    fontSize: 14,
    fontWeight: 700,
    fontFamily: '"Nunito Sans", system-ui, sans-serif',
    cursor: "pointer",
    boxShadow: "0 8px 24px rgba(37,87,161,0.34)",
  },
  hint: {
    position: "relative" as const,
    background: "white",
    color: "#1c2b45",
    borderRadius: 12,
    padding: "12px 14px",
    fontSize: 13,
    lineHeight: 1.45,
    maxWidth: 240,
    boxShadow: "0 12px 34px rgba(0,0,0,0.2)",
    fontFamily: '"Nunito Sans", system-ui, sans-serif',
    border: "1px solid #e8eef7",
  },
  hintArrow: {
    position: "absolute" as const,
    bottom: -7,
    left: 24,
    width: 14,
    height: 14,
    background: "white",
    borderRight: "1px solid #e8eef7",
    borderBottom: "1px solid #e8eef7",
    transform: "rotate(45deg)",
  },
};

const overlay = {
  catcher: {
    position: "fixed" as const,
    inset: 0,
    zIndex: 2147482999,
    background: "transparent",
  },
  hl: {
    position: "fixed" as const,
    zIndex: 2147483000,
    borderRadius: 10,
    border: "2px solid #53bda7",
    boxShadow:
      "0 0 0 100vmax rgba(22,41,74,0.6), 0 0 0 4px rgba(83,189,167,0.5)",
    pointerEvents: "none" as const,
    transition: "all 0.2s ease",
  },
  veil: {
    position: "fixed" as const,
    inset: 0,
    zIndex: 2147483000,
    background: "rgba(22,41,74,0.6)",
    pointerEvents: "none" as const,
  },
  tip: {
    position: "fixed" as const,
    zIndex: 2147483002,
    background: "white",
    color: "#1c2b45",
    borderRadius: 14,
    padding: "18px 20px",
    maxWidth: 320,
    width: "calc(100vw - 32px)",
    boxShadow: "0 16px 44px rgba(0,0,0,0.3)",
    fontFamily: '"Nunito Sans", system-ui, sans-serif',
  },
  quit: {
    position: "absolute" as const,
    top: 12,
    right: 14,
    background: "none",
    border: "none",
    fontSize: 15,
    lineHeight: 1,
    color: "#8895ad",
    cursor: "pointer",
  },
  tipTitle: {
    margin: "0 16px 8px 0",
    fontSize: 17,
    fontWeight: 800,
    color: "#16294a",
  },
  tipBody: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.55,
    color: "#41506b",
  },
  foot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    gap: 10,
  },
  stepCount: {
    fontSize: 12,
    color: "#8895ad",
    fontWeight: 600,
  },
  btnPrev: {
    border: "none",
    borderRadius: 9,
    padding: "8px 14px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    background: "#eef1f7",
    color: "#41506b",
    fontFamily: "inherit",
  },
  btnNext: {
    border: "none",
    borderRadius: 9,
    padding: "8px 16px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    background: "#2557a1",
    color: "white",
    fontFamily: "inherit",
  },
};
