import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "CGV",
  description: "Conditions générales de vente de One Data, édité par Oropra.",
  alternates: { canonical: "/cgv" },
};

export default function Cgv() {
  return (
    <>
      <PageHero eyebrow="Légal" title="Conditions générales de vente" />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-tight">
          <div className="faq-a" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p>Les conditions générales de vente de One Data précisent les modalités d&apos;abonnement, de facturation, d&apos;engagement et de résiliation.</p>
            <p>Tarifs en vigueur : Performance 69 € HT, Connect 89 € HT, Intelligence 109 € HT par utilisateur et par mois, engagement annuel. Formation 14 jours incluse.</p>
            <p style={{ color: "var(--ink-mute)" }}>Document contractuel complet en cours de finalisation par Oropra.</p>
          </div>
        </div>
      </section>
    </>
  );
}
