import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "RGPD",
  description: "Politique de protection des données personnelles de One Data, édité par Oropra. Hébergement Europe, conformité RGPD.",
  alternates: { canonical: "/rgpd" },
};

export default function Rgpd() {
  return (
    <>
      <PageHero eyebrow="Légal" title="Protection des données (RGPD)" />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-tight">
          <div className="faq-a" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p><strong>Hébergement Europe.</strong> Les données de la plateforme sont hébergées en Europe.</p>
            <p><strong>Responsable de traitement.</strong> Chaque concession reste responsable des données clients qu&apos;elle traite via One Data ; Oropra agit en sous-traitant au sens du RGPD.</p>
            <p><strong>Vos droits.</strong> Accès, rectification, effacement, portabilité : contact@oropra.fr.</p>
            <p style={{ color: "var(--ink-mute)" }}>Politique détaillée et registre des traitements en cours de finalisation par Oropra.</p>
          </div>
        </div>
      </section>
    </>
  );
}
