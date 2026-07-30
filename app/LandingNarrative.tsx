"use client";

// ============================================================================
//  LANDING NARRATIVE v4 — One Data
//  Vraies captures produit dans des cadres flottants (perspective 3D qui se
//  redresse au scroll). Métier concessionnaire approfondi. Ton équilibré.
//
//  Captures attendues dans /public/screens/ :
//    dashboard.png, fiche-client.png, kanban.png, liste-vo.png,
//    fiche-vo.png, bilaterale.png, delco.png
//  Logo dans /public/logo-one-data.svg
// ============================================================================

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* Compteur animé au scroll */
function useCountUp(target: number, dur = 1400) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min((t - t0) / dur, 1);
              setVal(target * (1 - Math.pow(1 - p, 3)));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, dur]);
  return { val, ref };
}

function Stat({
  target,
  suffix,
  prefix,
  color,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  color: string;
}) {
  const { val, ref } = useCountUp(target);
  return (
    <span ref={ref} className="od-stat-num" style={{ color }}>
      {prefix}
      {val.toFixed(0)}
      {suffix}
    </span>
  );
}

/* Cadre capture statique (net, sans transformation) */
function Shot({
  src,
  alt,
}: {
  src: string;
  alt: string;
  align?: "left" | "right" | "center";
}) {
  return (
    <div className="od-shot">
      <div className="od-shot-bar">
        <span style={{ background: "#ff5f57" }} />
        <span style={{ background: "#febc2e" }} />
        <span style={{ background: "#28c840" }} />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </div>
  );
}

