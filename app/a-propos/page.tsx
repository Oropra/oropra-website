import type { Metadata } from "next";
import { Wrench, Clock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import CtaFinal from "@/components/ui/CtaFinal";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "One Data est édité par Oropra. On a passé du temps en concession avant de coder une ligne. Notre philosophie : métier d'abord, présents quand il faut, honnêtes sur ce qu'on fait.",
  alternates: { canonical: "/a-propos" },
};

const valeurs = [
  { icon: <Wrench size={20} />, title: "Métier d'abord", desc: "On parle RPV, bilatérale, stock dormant, source de lead. Pas de jargon SaaS. L'outil suit le métier, pas l'inverse." },
  { icon: <Clock size={20} />, title: "Présents quand il faut", desc: "Formation 14 jours, adaptation sous 24h, support humain. On ne disparaît pas après la signature." },
  { icon: <ShieldCheck size={20} />, title: "Honnêtes", desc: "On assume ce qu'on fait, ce qu'on ne fait pas, et la roadmap. On n'annonce pas une feature qui n'existe pas." },
];

export default function APropos() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="One Data est édité par Oropra."
        subtitle="On a passé du temps en concession avant de coder une ligne. C'est ce qui fait la différence entre un CRM générique et un outil que les vendeurs utilisent vraiment."
        primary={{ href: "/contact", label: "Nous contacter" }}
      />

      {/* Histoire */}
      <section className="section">
        <div className="container-tight">
          <Reveal className="constat" style={{ borderLeftColor: "var(--bleu)" }}>
            <div className="constat-label" style={{ color: "var(--bleu)" }}>Notre histoire</div>
            <p className="constat-text">
              On a regardé des vendeurs jongler entre leur téléphone perso, un tableur de
              stock et un CRM à moitié rempli. On a vu des directeurs piloter au doigt
              mouillé faute de données fiables. On a construit One Data pour ça : réunir
              toute la concession sur une seule donnée, et s&apos;assurer que l&apos;outil
              soit réellement utilisé.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Philosophie */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            eyebrow="Notre philosophie"
            title="Pourquoi on travaille comme ça."
          />
          <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
            {[
              ["Pourquoi 14 jours de formation ?", "Parce qu'une formation expédiée en 2 jours, c'est un CRM abandonné en 3 mois. 1 h par jour pendant 14 jours, c'est le rythme qui ancre les habitudes."],
              ["Pourquoi l'adaptation sous 24h ?", "Parce qu'un outil rigide finit contourné. Si une concession a un besoin métier précis, on l'adapte vite, sans passer par un ticket."],
              ["Pourquoi pas de ticket ?", "Parce que vous devez parler à quelqu'un qui connaît votre concession, pas à une file d'attente anonyme."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05} className="feature-card">
                <div className="feature-card-title" style={{ fontSize: 17 }}>{t}</div>
                <p className="feature-card-desc" style={{ marginTop: 8 }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="plans">
        <div className="container">
          <SectionHead eyebrow="Nos valeurs" title="Trois principes, tenus." />
          <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", marginTop: 40 }}>
            {valeurs.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05} className="feature-card">
                <div className="feature-card-icon">{v.icon}</div>
                <div className="feature-card-title">{v.title}</div>
                <p className="feature-card-desc">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manière de travailler */}
      <section className="section">
        <div className="container-tight">
          <SectionHead eyebrow="Notre manière de travailler" title="Du premier contact à la mise en route." />
          <div>
            {[
              ["Démo en 48h", "On installe une démo avec vos marques, vos sites et un échantillon de vos données. Pas de démo générique."],
              ["Déploiement en 3-4 semaines", "Paramétrage, migration de la donnée, mise en place des accès. On cale le calendrier avec vous."],
              ["Formation 14 jours", "Dès que l'outil est prêt, le formateur dédié démarre. 1 h par jour, par rôle."],
              ["Suivi continu", "Adaptation sous 24h, support humain, « Montre-moi » dans l'outil. On reste joignables."],
            ].map(([t, d]) => (
              <Reveal key={t} className="faq-item">
                <div className="faq-q">{t}</div>
                <div className="faq-a">{d}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal title="On en discute ?" subtitle="Dites-nous qui vous êtes et ce que vous utilisez aujourd'hui. On vous montre One Data sur vos données." />
    </>
  );
}
