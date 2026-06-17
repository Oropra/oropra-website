import type { Metadata } from "next";
import { Compass, Search, BarChart3, FileDown } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import CtaFinal from "@/components/ui/CtaFinal";
import VideoBlock from "@/components/video/VideoBlock";
import MockDelcoSignals from "@/components/mocks/MockDelcoSignals";

export const metadata: Metadata = {
  title: "Delco, l'IA métier",
  description:
    "Un seul agent, trois intelligences. Delco surveille votre activité et vous dit quoi faire en priorité, selon votre rôle. Recherche conversationnelle, brief du matin, exports.",
  alternates: { canonical: "/delco" },
};

const capabilities = [
  { icon: <Compass size={20} />, title: "Copilote par rôle", desc: "Delco scanne votre activité et remonte des signaux actionnables, adaptés à votre rôle : vendeur, chef des ventes ou directeur." },
  { icon: <Search size={20} />, title: "Recherche conversationnelle", desc: "Posez vos questions en langage naturel. « Combien de VO de plus de 180 jours en stock ? » → le chiffre et la liste, tout de suite." },
  { icon: <BarChart3 size={20} />, title: "Pilotage et synthèse", desc: "Synthèse du pipeline, comparaison de sites, signaux faibles. Une vision réseau pour la direction, en une question." },
  { icon: <FileDown size={20} />, title: "Exports PDF / Excel", desc: "Un clic sur une réponse Delco, un PDF ou un Excel prêt à partager en réunion. Pas de copier-coller dans un tableur." },
];