export default function LandingNarrative() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="od-landing">
      <style jsx global>{`
        .od-landing {
          --vert: #53bda7;
          --vert-dk: #0f6e56;
          --bleu: #2557a1;
          --bleu-dk: #1f4a85;
          --bleu-soft: #e8eff8;
          --vert-soft: #e7f5f1;
          --orange: #f8ba36;
          --orange-soft: #fef4dd;
          --rouge: #e24b4a;
          --paper: #ffffff;
          --ink: #0f1419;
          --ink-soft: #5c6470;
          --ink-mute: #9098a1;
          --rule: #ececea;
          --night: #16294a;
          --font: "Inter", system-ui, sans-serif;
          --mono: "JetBrains Mono", ui-monospace, monospace;
          font-family: var(--font);
          color: var(--ink);
          background: var(--paper);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        .od-landing *::selection {
          background: var(--vert);
          color: white;
        }
        .od-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--vert), var(--bleu));
          z-index: 200;
          transition: width 0.1s linear;
        }
        .od-nav {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          pointer-events: none;
          transition: all 0.3s;
        }
        .od-nav.scrolled {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--rule);
          padding: 12px 40px;
        }
        .od-nav > * {
          pointer-events: auto;
        }
        .od-logo img {
          height: 30px;
          width: auto;
          display: block;
        }
        .od-nav-cta {
          background: var(--bleu);
          color: white;
          padding: 10px 20px;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.15s;
        }
        .od-nav-cta:hover {
          background: var(--vert);
          transform: translateY(-1px);
        }
        .od-seq {
          position: relative;
          padding: 128px 40px;
          max-width: 1160px;
          margin: 0 auto;
        }
        .od-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 40px;
          position: relative;
        }
        .od-hero-kick {
          font-family: var(--mono);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--vert-dk);
          margin-bottom: 26px;
          padding: 6px 14px;
          background: var(--vert-soft);
          border-radius: 999px;
        }
        .od-hero h1 {
          font-size: clamp(42px, 7.5vw, 94px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.035em;
          max-width: 16ch;
        }
        .od-hero h1 .muted {
          color: var(--ink-mute);
        }
        .od-hero h1 .accent {
          color: var(--vert);
        }
        .od-hero-sub {
          margin-top: 32px;
          font-size: clamp(17px, 2vw, 22px);
          color: var(--ink-soft);
          line-height: 1.55;
          max-width: 640px;
        }
        .od-hero-cta {
          margin-top: 40px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .od-btn-primary {
          background: var(--bleu);
          color: white;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.16s;
        }
        .od-btn-primary:hover {
          background: var(--vert);
          transform: translateY(-2px);
        }
        .od-btn-ghost {
          background: transparent;
          color: var(--ink-soft);
          padding: 16px 26px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid var(--rule);
          transition: all 0.16s;
        }
        .od-btn-ghost:hover {
          border-color: var(--ink-soft);
          color: var(--ink);
        }
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.in {
          opacity: 1;
          transform: none;
        }
        .reveal-d1 {
          transition-delay: 0.1s;
        }
        .reveal-d2 {
          transition-delay: 0.2s;
        }
        .od-kicker {
          font-family: var(--mono);
          font-size: 13px;
          font-weight: 600;
          color: var(--vert-dk);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .od-kicker.red {
          color: var(--rouge);
        }
        .od-kicker.orange {
          color: #b7791a;
        }
        .od-h2 {
          font-size: clamp(30px, 4.4vw, 52px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.02em;
          max-width: 19ch;
        }
        .od-h2.wide {
          max-width: 24ch;
        }
        .od-lead {
          font-size: clamp(17px, 1.85vw, 20px);
          color: var(--ink-soft);
          line-height: 1.62;
          max-width: 640px;
          margin-top: 24px;
        }
        .od-lead b {
          color: var(--ink);
          font-weight: 700;
        }
        .od-pain {
          background: var(--night);
          color: white;
          max-width: none;
        }
        .od-pain .od-h2 {
          color: white;
        }
        .od-pain .od-lead {
          color: #a9b2bd;
        }
        .od-pain .od-lead b {
          color: #ffffff;
        }
        .od-pain-inner {
          max-width: 1160px;
          margin: 0 auto;
        }
        .od-stat-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 58px;
        }
        .od-stat {
          border-top: 2px solid rgba(255, 255, 255, 0.12);
          padding-top: 20px;
        }
        .od-stat-num {
          font-size: clamp(38px, 5vw, 58px);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1;
          display: inline-block;
        }
        .od-stat-lbl {
          margin-top: 12px;
          font-size: 15px;
          color: #a9b2bd;
          line-height: 1.5;
        }
        .od-stat-lbl b {
          color: white;
        }
        .od-stat-src {
          margin-top: 8px;
          font-family: var(--mono);
          font-size: 11px;
          color: #5a6470;
        }
        /* Sections avec capture : texte + shot côte à côte */
        .od-feature {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 60px;
          align-items: center;
          margin-top: 40px;
        }
        .od-feature.reverse {
          direction: rtl;
        }
        .od-feature.reverse > * {
          direction: ltr;
        }
        .od-feat-list {
          list-style: none;
          margin-top: 26px;
          padding: 0;
        }
        .od-feat-list li {
          padding: 11px 0 11px 30px;
          position: relative;
          font-size: 16px;
          color: var(--ink-soft);
          border-bottom: 1px solid var(--rule);
        }
        .od-feat-list li b {
          color: var(--ink);
          font-weight: 700;
        }
        .od-feat-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 15px;
          width: 15px;
          height: 15px;
          border-radius: 4px;
          background: var(--vert);
        }
        /* Cadre capture */
        .od-shot {
          border-radius: 14px;
          overflow: hidden;
          background: white;
          box-shadow: 0 30px 80px -20px rgba(15, 25, 50, 0.35),
            0 8px 24px -12px rgba(15, 25, 50, 0.2);
          border: 1px solid var(--rule);
        }
        .od-shot-bar {
          height: 34px;
          background: #f4f5f7;
          border-bottom: 1px solid var(--rule);
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 14px;
        }
        .od-shot-bar span {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .od-shot img {
          display: block;
          width: 100%;
          height: auto;
        }
        .od-delco {
          background: radial-gradient(circle at 25% 15%, #1d3a63 0%, var(--night) 58%);
          color: white;
          max-width: none;
        }
        .od-delco-inner {
          max-width: 1160px;
          margin: 0 auto;
        }
        .od-delco .od-h2 {
          color: white;
        }
        .od-delco .od-lead {
          color: #a9b2bd;
        }
        .od-delco .od-lead b {
          color: #ffffff;
        }
        .od-delco-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(83, 189, 167, 0.14);
          border: 1px solid rgba(83, 189, 167, 0.3);
          color: var(--vert);
          padding: 7px 16px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
        }
        .od-delco-shot {
          margin-top: 50px;
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
        }
        .od-adopt-big {
          font-size: clamp(64px, 12vw, 150px);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 0.9;
          background: linear-gradient(120deg, var(--bleu), var(--vert));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .od-pricing {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 54px;
        }
        .od-plan {
          border: 1px solid var(--rule);
          border-radius: 18px;
          padding: 32px;
          background: var(--paper);
          transition: all 0.2s;
        }
        .od-plan:hover {
          border-color: var(--vert);
          transform: translateY(-4px);
          box-shadow: 0 14px 44px rgba(37, 87, 161, 0.09);
        }
        .od-plan.featured {
          border-color: var(--bleu);
          border-width: 2px;
          position: relative;
        }
        .od-plan.featured::before {
          content: "Le plus complet";
          position: absolute;
          top: -11px;
          left: 24px;
          background: var(--bleu);
          color: white;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 12px;
          border-radius: 999px;
        }
        .od-plan-name {
          font-weight: 700;
          font-size: 19px;
        }
        .od-plan-tag {
          font-size: 13px;
          color: var(--ink-mute);
          margin-top: 4px;
          min-height: 34px;
        }
        .od-plan-price {
          font-size: 44px;
          font-weight: 900;
          margin: 14px 0 2px;
          letter-spacing: -0.02em;
        }
        .od-plan-price span {
          font-size: 15px;
          font-weight: 500;
          color: var(--ink-mute);
        }
        .od-plan-unit {
          font-size: 13px;
          color: var(--ink-mute);
        }
        .od-final {
          min-height: 96vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: radial-gradient(circle at 50% 38%, var(--vert-soft) 0%, var(--paper) 64%);
          padding: 40px;
        }
        .od-final h2 {
          font-size: clamp(38px, 6vw, 76px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.03em;
          max-width: 16ch;
        }
        .od-final h2 .accent {
          color: var(--vert);
        }
        .od-final-sub {
          font-size: clamp(17px, 2vw, 22px);
          color: var(--ink-soft);
          margin-top: 26px;
          max-width: 600px;
          line-height: 1.55;
        }
        .od-final-cta {
          margin-top: 42px;
          background: var(--bleu);
          color: white;
          padding: 21px 46px;
          border-radius: 14px;
          font-size: 19px;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.18s;
          display: inline-block;
          box-shadow: 0 12px 44px rgba(15, 20, 25, 0.2);
        }
        .od-final-cta:hover {
          background: var(--vert);
          transform: translateY(-3px) scale(1.02);
        }
        .od-final-note {
          margin-top: 22px;
          font-family: var(--mono);
          font-size: 13px;
          color: var(--ink-mute);
        }
        .od-final-alt {
          margin-top: 18px;
          font-size: 15px;
          color: var(--ink-soft);
        }
        .od-final-alt a {
          color: var(--bleu);
          text-decoration: underline;
          font-weight: 600;
        }
        .od-scroll-hint {
          position: absolute;
          bottom: 34px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: var(--ink-mute);
          font-size: 12px;
          font-family: var(--mono);
        }
        .od-scroll-line {
          width: 1px;
          height: 42px;
          background: linear-gradient(var(--ink-mute), transparent);
          animation: odpulse 2s ease-in-out infinite;
        }
        @keyframes odpulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        @media (max-width: 860px) {
          .od-feature,
          .od-stat-row,
          .od-pricing {
            grid-template-columns: 1fr;
          }
          .od-feature.reverse {
            direction: ltr;
          }
          .od-seq {
            padding: 90px 22px;
          }
        }
        @media (max-width: 600px) {
          .od-nav {
            padding: 12px 16px;
          }
          .od-nav.scrolled {
            padding: 10px 16px;
          }
          .od-logo img {
            height: 24px;
          }
          .od-nav-cta {
            padding: 8px 12px;
            font-size: 12px;
          }
          .od-hero {
            padding: 90px 20px 40px;
            min-height: auto;
          }
          .od-hero h1 {
            font-size: clamp(34px, 11vw, 46px);
          }
          .od-hero-sub {
            font-size: 16px;
            margin-top: 24px;
          }
          .od-hero-cta {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }
          .od-hero-cta a {
            width: 100%;
            text-align: center;
          }
          .od-seq {
            padding: 70px 18px;
          }
          .od-h2 {
            font-size: clamp(26px, 7vw, 34px);
          }
          .od-lead {
            font-size: 16px;
          }
          .od-stat-num {
            font-size: clamp(34px, 12vw, 46px);
          }
          .od-adopt-big {
            font-size: clamp(52px, 20vw, 90px);
          }
          .od-final h2 {
            font-size: clamp(30px, 9vw, 44px);
          }
          .od-final-cta {
            padding: 17px 32px;
            font-size: 17px;
          }
          .od-shot-bar {
            height: 26px;
          }
        }
      `}</style>

      <div className="od-progress" style={{ width: `${progress}%` }} />

      <nav className={`od-nav${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="od-logo" aria-label="One Data">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-one-data.svg" alt="One Data" />
        </Link>
        <Link href="/demo" className="od-nav-cta">
          Entrer dans la démo →
        </Link>
      </nav>

      {/* HERO */}
      <section className="od-hero">
        <div className="od-hero-kick">Le CRM des concessions auto</div>
        <h1>
          Le premier CRM que vos vendeurs
          <br />
          ouvrent <span className="accent">avec plaisir.</span>
        </h1>
        <p className="od-hero-sub">
          Une fiche client partagée, un stock qui parle, un pipeline clair, et
          Delco qui souffle la bonne action au bon moment. La concession enfin
          sur la même page.
        </p>
        <div className="od-hero-cta">
          <Link href="/demo" className="od-btn-primary">
            Entrer dans One Data →
          </Link>
          <a href="#pourquoi" className="od-btn-ghost">
            Voir pourquoi
          </a>
        </div>
        <div className="od-scroll-hint">
          <span>Découvrir</span>
          <div className="od-scroll-line" />
        </div>
      </section>

      {/* CHAOS */}
      <section className="od-seq od-pain" id="pourquoi">
        <div className="od-pain-inner">
          <div className="reveal">
            <div className="od-kicker red">● La réalité en concession</div>
            <h2 className="od-h2 wide">
              Chaque semaine, de l&apos;argent sort par la porte. Sans que personne
              ne le voie.
            </h2>
            <p className="od-lead">
              Le DMS d&apos;un côté, un CRM à moitié rempli de l&apos;autre, le
              stock sur Excel, les clients dans le téléphone perso des vendeurs.
              Six outils qui ne se parlent pas — et la donnée qui fuit à chaque
              trou.
            </p>
          </div>
          <div className="od-stat-row reveal reveal-d1">
            <div className="od-stat">
              <Stat target={79} suffix=" %" color="#ff6b6a" />
              <div className="od-stat-lbl">
                des leads ne sont <b>jamais relancés</b>. Autant de ventes qui
                partent à la concurrence.
              </div>
              <div className="od-stat-src">Source : Salesforce</div>
            </div>
            <div className="od-stat">
              <Stat target={30} prefix="+" suffix=" %" color="#f8ba36" />
              <div className="od-stat-lbl">
                de transformation en plus avec un suivi réellement tenu, du
                premier contact au BDC signé.
              </div>
              <div className="od-stat-src">Source : études sectorielles</div>
            </div>
            <div className="od-stat">
              <Stat target={55} suffix=" %" color="#53bda7" />
              <div className="od-stat-lbl">
                de marge à l&apos;<b>atelier</b> — le pôle le plus rentable, et le
                plus mal suivi faute d&apos;outil.
              </div>
              <div className="od-stat-src">Source : Auto Infos / McKinsey</div>
            </div>
          </div>

          <div className="reveal reveal-d1" style={{ marginTop: 80, textAlign: "center" }}>
            <h2 className="od-h2" style={{ margin: "0 auto", maxWidth: "20ch", color: "white" }}>
              La plupart des CRM analysent le passé. One Data déclenche
              l&apos;action.
            </h2>
            <p className="od-lead" style={{ margin: "22px auto 0", color: "#a9b2bd" }}>
              Dès la connexion, chacun voit ce qui compte <b style={{ color: "white" }}>maintenant</b> :
              qui rappeler, quelle propale relancer, quel VO faire bouger, quel
              rendez-vous préparer. Pas un rapport de plus — un plan de bataille
              pour la journée.
            </p>
          </div>
          <div className="reveal reveal-d2" style={{ marginTop: 44 }}>
            <Shot src="/screens/dashboard.png" alt="Tableau de bord One Data" />
          </div>
        </div>
      </section>

      {/* DONNÉE PROPRE — fiche client */}
      <section className="od-seq">
        <div className="reveal">
          <div className="od-kicker">● La donnée propre</div>
          <h2 className="od-h2">
            Un client = une fiche. La même pour toute la concession.
          </h2>
        </div>
        <div className="od-feature reveal reveal-d1">
          <div>
            <p className="od-lead">
              Coordonnées, véhicules, opportunités, passages atelier, appels, SMS,
              WhatsApp, e-mails : tout est rattaché au même client, avec
              l&apos;historique complet codé par type de contact.{" "}
              <b>Quand un vendeur part, la donnée reste.</b>
            </p>
            <ul className="od-feat-list">
              <li>
                <b>Fiche unique</b> partagée vente / accueil / direction
              </li>
              <li>Historique de contact codé (choc, relance, abandon…)</li>
              <li>Appel, WhatsApp, e-mail, SMS depuis la fiche</li>
              <li>Véhicules, reprises, opportunités rattachés</li>
            </ul>
          </div>
          <Shot src="/screens/fiche-client.png" alt="Fiche client One Data" align="right" />
        </div>
      </section>

      {/* MANAGEMENT — kanban */}
      <section className="od-seq">
        <div className="od-feature reverse reveal">
          <div>
            <div className="od-kicker">● Le pilotage commercial</div>
            <h2 className="od-h2" style={{ fontSize: "clamp(26px,3.6vw,44px)" }}>
              Tout le pipeline, d&apos;un coup d&apos;œil. Du brouillon au BDC
              signé.
            </h2>
            <p className="od-lead">
              Chaque opportunité avec son véhicule, son montant, sa reprise, son
              ancienneté. Les taux de transformation entre étapes s&apos;affichent
              en direct. <b>Le chef des ventes voit tout, en temps réel.</b>
            </p>
            <ul className="od-feat-list">
              <li>Pipeline par étape, par vendeur, par site</li>
              <li>Taux de passage Propale → BDC → Gagné</li>
              <li>Filtres VN / VO, particulier / société, financement</li>
            </ul>
          </div>
          <Shot src="/screens/kanban.png" alt="Pipeline commercial One Data" align="left" />
        </div>
      </section>

      {/* STOCK — liste VO + fiche VO */}
      <section className="od-seq">
        <div className="reveal">
          <div className="od-kicker">● Le stock qui parle</div>
          <h2 className="od-h2">
            Vous voyez la marge fondre avant qu&apos;elle ne parte.
          </h2>
          <p className="od-lead">
            Chaque VO avec son prix, son prix d&apos;achat, ses jours de stock, sa
            pastille d&apos;état. Les véhicules <b>contremarqués</b> ressortent en
            rouge, le stock dormant s&apos;allume — <b>avant</b> que le portage ne
            mange le bénéfice.
          </p>
        </div>
        <div className="reveal reveal-d1" style={{ marginTop: 44 }}>
          <Shot src="/screens/liste-vo.png" alt="Liste VO One Data" />
        </div>
        <div className="od-feature reveal" style={{ marginTop: 64 }}>
          <div>
            <h2 className="od-h2" style={{ fontSize: "clamp(24px,3.2vw,38px)" }}>
              La fiche VO complète, jusqu&apos;au coût de portage.
            </h2>
            <ul className="od-feat-list">
              <li>Photos, identité, technique, stock &amp; achat</li>
              <li>
                <b>Jours de stock</b>, origine, garantie, TVA, marge
              </li>
              <li>Factures APV rattachées au véhicule</li>
            </ul>
          </div>
          <Shot src="/screens/fiche-vo.png" alt="Fiche VO One Data" align="right" />
        </div>
      </section>

      {/* BILATÉRALE — coaching */}
      <section className="od-seq">
        <div className="od-feature reverse reveal">
          <div>
            <div className="od-kicker orange">● Le management d&apos;équipe</div>
            <h2 className="od-h2" style={{ fontSize: "clamp(26px,3.6vw,44px)" }}>
              La bilatérale préparée toute seule. Le vendeur accompagné, pas
              contrôlé.
            </h2>
            <p className="od-lead">
              Chaque entretien individuel arrive avec les chiffres du vendeur déjà
              là : commandes VN/VO, transfo, financements, gravages, cycles
              ouverts. <b>Le manager coache sur du concret, le compte-rendu
              s&apos;écrit tout seul.</b>
            </p>
            <ul className="od-feat-list">
              <li>Performances par vendeur, prêtes pour l&apos;entretien</li>
              <li>Objectifs VN, financement, contrats service, gravages</li>
              <li>Compte-rendu en brouillon auto</li>
            </ul>
          </div>
          <Shot src="/screens/bilaterale.png" alt="Bilatérale One Data" align="left" />
        </div>
      </section>

      {/* DELCO */}
      <section className="od-seq od-delco">
        <div className="od-delco-inner">
          <div className="reveal">
            <div className="od-delco-badge">
              <svg viewBox="0 0 64 64" style={{ width: 16, height: 16 }} fill="currentColor">
                <path d="M 36 8 L 18 36 L 30 36 L 26 56 L 46 28 L 34 28 L 36 8 Z" />
              </svg>
              Delco · l&apos;agent IA de One Data
            </div>
            <h2 className="od-h2 wide">
              Il ne répond pas qu&apos;à vos questions. Il vous dit quoi faire
              avant que vous ne demandiez.
            </h2>
            <p className="od-lead">
              « Comment se débrouille mon équipe cette semaine ? » — Delco lit la
              donnée de vos sites et répond avec le tableau. Mais il va plus loin :
              il repère la propale qui va tomber, le lead qui refroidit, le VO à
              sortir, et <b>vous pousse l&apos;action avant qu&apos;il ne soit trop
              tard.</b> Pas de filtre à construire. Il ne dort jamais.
            </p>
          </div>
          <div className="od-delco-shot reveal reveal-d1">
            <Shot src="/screens/delco.png" alt="Delco, l'agent IA de One Data" />
          </div>
        </div>
      </section>

      {/* ADOPTION */}
      <section className="od-seq">
        <div className="reveal" style={{ textAlign: "center" }}>
          <div className="od-kicker" style={{ justifyContent: "center" }}>
            ● L&apos;adoption garantie
          </div>
          <div className="od-adopt-big">14 jours</div>
          <h2 className="od-h2" style={{ margin: "24px auto 0", maxWidth: "20ch" }}>
            1 heure par jour. Sur vos vraies données. Et tout le monde s&apos;en
            sert.
          </h2>
          <p className="od-lead" style={{ margin: "24px auto 0" }}>
            70 % des CRM sont abandonnés à trois mois. Nous, on installe
            l&apos;habitude : un formateur dédié à votre concession pendant 14
            jours ouvrés, chaque rôle formé sur son quotidien — vendeur, chef des
            ventes, direction. À J+15, l&apos;outil est entré dans les mœurs.
          </p>
        </div>
      </section>

      {/* PRIX */}
      <section className="od-seq">
        <div className="reveal">
          <div className="od-kicker">● Les prix</div>
          <h2 className="od-h2">Trois plans. Par utilisateur, par mois.</h2>
        </div>
        <div className="od-pricing reveal reveal-d1">
          <div className="od-plan">
            <div className="od-plan-name">Performance</div>
            <div className="od-plan-tag">
              La donnée propre : clients, stock, atelier, management.
            </div>
            <div className="od-plan-price">
              89 € <span>HT</span>
            </div>
            <div className="od-plan-unit">par utilisateur / mois</div>
          </div>
          <div className="od-plan featured">
            <div className="od-plan-name">Connect</div>
            <div className="od-plan-tag">
              Tout Performance + téléphonie, SMS, WhatsApp, email.
            </div>
            <div className="od-plan-price">
              119 € <span>HT</span>
            </div>
            <div className="od-plan-unit">par utilisateur / mois</div>
          </div>
          <div className="od-plan">
            <div className="od-plan-name">Intelligence</div>
            <div className="od-plan-tag">
              Tout Connect + Delco, l&apos;agent IA sur vos données.
            </div>
            <div className="od-plan-price">
              149 € <span>HT</span>
            </div>
            <div className="od-plan-unit">par utilisateur / mois</div>
          </div>
        </div>
        <p className="od-lead reveal reveal-d2" style={{ marginTop: 28, fontSize: 15 }}>
          Engagement 12 mois. Au-delà d&apos;un certain volume de licences, prix
          dégressif — sur devis selon vos sites et vos utilisateurs.
        </p>
      </section>

      {/* FINAL */}
      <section className="od-seq od-final">
        <h2 className="reveal">
          Ne nous croyez pas.
          <br />
          <span className="accent">Prenez la main.</span>
        </h2>
        <p className="od-final-sub reveal reveal-d1">
          Entrez dans One Data en tant que vendeur d&apos;une concession fictive.
          Cliquez, ouvrez une fiche, interrogez Delco. Tout est réel, sauf les
          données.
        </p>
        <Link href="/demo" className="od-final-cta reveal reveal-d2">
          Entrer dans la démo →
        </Link>
        <div className="od-final-note reveal reveal-d2">
          Aucun compte. Aucune installation. 2 minutes.
        </div>
        <div className="od-final-alt reveal reveal-d2">
          Vous préférez sur vos propres données ?{" "}
          <a
            href="mailto:bienvenue@oropra.com?subject=Demande%20de%20d%C3%A9mo%20One%20Data&body=Bonjour%2C%0A%0AJe%20souhaite%20une%20d%C3%A9mo%20de%20One%20Data%20sur%20mes%20propres%20donn%C3%A9es.%0A%0AConcession%20%3A%20%0ANombre%20de%20sites%20%3A%20%0ANombre%20d%27utilisateurs%20%3A%20%0AT%C3%A9l%C3%A9phone%20%3A%20%0A%0AMerci%20%21"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demandez une démo sur vos données
          </a>
        </div>
      </section>
    </div>
  );
}
