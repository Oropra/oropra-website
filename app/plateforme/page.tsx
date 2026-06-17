import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Database, MessageSquare, LineChart, Bot } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import CtaFinal from "@/components/ui/CtaFinal";
import MockDataGraph from "@/components/mocks/MockDataGraph";

export const metadata: Metadata = {
  title: "La plateforme",
  description:
    "La plateforme métier qui réunit ce qu'aucun CRM auto ne couvre : donnée propre, relation client unifiée, management commercial et copilote IA. Architecture, périmètre, stack.",
  alternates: { canonical: "/plateforme" },
};

const pillars = [
  { num: "01", icon: <Database size={20} />, title: "La donnée propre", desc: "Référentiel client, stock VO/VN, propales, BDC, KYC SIRENE.", href: "/donnee-propre" },
  { num: "02", icon: <MessageSquare size={20} />, title: "La relation client unifiée", desc: "VOIP, WhatsApp, SMS, email sur la fiche. App mobile.", href: "/relation-client" },
  { num: "03", icon: <LineChart size={20} />, title: "Le management commercial", desc: "Pipeline, bilatérales, RPV, leads, marketing, dashboards.", href: "/management" },
  { num: "04", icon: <Bot size={20} />, title: "Delco, l'IA métier", desc: "Signaux par rôle, recherche conversationnelle, exports.", href: "/delco" },
];

export default function Plateforme() {
  return (
    <>
      <PageHero
        eyebrow="La plateforme"
        title="La plateforme métier qui réunit ce qu'aucun CRM auto ne couvre."
        subtitle="Pas un CRM générique avec un module auto en plus. Une plateforme pensée concession, de la donnée client jusqu'au copilote IA."
        primary={{ href: "/contact", label: "Demander une démo" }}
        secondary={{ href: "/prix", label: "Voir les prix" }}
        visual={
          <div className="pillar-visual" style={{ minHeight: 420 }}>
            <MockDataGraph />
          </div>
        }
      />

      {/* Vision */}
      <section className="section">
        <div className="container-tight">
          <Reveal className="constat">
            <div className="constat-label">Pourquoi One Data existe</div>
            <p className="constat-text">
              Une concession fait tourner six outils qui ne se parlent pas : le DMS, un CRM,
              un tableur de stock, la téléphonie, WhatsApp, la boîte mail. La donnée client
              est éclatée, personne n&apos;a la même information, et le pilotage se fait au
              doigt mouillé. One Data réunit tout ça sur une seule donnée.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Architecture */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            eyebrow="Architecture"
            title="One Data au centre. Vos outils et vos rôles autour."
            subtitle="La donnée client est au cœur. Les sources alimentent la plateforme, les rôles la consultent selon leurs besoins."
          />
          <Reveal className="feature-card" style={{ padding: 40 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                gap: 24,
                alignItems: "center",
              }}
            >
              <div>
                <div className="mc-section-title">Sources de données</div>
                {["DMS (par marque)", "Portails leads", "Téléphonie VOIP", "WhatsApp / Email"].map((s) => (
                  <div key={s} className="roadmap-item" style={{ marginBottom: 8 }}>{s}</div>
                ))}
              </div>
              <div
                style={{
                  background: "var(--ink)",
                  color: "#fff",
                  borderRadius: 12,
                  padding: "24px 20px",
                  textAlign: "center",
                  fontWeight: 700,
                  minWidth: 120,
                }}
              >
                One Data
                <div style={{ fontSize: 11, fontWeight: 500, color: "var(--vert)", marginTop: 4 }}>
                  donnée unique
                </div>
              </div>
              <div>
                <div className="mc-section-title">Rôles</div>
                {["Vendeur", "Chef des ventes", "Direction", "Marketing", "Accueil"].map((s) => (
                  <div key={s} className="roadmap-item" style={{ marginBottom: 8 }}>{s}</div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 piliers synthèse */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead eyebrow="Les quatre piliers" title="Quatre piliers, une seule plateforme." />
          <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {pillars.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.05} className="feature-card">
                <div className="feature-card-icon">{p.icon}</div>
                <div className="feature-card-title">
                  <span style={{ color: "var(--ink-mute)", fontFamily: "var(--mono)", marginRight: 8 }}>{p.num}</span>
                  {p.title}
                </div>
                <p className="feature-card-desc">{p.desc}</p>
                <Link href={p.href} className="pillar-cta" style={{ marginTop: 14, fontSize: 14 }}>
                  En savoir plus <ArrowRight size={15} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stack technique */}
      <section className="delco-section">
        <div className="container-tight">
          <SectionHead
            dark
            eyebrow="Pour les DSI"
            eyebrowColor="vert"
            title="Une vraie plateforme, pas un assemblage."
          />
          <div className="delco-3-cols">
            {[
              ["90+", "tables métier sur Supabase"],
              ["50", "Edge Functions déployées"],
              ["Europe", "hébergement, conformité RGPD"],
            ].map(([num, label], i) => (
              <Reveal key={label} delay={i * 0.1} className="delco-col">
                <div className="delco-sig-num" style={{ fontSize: 34 }}>{num}</div>
                <div className="delco-col-sub" style={{ marginTop: 8, marginBottom: 0 }}>{label}</div>
              </Reveal>
            ))}
          </div>
          <p className="delco-footer-line">
            Plateforme construite sur Supabase et WeWeb. Agent IA déployé. Sauvegardes et
            mises à jour continues.
          </p>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