export default function Delco() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Le copilote IA — Delco"
        title="Un seul agent. Trois intelligences."
        subtitle="Delco surveille votre activité, en permanence. Et ne vous montre que ce qui vous concerne. Le vendeur, le chef des ventes et le directeur ne voient pas la même chose."
        primary={{ href: "/contact", label: "Demander une démo" }}
        secondary={{ href: "/prix", label: "Voir le plan Intelligence" }}
        visual={
          <VideoBlock
            variant="hero"
            src="/videos/features/08-delco-ia.mp4"
            poster="/videos/features/posters/08-delco-ia.jpg"
            tag="⭐ Delco IA"
            duration="1:30"
            label="Voir l'agent IA en action"
          />
        }
      />

      {/* Ce que fait Delco */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Ce que fait Delco" title="Quatre choses, faites bien." />
          <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05} className="feature-card">
                <div className="feature-card-icon">{c.icon}</div>
                <div className="feature-card-title">{c.title}</div>
                <p className="feature-card-desc">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 rôles avec MockDelcoSignals */}
      <section className="delco-section">
        <div className="container">
          <SectionHead
            dark
            eyebrow="Trois rôles"
            eyebrowColor="vert"
            title="Même agent. Lecture différente selon qui regarde."
          />
          <div className="delco-3-cols">
            <Reveal>
              <MockDelcoSignals
                role="Vendeur"
                greeting="Bonjour Antoine. Voici ta priorité du jour :"
                signals={[
                  { level: "critical", title: <>3 propales en attente — <span className="mock-delco-sig-num">78 000 €</span> en jeu</>, action: "→ Relancer aujourd'hui" },
                  { level: "alert", title: <><span className="mock-delco-sig-num">17 leads</span> sans action depuis 2 semaines</>, action: "→ Voir la liste" },
                ]}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <MockDelcoSignals
                role="Chef des ventes"
                greeting="Bonjour Sandra. L'équipe ce matin :"
                signals={[
                  { level: "alert", title: <>Léa convertit à <span className="mock-delco-sig-num">75 %</span>, l&apos;équipe à 94 %</>, action: "→ Préparer la bilatérale" },
                  { title: <><span className="mock-delco-sig-num">3 vendeurs</span> sans bilatérale cette semaine</>, action: "→ Planifier" },
                ]}
              />
            </Reveal>
            <Reveal delay={0.2}>
              <MockDelcoSignals
                role="Direction"
                greeting="Bonjour. Vos sites ce matin :"
                signals={[
                  { level: "critical", title: <><span className="mock-delco-sig-num">3 155 VO</span> dorment, 98,6 M€ immobilisés</>, action: "→ Voir par site" },
                  { level: "alert", title: <><span className="mock-delco-sig-num">4 sites</span> sous 22 % de conversion</>, action: "→ Comparer" },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recherche conversationnelle + brief */}
      <section className="section">
        <div className="container">
          <article className="pillar-row" style={{ paddingTop: 0, borderTop: "none" }}>
            <div className="pillar-text">
              <div className="pillar-meta">Recherche conversationnelle</div>
              <h2 className="pillar-title">Posez la question. Delco répond avec le chiffre et la liste.</h2>
              <p className="pillar-desc">
                Pas de filtre à construire, pas de tableau croisé. Vous écrivez votre
                question comme vous la poseriez à un collègue, Delco interroge la donnée et
                répond.
              </p>
            </div>
            <div className="pillar-visual">
              <div className="mock-delco" style={{ maxWidth: 420 }}>
                <div className="mock-delco-card">
                  <div className="mock-delco-head">
                    <div className="mock-delco-title-grp">
                      <div className="mock-delco-avatar">D</div>
                      <div className="mock-delco-name">Delco</div>
                    </div>
                  </div>
                  <div className="mock-delco-body">
                    <div
                      style={{
                        background: "var(--paper-soft)",
                        border: "1px solid var(--rule)",
                        borderRadius: 8,
                        padding: "10px 12px",
                        fontSize: 13,
                        marginBottom: 12,
                        color: "var(--ink)",
                      }}
                    >
                      Combien de VO de plus de 180 jours en stock ?
                    </div>
                    <div className="mock-delco-signal">
                      <div className="mock-delco-sig-title">
                        <span className="mock-delco-sig-num">312 VO</span> en stock depuis
                        plus de 180 jours
                      </div>
                      <div className="mock-delco-sig-meta">
                        <span>Lyon Nord : 98</span>
                        <span>Annecy : 74</span>
                        <span>Grenoble : 63</span>
                      </div>
                      <div className="mock-delco-sig-action">→ Exporter la liste en PDF</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Honnêteté — ce que Delco ne fait pas */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-tight">
          <Reveal className="honesty">
            <div className="honesty-title">Ce que Delco ne fait pas</div>
            <p className="feature-card-desc">
              On préfère le dire clairement. Delco est un copilote de pilotage, pas un
              générateur de contenu. Aujourd&apos;hui, Delco ne fait pas :
            </p>
            <ul className="honesty-list">
              <li>Pas d&apos;analyse de sentiment des conversations</li>
              <li>Pas de synthèse automatique du contenu d&apos;un appel</li>
              <li>Pas de rédaction de mails ou de messages à votre place</li>
              <li>Pas de réponse automatique aux clients</li>
              <li>Pas de prédiction de vente « magique » sans donnée derrière</li>
            </ul>
            <p className="feature-card-desc" style={{ marginTop: 20 }}>
              La rédaction assistée des relances est sur la roadmap. Quand ce sera en prod,
              on le dira. Pas avant.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Disponibilité */}
      <section className="plans">
        <div className="container-tight" style={{ textAlign: "center" }}>
          <SectionHead
            eyebrow="Disponibilité"
            eyebrowColor="purple"
            title="Delco est inclus dans le plan Intelligence."
            subtitle="109 € HT / utilisateur / mois. Tout Connect, plus le copilote IA, la recherche conversationnelle, le brief du matin, les exports et un référent dédié Oropra."
          />
        </div>
      </section>

      <CtaFinal
        title="Vous voulez voir Delco sur vos chiffres ?"
        subtitle="On branche Delco sur un échantillon de vos données et on vous montre les signaux qu'il remonte pour chaque rôle."
      />
    </>
  );
}
