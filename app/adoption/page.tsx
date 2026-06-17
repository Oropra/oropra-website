import type { Metadata } from "next";
import { HelpCircle, Phone, Zap } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import CtaFinal from "@/components/ui/CtaFinal";
import VideoBlock from "@/components/video/VideoBlock";
import AdoptionCard from "@/components/adoption/AdoptionCard";
import ShowmeFeature from "@/components/adoption/ShowmeFeature";

export const metadata: Metadata = {
  title: "L'adoption garantie",
  description:
    "Formation 14 jours, visites guidées « Montre-moi », centre d'aide, adaptation sous 24h et support humain. Pour qu'un CRM installé soit un CRM utilisé.",
  alternates: { canonical: "/adoption" },
};

export default function Adoption() {
  return (
    <>
      <PageHero
        eyebrow="L'adoption garantie"
        title="Un CRM qui n'est pas utilisé, c'est de l'argent perdu."
        subtitle="On a vu trop de CRM installés à grands frais, jamais utilisés au bout de six mois. Voici comment on s'assure que ça n'arrive pas chez vous."
        primary={{ href: "/contact", label: "Demander une démo" }}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-tight">
          <Reveal className="constat">
            <div className="constat-label">Le constat</div>
            <p className="constat-text">
              70 % des CRM ne sont pas utilisés à 3 mois. Toujours les mêmes raisons : trop
              rigide, formation expédiée en 2 jours, pas adapté au métier. On a construit
              One Data et ses dispositifs d&apos;adoption pour casser ce schéma.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Formation 14 jours */}
      <section id="formation" className="pillars" style={{ paddingTop: 0, scrollMarginTop: 80 }}>
        <div className="container">
          <article className="pillar-row" style={{ paddingTop: 0 }}>
            <div className="pillar-text">
              <div className="pillar-meta" style={{ color: "#2f8a76" }}>Formation 14 jours</div>
              <h2 className="pillar-title">14 jours. 1 heure par jour. Sur vos vraies données.</h2>
              <p className="pillar-desc">
                Un formateur One Data dédié à votre concession pendant 14 jours ouvrés.
                Sessions individuelles, adaptées au rôle de chaque personne. Tous les rôles
                formés, pas seulement le chef des ventes. À J+15, tout le monde s&apos;en
                sert.
              </p>
              <ul className="pillar-features">
                <li>Présentiel ou visio</li>
                <li>Adapté à chaque rôle</li>
                <li>Sur vos données réelles</li>
                <li>Compte-rendu hebdo à la direction</li>
              </ul>
            </div>
            <div className="pillar-visual with-video">
              <VideoBlock
                className="pillar-video"
                src="/videos/features/07-formation.mp4"
                poster="/videos/features/posters/07-formation.jpg"
                tag="Formation 14 jours"
                duration="1:00"
                label="Voir le parcours de formation"
              />
            </div>
          </article>
        </div>
      </section>

      {/* Montre-moi mis en avant */}
      <section id="montre-moi" className="adoption-section" style={{ scrollMarginTop: 80 }}>
        <div className="container">
          <SectionHead
            eyebrow="La feature en évidence"
            eyebrowColor="purple"
            title="« Montre-moi » — la visite guidée dans l'outil."
            subtitle="La formation finit, mais les questions continuent. « Montre-moi » prend le relais : une visite guidée contextuelle, dans l'outil, pour chaque tâche."
          />
          <div className="adoption-grid" style={{ marginTop: 0 }}>
            <ShowmeFeature />
          </div>
        </div>
      </section>

      {/* Adaptation 24h + Centre d'aide + Support */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Les autres dispositifs"
            title="Trois relais après la formation."
          />
          <div className="adoption-grid">
            <AdoptionCard
              id="adaptation"
              icon={<Zap size={20} />}
              iconColor="orange"
              name="Adaptation sous 24h"
              title="Pas de ticket. Pas de support technique à passer."
              description="Votre interlocuteur Oropra connaît votre concession, vos process, vos vendeurs. Vous lui demandez un changement métier en langage métier, il le met en prod."
              features={[
                "80 % des demandes traitées en moins de 24h",
                "Un seul interlocuteur, métier",
                "Demande en langage métier, pas en specs",
              ]}
            />
            <AdoptionCard
              id="centre-aide"
              icon={<HelpCircle size={20} />}
              name="Centre d'aide"
              title="Vidéos courtes et guides pas à pas."
              description="Accessible à tout moment depuis l'outil. Vidéos de 1 à 3 minutes par fonctionnalité, guides étape par étape, articles pour les paramétrages avancés."
              features={[
                "Vidéos courtes par fonctionnalité",
                "Guides étape par étape avec captures",
                "Notes de version à chaque mise à jour",
              ]}
            />
            <AdoptionCard
              id="support"
              icon={<Phone size={20} />}
              iconColor="vert"
              name="Support humain"
              title="Vous parlez aux gens qui vous ont formés."
              description="Pas de centre d'appel. Pas de ticket dans une file d'attente. Le support One Data, c'est l'équipe qui connaît votre concession, votre paramétrage, vos vendeurs."
              features={[
                "Chat / email : engagements de réponse par plan",
                "Téléphone à partir du plan Connect",
                "Référent dédié sur le plan Intelligence",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Témoignages futurs */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal
            className="honesty"
            style={{ textAlign: "center", background: "var(--paper-soft)" }}
          >
            <div className="honesty-title">Les retours des sites pilotes arrivent.</div>
            <p className="feature-card-desc" style={{ maxWidth: 560, margin: "8px auto 0" }}>
              One Data est en cours de déploiement sur ses premiers sites pilotes. Plutôt
              que d&apos;inventer des témoignages, on préfère attendre les vrais. Ils seront
              publiés ici.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaFinal
        title="Vous voulez voir le dispositif d'adoption en détail ?"
        subtitle="On vous présente le plan de formation 14 jours adapté à votre concession et à vos rôles."
      />
    </>
  );
}
