import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import CtaFinal from "@/components/ui/CtaFinal";
import VideoBlock from "@/components/video/VideoBlock";
import MockDataGraph from "@/components/mocks/MockDataGraph";
import MockCommsTimeline from "@/components/mocks/MockCommsTimeline";
import MockKanban from "@/components/mocks/MockKanban";
import MockDelcoSignals from "@/components/mocks/MockDelcoSignals";
import MockPhone from "@/components/mocks/MockPhone";
import PricingGrid from "@/components/pricing/PricingGrid";
import AdoptionCard from "@/components/adoption/AdoptionCard";
import ShowmeFeature from "@/components/adoption/ShowmeFeature";
import { HelpCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "One Data — Le CRM des concessions auto",
  description:
    "Clients, stock, communications, management commercial et copilote IA Delco sur une seule donnée. Vos équipes formées 1 h par jour pendant 14 jours.",
  alternates: { canonical: "/" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "One Data",
  description:
    "CRM des concessions automobiles : référentiel client, stock VO/VN, communications unifiées, management commercial et copilote IA Delco.",
  brand: { "@type": "Brand", name: "Oropra" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "69",
    highPrice: "109",
    offerCount: "3",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              En cours de déploiement sur les premiers sites pilotes
            </div>
            <h1 className="hero-title">
              Le CRM des concessions auto,{" "}
              <span>fait pour être utilisé tous les jours.</span>
            </h1>
            <p className="hero-sub">
              Clients, stock, communications, management commercial et copilote IA — sur
              une seule donnée. Vos équipes formées 1 heure par jour pendant 14 jours. Au
              bout de deux semaines, tout le monde s&apos;en sert.
            </p>
            <div className="hero-ctas">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Demander une démo
              </Button>
              <Button href="/prix" variant="secondary">
                Voir les prix
              </Button>
            </div>
            <div className="hero-trust">
              {[
                ["90+", "Tables métier"],
                ["50", "Services connectés"],
                ["14 j", "Pour que l'équipe s'en serve"],
                ["24 h", "Pour adapter l'outil"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="trust-item-num">{num}</div>
                  <div className="trust-item-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <VideoBlock
              variant="hero"
              src="/videos/features/01-referentiel-client.mp4"
              poster="/videos/features/posters/01-referentiel-client.jpg"
              tag="⬤ Démo en direct"
              duration="0:60"
              label="Vidéo : la fiche client en action"
            />
          </div>
        </div>
      </section>

      {/* CRÉDIBILITÉ */}
      <section className="credibility">
        <div className="container cred-grid">
          <div className="cred-label">
            Une vraie plateforme métier.{" "}
            <strong style={{ color: "var(--ink)" }}>Pas un patchwork de 6 outils.</strong>
          </div>
          {[
            ["90+", "Tables Supabase"],
            ["50", "Edge Functions"],
            ["80 %", "Adaptations sous 24h"],
          ].map(([num, label]) => (
            <div className="cred-stat" key={label}>
              <div className="cred-stat-num">{num}</div>
              <div className="cred-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LES 4 PILIERS */}
      <section className="pillars">
        <div className="container">
          <SectionHead
            eyebrow="Quatre piliers métier"
            title="Toute la concession sur une seule plateforme."
            subtitle="Vos vendeurs jonglent aujourd'hui entre le CRM, leur téléphone perso, leur boîte mail et un tableur partagé. One Data réunit tout ça. Une seule donnée client, partagée entre la vente, le management, le marketing et la direction."
          />

          {/* PILIER 1 */}
          <Reveal as="article" className="pillar-row">
            <div className="pillar-text">
              <div className="pillar-meta">
                <span className="pillar-meta-num">01</span>La donnée propre
              </div>
              <h3 className="pillar-title">
                Une concession qui sait ce qu&apos;elle vend, à qui, et avec quelle marge.
              </h3>
              <p className="pillar-desc">
                Un client = une fiche. Partagée par tous les services. Stock vivant par
                site, marque, modèle. Propales et BDC générés depuis l&apos;opportunité, pas
                remplis à la main.
              </p>
              <ul className="pillar-features">
                <li>Référentiel client centralisé</li>
                <li>Stock VO/VN avec marge live</li>
                <li>Photos VO (cover, portails)</li>
                <li>Propales et BDC automatisés</li>
                <li>KYC entreprises via SIRENE</li>
                <li className="roadmap">Branchements DMS par marque</li>
              </ul>
              <Link href="/donnee-propre" className="pillar-cta">
                Voir la donnée propre <ArrowRight size={16} />
              </Link>
            </div>
            <div className="pillar-visual with-video">
              <VideoBlock
                className="pillar-video"
                src="/videos/features/01-referentiel-client.mp4"
                poster="/videos/features/posters/01-referentiel-client.jpg"
                tag="Référentiel client"
                duration="0:60"
                label="Voir la fiche client en action"
              />
              <MockDataGraph />
            </div>
          </Reveal>

          {/* PILIER 2 */}
          <Reveal as="article" className="pillar-row reverse">
            <div className="pillar-text">
              <div className="pillar-meta">
                <span className="pillar-meta-num">02</span>La relation client unifiée
              </div>
              <h3 className="pillar-title">
                VOIP, WhatsApp, SMS, email. Sur la fiche client. Sans copier-coller.
              </h3>
              <p className="pillar-desc">
                Vos vendeurs n&apos;ont plus besoin de leur téléphone personnel pour le
                boulot. Tout passe par One Data. Quand un vendeur part, l&apos;historique
                reste. Quand un client rappelle, la fiche s&apos;ouvre.
              </p>
              <ul className="pillar-features">
                <li>Téléphonie VOIP intégrée</li>
                <li>WhatsApp Business multi-vendeurs</li>
                <li>SMS individuel et campagnes</li>
                <li>Email natif Gmail / Outlook</li>
                <li>App mobile Android (appels)</li>
                <li className="roadmap">App mobile iOS</li>
              </ul>
              <Link href="/relation-client" className="pillar-cta">
                Voir la relation unifiée <ArrowRight size={16} />
              </Link>
            </div>
            <div className="pillar-visual with-video">
              <VideoBlock
                className="pillar-video"
                src="/videos/features/04-communications.mp4"
                poster="/videos/features/posters/04-communications.jpg"
                tag="Communications unifiées"
                duration="1:15"
                label="Voir VOIP + WhatsApp + SMS + email"
              />
              <MockCommsTimeline />
            </div>
          </Reveal>

          {/* PILIER 3 */}
          <Reveal as="article" className="pillar-row">
            <div className="pillar-text">
              <div className="pillar-meta">
                <span className="pillar-meta-num">03</span>Le management commercial
              </div>
              <h3 className="pillar-title">
                Animer ses vendeurs comme un directeur sportif. Pas comme un comptable.
              </h3>
              <p className="pillar-desc">
                Le pipe en temps réel, par vendeur, par site. Les bilatérales structurées et
                tracées. Le rapport vendeur intégré au cycle commercial. Les sources de leads
                mesurées. Plus de tableur partagé qui se met à jour le mardi matin.
              </p>
              <ul className="pillar-features">
                <li>Pipeline kanban par étape</li>
                <li>Bilatérales structurées</li>
                <li>Rapport vendeur (RPV) intégré</li>
                <li>Lead management complet</li>
                <li>Segmentation et campagnes</li>
                <li>Dashboards par rôle</li>
              </ul>
              <Link href="/management" className="pillar-cta">
                Voir le management <ArrowRight size={16} />
              </Link>
            </div>
            <div className="pillar-visual with-video">
              <VideoBlock
                className="pillar-video"
                src="/videos/features/02-opportunites.mp4"
                poster="/videos/features/posters/02-opportunites.jpg"
                tag="Pipeline et opportunités"
                duration="1:10"
                label="Voir le pipe en action"
              />
              <MockKanban />
            </div>
          </Reveal>

          {/* PILIER 4 */}
          <Reveal as="article" className="pillar-row reverse">
            <div className="pillar-text">
              <div className="pillar-meta">
                <span className="pillar-meta-num">04</span>Le copilote IA
              </div>
              <h3 className="pillar-title">
                Delco surveille votre activité. Et vous dit quoi faire en priorité.
              </h3>
              <p className="pillar-desc">
                Adapté à chaque rôle. Un vendeur, un chef des ventes et un directeur ne
                voient pas la même chose. Même agent. Trois intelligences.
              </p>
              <ul className="pillar-features">
                <li>Signaux actionnables par rôle</li>
                <li>Recherche conversationnelle</li>
                <li>Brief du matin oral</li>
                <li>Comparaison de sites en une question</li>
                <li>Exports PDF / Excel d&apos;un clic</li>
                <li className="roadmap">Rédaction assistée des relances</li>
              </ul>
              <Link href="/delco" className="pillar-cta">
                Voir Delco <ArrowRight size={16} />
              </Link>
            </div>
            <div className="pillar-visual with-video">
              <VideoBlock
                className="pillar-video"
                src="/videos/features/08-delco-ia.mp4"
                poster="/videos/features/posters/08-delco-ia.jpg"
                tag="⭐ Delco IA"
                duration="1:30"
                label="Voir l'agent IA en action"
              />
              <MockDelcoSignals
                role="Vendeur"
                signals={[
                  {
                    level: "critical",
                    title: (
                      <>
                        3 propales en attente —{" "}
                        <span className="mock-delco-sig-num">78 000 €</span> en jeu
                      </>
                    ),
                    meta: ["Plus ancienne : 6 jours", "Vu : oui"],
                    action: "→ Relancer aujourd'hui",
                  },
                  {
                    level: "alert",
                    title: (
                      <>
                        <span className="mock-delco-sig-num">17 leads</span> sans action
                        depuis 14 jours
                      </>
                    ),
                    meta: ["Source La Centrale : 12", "Source Site : 5"],
                    action: "→ Voir la liste",
                  },
                  {
                    title: "M. Dubois a ouvert son devis 3 fois en 2 jours",
                    meta: ["Dernière ouverture il y a 2 h"],
                    action: "→ Appeler maintenant",
                  },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DELCO IMMERSIVE */}
      <section className="delco-section">
        <div className="container">
          <SectionHead
            dark
            eyebrow="Le copilote IA — Delco"
            title="Un seul agent. Trois intelligences."
            subtitle="Le vendeur voit ses dossiers à relancer. Le chef des ventes voit son équipe à coacher. Le directeur voit ses sites qui décrochent. Même intelligence, lectures différentes."
          />
          <div className="delco-3-cols">
            {[
              {
                role: "Vendeur",
                title: "Mes dossiers à relancer",
                sub: "Ce qu'il faut faire aujourd'hui.",
                cards: [
                  { level: "critical", text: <>3 propales en attente, <span className="delco-sig-num">78 000 €</span> en jeu</> },
                  { level: "alert", text: <><span className="delco-sig-num">17 leads</span> sans action depuis 2 semaines</> },
                  { level: "", text: <>M. Dubois a ouvert son devis 3 fois aujourd&apos;hui</> },
                ],
              },
              {
                role: "Chef des ventes",
                title: "Mon équipe à coacher",
                sub: "Qui assure, qui décroche, qui doit être suivi.",
                cards: [
                  { level: "alert", text: <>Sandra convertit à <span className="delco-sig-num">75 %</span>, l&apos;équipe à 94 %</> },
                  { level: "", text: <><span className="delco-sig-num">3 vendeurs</span> sans bilatérale cette semaine</> },
                  { level: "", text: <>Pipeline en hausse : <span className="delco-sig-num">+18 %</span> vs semaine -1</> },
                ],
              },
              {
                role: "Direction",
                title: "Mes sites qui décrochent",
                sub: "Les signaux faibles avant qu'ils touchent les ventes.",
                cards: [
                  { level: "critical", text: <><span className="delco-sig-num">3 155 VO</span> dorment, 98,6 M€ immobilisés</> },
                  { level: "alert", text: <><span className="delco-sig-num">4 sites</span> sous 22 % de conversion</> },
                  { level: "", text: <>Lyon Nord : meilleure semaine du mois</> },
                ],
              },
            ].map((col, ci) => (
              <Reveal key={col.role} delay={ci * 0.1} className="delco-col">
                <div className="delco-col-role">{col.role}</div>
                <div className="delco-col-title">{col.title}</div>
                <div className="delco-col-sub">{col.sub}</div>
                {col.cards.map((c, i) => (
                  <div key={i} className={`delco-signal-card ${c.level}`.trim()}>
                    <div className="delco-sig-text">{c.text}</div>
                  </div>
                ))}
              </Reveal>
            ))}
          </div>
          <div className="delco-footer-line">
            <strong>Disponible avec le plan Intelligence</strong> — à 109 € HT / user / mois.
          </div>
        </div>
      </section>

      {/* APP MOBILE */}
      <section className="mobile-section">
        <div className="container mobile-grid">
          <Reveal>
            <span className="section-eyebrow">Application mobile</span>
            <h2 className="section-title">
              One-Data Phone. Le CRM dans la poche du vendeur.
            </h2>
            <p className="section-sub">
              Application Android native. Le téléphone sonne, le brief client s&apos;affiche
              en plein écran : qui appelle, quelle opportunité, quel vendeur, dernier
              contact. Plus de &quot;c&apos;est qui ?&quot;. Plus de téléphone perso.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 24, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: 13, color: "var(--ink-soft)", marginBottom: 4, fontWeight: 600 }}>
                  Android
                </div>
                <div style={{ fontSize: 13, color: "var(--ink-mute)" }}>Disponible aujourd&apos;hui</div>
              </div>
              <div>
                <div style={{ fontSize: 13, color: "var(--ink-soft)", marginBottom: 4, fontWeight: 600 }}>
                  iOS
                </div>
                <span
                  style={{
                    background: "var(--orange-soft)",
                    color: "#b8810b",
                    padding: "2px 7px",
                    borderRadius: 3,
                    fontWeight: 600,
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  Roadmap
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mobile-img">
            <MockPhone />
          </Reveal>
        </div>
      </section>

      {/* ADOPTION GARANTIE */}
      <section className="adoption-section">
        <div className="container">
          <SectionHead
            eyebrow="L'adoption garantie"
            title="Un CRM qui n'est pas utilisé, c'est de l'argent perdu."
            subtitle="On a vu trop de CRM installés à grands frais, jamais utilisés au bout de six mois. Quatre dispositifs combinés pour que ça n'arrive pas chez vous."
          />
          <div className="adoption-grid">
            <AdoptionCard
              icon="14j"
              iconColor="vert"
              name="Formation 14 jours"
              title="1 heure par jour, sur vos vraies données."
              description="Un formateur One Data dédié à votre concession pendant 14 jours ouvrés. Sessions individuelles, adaptées au rôle de chaque personne. À J+15, l'outil est utilisé."
              features={[
                "Présentiel ou visio selon votre préférence",
                "Adapté au rôle (vendeur, accueil, CdV, direction)",
                "Compte-rendu hebdomadaire à la direction",
              ]}
            />
            <AdoptionCard
              icon="24h"
              iconColor="orange"
              name="Adaptation sous 24h"
              title="Pas de ticket. Pas de support technique à passer."
              description="Votre interlocuteur Oropra connaît votre concession, vos process, vos vendeurs. Il est formé à la techno qui propulse One Data. Vous lui demandez un changement métier, il le met en prod."
              features={[
                "80 % des demandes traitées en moins de 24h",
                "Un seul interlocuteur, métier",
                "Demande en langage métier, pas en specs techniques",
              ]}
            />

            <ShowmeFeature />

            <AdoptionCard
              icon={<HelpCircle size={20} />}
              name="Centre d'aide"
              title="Vidéos courtes et guides pas à pas."
              description="Accessible à tout moment depuis l'outil. Vidéos de 1 à 3 minutes par fonctionnalité, guides étape par étape, articles pour aller plus loin sur les paramétrages avancés."
              features={[
                "Vidéos courtes par fonctionnalité",
                "Guides étape par étape avec captures",
                "Notes de version à chaque mise à jour",
              ]}
            />
            <AdoptionCard
              icon={<Phone size={20} />}
              iconColor="orange"
              name="Support humain"
              title="Vous parlez aux gens qui vous ont formés."
              description="Pas de centre d'appel. Pas de ticket dans une file d'attente. Le support One Data, c'est l'équipe qui connaît votre concession, votre paramétrage, vos vendeurs."
              features={[
                "Chat / email : engagements de réponse par plan",
                "Téléphone disponible à partir du plan Connect",
                "Un référent dédié sur le plan Intelligence",
              ]}
            />
          </div>
        </div>
      </section>

      {/* PRIX */}
      <section className="plans">
        <div className="container">
          <SectionHead
            eyebrow="Tarification"
            title="Des prix simples. Affichés. Sans piège."
            subtitle="Un prix unique par utilisateur, quelle que soit la taille de votre structure. Remise volume sur devis. Formation 14 jours toujours incluse."
          />
          <PricingGrid />
        </div>
      </section>

      {/* CTA FINAL */}
      <CtaFinal />
    </>
  );
}
