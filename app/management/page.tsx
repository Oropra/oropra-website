import type { Metadata } from "next";
import { Users, Target, Megaphone, BarChart3 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import CtaFinal from "@/components/ui/CtaFinal";
import VideoBlock from "@/components/video/VideoBlock";
import MockKanban from "@/components/mocks/MockKanban";
import RecapPlans from "@/components/pricing/RecapPlans";

export const metadata: Metadata = {
  title: "Le management commercial",
  description:
    "Pipeline kanban en temps réel, bilatérales structurées, rapport vendeur (RPV), lead management, module marketing et dashboards par rôle.",
  alternates: { canonical: "/management" },
};

const cards = [
  { icon: <Users size={20} />, title: "Rapport vendeur (RPV)", desc: "Chaque interaction commerciale tracée, intégrée au cycle de l'opportunité. Le RPV n'est plus un fichier à part : il vit dans le CRM." },
  { icon: <Target size={20} />, title: "Lead management complet", desc: "Sources de leads (La Centrale, AutoScout24, Leboncoin, site, appel, salon), affectation aux vendeurs, scoring, relances automatiques." },
  { icon: <Megaphone size={20} />, title: "Module marketing", desc: "Segmentation de la base, campagnes SMS / email, mesure des retombées. Du marketing branché sur la donnée client réelle." },
  { icon: <BarChart3 size={20} />, title: "Dashboards par rôle", desc: "Le vendeur voit son pipe et ses relances. Le CdV voit son équipe. La direction voit les sites, les marges, le stock à risque." },
];

export default function Management() {
  return (
    <>
      <PageHero
        eyebrow="Pilier 03 — Le management commercial"
        title="Animer ses vendeurs comme un directeur sportif. Pas comme un comptable."
        subtitle="Le pipe en temps réel, par vendeur, par site. Les bilatérales structurées. Le rapport vendeur intégré au cycle commercial. Plus de tableur qui se met à jour le mardi matin."
        primary={{ href: "/contact", label: "Demander une démo" }}
        secondary={{ href: "/prix", label: "Voir les prix" }}
        visual={
          <VideoBlock
            src="/videos/features/02-opportunites.mp4"
            poster="/videos/features/posters/02-opportunites.jpg"
            tag="Pipeline et opportunités"
            duration="1:10"
            label="Voir le pipe en action"
          />
        }
      />

      {/* Pipeline */}
      <section className="pillars">
        <div className="container">
          <article className="pillar-row" style={{ paddingTop: 0 }}>
            <div className="pillar-text">
              <div className="pillar-meta">Pipeline visuel</div>
              <h2 className="pillar-title">Toutes les opportunités, par étape, par vendeur. En temps réel.</h2>
              <p className="pillar-desc">
                Du premier contact au BDC signé. Chaque opportunité avec son véhicule cible,
                son budget, sa reprise, sa source de lead. Les relances en retard
                s&apos;allument. Aucune opportunité n&apos;est oubliée.
              </p>
              <ul className="pillar-features">
                <li>Pipeline kanban par étape</li>
                <li>Source de lead tracée</li>
                <li>Relances automatiques</li>
                <li>Filtrage par vendeur / site</li>
              </ul>
            </div>
            <div className="pillar-visual">
              <MockKanban />
            </div>
          </article>
        </div>
      </section>

      {/* Bilatérales — différenciateur */}
      <section className="delco-section">
        <div className="container">
          <SectionHead
            dark
            eyebrow="Le différenciateur"
            eyebrowColor="vert"
            title="Les bilatérales structurées. Tracées. Suivies."
            subtitle="La conversation hebdomadaire entre le chef des ventes et chaque vendeur, organisée dans l'outil : préparation, tenue, engagements pris, suivi des engagements de la semaine précédente. Très peu de CRM auto le font."
          />
          <div className="delco-3-cols">
            {[
              { role: "Avant", title: "Préparation", sub: "Le CdV arrive avec les chiffres du vendeur déjà sous les yeux : pipe, relances en retard, conversion, objectif vs réalisé." },
              { role: "Pendant", title: "Tenue et engagements", sub: "On structure l'échange et on note les engagements concrets : « relancer ces 5 dossiers », « caler 3 essais cette semaine »." },
              { role: "Après", title: "Suivi", sub: "À la bilatérale suivante, les engagements de la semaine passée sont rappelés. On voit ce qui a été tenu, ce qui ne l'a pas été." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1} className="delco-col">
                <div className="delco-col-role">{c.role}</div>
                <div className="delco-col-title">{c.title}</div>
                <div className="delco-col-sub" style={{ marginBottom: 0 }}>{c.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RPV, leads, marketing, dashboards */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Le cycle commercial complet" title="Du lead à la marge, sans angle mort." />
          <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05} className="feature-card">
                <div className="feature-card-icon">{c.icon}</div>
                <div className="feature-card-title">{c.title}</div>
                <p className="feature-card-desc">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboards video */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <article className="pillar-row reverse" style={{ borderTop: "none", paddingTop: 0 }}>
            <div className="pillar-text">
              <div className="pillar-meta">Tableaux de bord</div>
              <h2 className="pillar-title">Les chiffres qu&apos;on regarde le matin. Pas une fois par mois.</h2>
              <p className="pillar-desc">
                Pas 200 indicateurs. Ceux qui comptent, par rôle, mis à jour en temps réel.
                Le directeur voit leads par source, transformation par site, marge VO/VN,
                stock à risque. Le vendeur voit ses relances du jour et son objectif.
              </p>
            </div>
            <div className="pillar-visual with-video">
              <VideoBlock
                className="pillar-video"
                src="/videos/features/06-dashboards.mp4"
                poster="/videos/features/posters/06-dashboards.jpg"
                tag="Tableaux de bord"
                duration="0:50"
                label="Voir les dashboards par rôle"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="plans">
        <div className="container">
          <SectionHead eyebrow="Inclusions par plan" title="Le socle management dès Performance." />
          <div style={{ marginTop: 40 }}>
            <RecapPlans
              rows={[
                { feature: "Pipeline kanban", performance: true, connect: true, intelligence: true },
                { feature: "Bilatérales structurées", performance: true, connect: true, intelligence: true },
                { feature: "Rapport vendeur (RPV)", performance: true, connect: true, intelligence: true },
                { feature: "Dashboards par rôle", performance: true, connect: true, intelligence: true },
                { feature: "Lead management complet", performance: false, connect: true, intelligence: true },
                { feature: "Module marketing", performance: false, connect: true, intelligence: true },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
