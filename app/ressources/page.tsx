import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import CtaFinal from "@/components/ui/CtaFinal";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Blog, guides, roadmap publique et changelog de One Data. Des contenus utiles pour le métier, pas des livres blancs de 80 pages.",
  alternates: { canonical: "/ressources" },
};

const articles = [
  "Pourquoi 70 % des CRM auto finissent inutilisés",
  "Bilatérales : la réunion qui change le mois commercial",
  "Stock dormant : combien ça coûte vraiment",
  "Téléphone perso des vendeurs : le risque qu'on sous-estime",
  "Sources de leads : lesquelles convertissent en concession",
  "Delco : ce qu'un copilote IA doit faire (et ne pas faire)",
];

const guides = [
  "Checklist : migrer d'un ancien CRM sans perdre la donnée",
  "Modèle de plan de formation 14 jours par rôle",
  "Grille d'audit de la donnée client en concession",
  "Guide des indicateurs à suivre par rôle",
];

const roadmap = [
  { head: "Disponible", color: "var(--vert)", items: ["Référentiel client", "Stock VO/VN", "Propales & BDC", "VOIP / WhatsApp / SMS / Email", "Pipeline & bilatérales", "App Android", "Delco — signaux par rôle"] },
  { head: "En bêta", color: "var(--bleu)", items: ["Recherche conversationnelle avancée", "Exports Excel paramétrables"] },
  { head: "Prochain trimestre", color: "var(--orange)", items: ["Rédaction assistée des relances", "Branchements DMS (1res marques)"] },
  { head: "Plus tard", color: "var(--ink-mute)", items: ["App mobile iOS", "Module reporting avancé natif"] },
];

const changelog = [
  { v: "Juin 2026", items: ["Restructuration en 3 plans (Performance / Connect / Intelligence)", "Delco : signaux Direction multi-sites"] },
  { v: "Mai 2026", items: ["WhatsApp Business multi-vendeurs", "Suivi de signature Envoyé → Vu → Signé"] },
  { v: "Avril 2026", items: ["Brief client en appel entrant sur l'app Android", "Alertes stock dormant 30/60/90 j"] },
];

export default function Ressources() {
  return (
    <>
      <PageHero
        eyebrow="Ressources"
        title="Des contenus utiles pour le métier, pas des livres blancs de 80 pages."
        subtitle="Des articles courts, des guides actionnables, et une roadmap qu'on assume publiquement."
      />

      {/* Blog */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Blog" title="Articles" subtitle="Bientôt en ligne. Voici ce qui arrive." />
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {articles.map((a, i) => (
              <Reveal key={a} delay={i * 0.04} className="feature-card">
                <div className="feature-card-icon"><FileText size={20} /></div>
                <div className="feature-card-title" style={{ fontSize: 16 }}>{a}</div>
                <p className="feature-card-desc" style={{ marginTop: 8, color: "var(--ink-mute)" }}>À venir</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead eyebrow="Guides" title="Guides téléchargeables" subtitle="Bientôt disponibles au téléchargement." />
          <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {guides.map((g, i) => (
              <Reveal key={g} delay={i * 0.05} className="feature-card" style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div className="feature-card-icon" style={{ marginBottom: 0 }}><Download size={20} /></div>
                <div>
                  <div className="feature-card-title" style={{ fontSize: 16, marginBottom: 2 }}>{g}</div>
                  <p className="feature-card-desc" style={{ color: "var(--ink-mute)" }}>À venir</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap publique */}
      <section className="plans">
        <div className="container">
          <SectionHead
            eyebrow="Roadmap publique"
            eyebrowColor="orange"
            title="Ce qui est là, ce qui arrive. Sans promesse en l'air."
            subtitle="Les features se déplacent au fil du temps. On affiche l'état réel, pas une vitrine."
          />
          <div className="roadmap-board">
            {roadmap.map((col, ci) => (
              <Reveal key={col.head} delay={ci * 0.05} className="roadmap-col">
                <div className="roadmap-col-head">
                  <span className="roadmap-col-dot" style={{ background: col.color }} />
                  {col.head}
                </div>
                {col.items.map((it) => (
                  <div className="roadmap-item" key={it}>{it}</div>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="section">
        <div className="container-tight">
          <SectionHead eyebrow="Changelog" title="Ce qui a été livré récemment." />
          <div>
            {changelog.map((c) => (
              <Reveal key={c.v} className="faq-item">
                <div className="faq-q">{c.v}</div>
                <ul className="plan-incl-list" style={{ marginTop: 10 }}>
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
