import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site One Data, édité par Oropra.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <>
      <PageHero eyebrow="Légal" title="Mentions légales" />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-tight">
          <div className="faq-a" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p><strong>Éditeur.</strong> One Data est édité par Oropra. Contact : contact@oropra.fr.</p>
            <p><strong>Hébergement.</strong> Infrastructure hébergée en Europe.</p>
            <p><strong>Propriété intellectuelle.</strong> L&apos;ensemble des contenus de ce site est la propriété d&apos;Oropra, sauf mention contraire.</p>
            <p style={{ color: "var(--ink-mute)" }}>Page en cours de finalisation par Oropra.</p>
          </div>
        </div>
      </section>
    </>
  );
}
