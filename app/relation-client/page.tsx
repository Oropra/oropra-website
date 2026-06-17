import type { Metadata } from "next";
import { Phone, MessageCircle, Smartphone, Mail } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import CtaFinal from "@/components/ui/CtaFinal";
import VideoBlock from "@/components/video/VideoBlock";
import MockCommsTimeline from "@/components/mocks/MockCommsTimeline";
import MockAppelEntrant from "@/components/mocks/MockAppelEntrant";
import MockPhone from "@/components/mocks/MockPhone";
import RecapPlans from "@/components/pricing/RecapPlans";

export const metadata: Metadata = {
  title: "La relation client unifiée",
  description:
    "VOIP, WhatsApp, SMS, email sur la fiche client, sans copier-coller. Quand un vendeur part, l'historique reste. App mobile Android One-Data Phone.",
  alternates: { canonical: "/relation-client" },
};

const channels = [
  { icon: <Phone size={20} />, title: "VOIP intégrée", desc: "Appel entrant → la fiche client s'ouvre. L'appel est journalisé sans saisie. Numéros de la concession, pas le téléphone perso du vendeur." },
  { icon: <MessageCircle size={20} />, title: "WhatsApp Business", desc: "Un seul numéro pour la concession, multi-vendeurs. Les photos de reprise envoyées par le client sont stockées sur sa fiche." },
  { icon: <Smartphone size={20} />, title: "SMS et campagnes", desc: "SMS individuel de relance depuis la fiche, ou campagne sur un segment. Tout est tracé sur l'historique client." },
  { icon: <Mail size={20} />, title: "Email natif Gmail / Outlook", desc: "Vos boîtes Gmail ou Outlook connectées. Les échanges remontent automatiquement sur la fiche, sans copier-coller." },
];

export default function RelationClient() {
  return (
    <>
      <PageHero
        eyebrow="Pilier 02 — La relation client unifiée"
        title="VOIP, WhatsApp, SMS, email. Sur la fiche client. Sans copier-coller."
        subtitle="Vos vendeurs n'ont plus besoin de leur téléphone personnel pour le boulot. Tout passe par One Data."
        primary={{ href: "/contact", label: "Demander une démo" }}
        secondary={{ href: "/prix", label: "Voir les prix" }}
        visual={
          <VideoBlock
            src="/videos/features/04-communications.mp4"
            poster="/videos/features/posters/04-communications.jpg"
            tag="Communications unifiées"
            duration="1:15"
            label="Voir VOIP + WhatsApp + SMS + email"
          />
        }
      />

      <section className="section">
        <div className="container-tight">
          <Reveal className="constat">
            <div className="constat-label">Le constat</div>
            <p className="constat-text">
              Dans la plupart des concessions, les vendeurs utilisent leur téléphone perso
              pour joindre les clients. Pratique au quotidien, catastrophique le jour où le
              vendeur part : tout l&apos;historique part avec lui, et le client appelle un
              numéro qui ne répond plus.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section sombre immersive */}
      <section className="delco-section">
        <div className="container">
          <SectionHead
            dark
            eyebrow="Historique unifié"
            title="Toutes les conversations. Un seul historique."
            subtitle="Appel, WhatsApp, SMS, email : tout est rattaché au même client, par ordre chronologique. Quand le vendeur part, l'historique reste."
          />
          <Reveal style={{ position: "relative", zIndex: 2, maxWidth: 520, margin: "0 auto" }}>
            <MockCommsTimeline />
          </Reveal>
        </div>
      </section>

      {/* Les canaux */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Les canaux"
            title="Quatre canaux. Une seule fiche."
          />
          <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {channels.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05} className="feature-card">
                <div className="feature-card-icon">{c.icon}</div>
                <div className="feature-card-title">{c.title}</div>
                <p className="feature-card-desc">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VOIP appel entrant */}
      <section className="pillars" style={{ paddingTop: 0 }}>
        <div className="container">
          <article className="pillar-row">
            <div className="pillar-text">
              <div className="pillar-meta">VOIP intégrée</div>
              <h2 className="pillar-title">L&apos;appel entrant ouvre la fiche tout seul.</h2>
              <p className="pillar-desc">
                Le client appelle, One Data reconnaît son numéro et ouvre sa fiche avec le
                brief : statut, vendeur, opportunité en cours, dernier contact. Le vendeur
                sait à qui il parle avant de décrocher.
              </p>
              <ul className="pillar-features">
                <li>Reconnaissance du numéro</li>
                <li>Brief client automatique</li>
                <li>Journal d&apos;appel sans saisie</li>
                <li>Numéros de la concession</li>
              </ul>
            </div>
            <div className="pillar-visual">
              <div style={{ position: "relative", width: 280 }}>
                <MockAppelEntrant />
              </div>
            </div>
          </article>

          {/* App mobile */}
          <article className="pillar-row reverse">
            <div className="pillar-text">
              <div className="pillar-meta">App mobile</div>
              <h2 className="pillar-title">One-Data Phone. Le CRM dans la poche du vendeur.</h2>
              <p className="pillar-desc">
                Application Android native. Le téléphone sonne, le brief client s&apos;affiche
                en plein écran. Plus de &quot;c&apos;est qui ?&quot;. L&apos;app iOS est sur la
                roadmap.
              </p>
              <ul className="pillar-features">
                <li>Android natif</li>
                <li>Brief client en appel entrant</li>
                <li>Appels rattachés à la fiche</li>
                <li className="roadmap">App mobile iOS</li>
              </ul>
            </div>
            <div className="pillar-visual">
              <MockPhone />
            </div>
          </article>
        </div>
      </section>

      <section className="plans">
        <div className="container">
          <SectionHead eyebrow="Inclusions par plan" title="Les communications sont incluses dès Connect." />
          <div style={{ marginTop: 40 }}>
            <RecapPlans
              rows={[
                { feature: "Téléphonie VOIP intégrée", performance: false, connect: true, intelligence: true },
                { feature: "WhatsApp Business", performance: false, connect: true, intelligence: true },
                { feature: "SMS individuel et campagnes", performance: false, connect: true, intelligence: true },
                { feature: "Email Gmail / Outlook", performance: false, connect: true, intelligence: true },
                { feature: "App mobile Android", performance: false, connect: true, intelligence: true },
                { feature: "App mobile iOS", performance: "Roadmap", connect: "Roadmap", intelligence: "Roadmap" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
