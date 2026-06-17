import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import CtaFinal from "@/components/ui/CtaFinal";
import PricingGrid from "@/components/pricing/PricingGrid";
import RecapPlans from "@/components/pricing/RecapPlans";

export const metadata: Metadata = {
  title: "Prix",
  description:
    "Des prix simples, affichés, sans piège. Performance 69 €, Connect 89 €, Intelligence 109 € HT / utilisateur / mois. Formation 14 jours incluse dans tous les plans.",
  alternates: { canonical: "/prix" },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "One Data",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android",
  offers: [
    { "@type": "Offer", name: "Performance", price: "69", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Connect", price: "89", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Intelligence", price: "109", priceCurrency: "EUR" },
  ],
};

const comparatif: { cat: string; rows: Parameters<typeof RecapPlans>[0]["rows"] }[] = [
  {
    cat: "Donnée",
    rows: [
      { feature: "Référentiel client unique", performance: true, connect: true, intelligence: true },
      { feature: "Stock VO/VN, marge live", performance: true, connect: true, intelligence: true },
      { feature: "Propales et BDC", performance: true, connect: true, intelligence: true },
      { feature: "KYC entreprises (SIRENE)", performance: true, connect: true, intelligence: true },
      { feature: "Branchement DMS", performance: "Option", connect: "Option", intelligence: "Option" },
    ],
  },
  {
    cat: "Relation client",
    rows: [
      { feature: "Téléphonie VOIP", performance: false, connect: true, intelligence: true },
      { feature: "WhatsApp Business", performance: false, connect: true, intelligence: true },
      { feature: "SMS et campagnes", performance: false, connect: true, intelligence: true },
      { feature: "Email Gmail / Outlook", performance: false, connect: true, intelligence: true },
      { feature: "App mobile Android", performance: false, connect: true, intelligence: true },
    ],
  },
  {
    cat: "Management",
    rows: [
      { feature: "Pipeline kanban", performance: true, connect: true, intelligence: true },
      { feature: "Bilatérales structurées", performance: true, connect: true, intelligence: true },
      { feature: "Rapport vendeur (RPV)", performance: true, connect: true, intelligence: true },
      { feature: "Dashboards par rôle", performance: true, connect: true, intelligence: true },
      { feature: "Lead management complet", performance: false, connect: true, intelligence: true },
      { feature: "Module marketing", performance: false, connect: true, intelligence: true },
    ],
  },
  {
    cat: "Delco IA",
    rows: [
      { feature: "Signaux par rôle", performance: false, connect: false, intelligence: true },
      { feature: "Recherche conversationnelle", performance: false, connect: false, intelligence: true },
      { feature: "Brief du matin oral", performance: false, connect: false, intelligence: true },
      { feature: "Exports PDF / Excel", performance: false, connect: false, intelligence: true },
    ],
  },
  {
    cat: "Adoption & support",
    rows: [
      { feature: "Formation 14 jours", performance: true, connect: true, intelligence: true },
      { feature: '« Montre-moi »', performance: true, connect: true, intelligence: true },
      { feature: "Adaptation sous 24h", performance: false, connect: true, intelligence: true },
      { feature: "Support téléphone", performance: false, connect: true, intelligence: true },
      { feature: "Référent dédié", performance: false, connect: false, intelligence: true },
    ],
  },
];

const options = [
  "Branchement DMS (par marque, sur devis)",
  "Reporting avancé sur mesure",
  "Export comptable",
  "Migration de données depuis l'ancien outil",
  "Intégrations sur mesure",
];

const allInclus = [
  "Formation 14 jours",
  "Support humain",
  "Hébergement Europe",
  "Sauvegardes",
  "Mises à jour",
  "Conformité RGPD",
];

const faq = [
  { q: "Y a-t-il un engagement ?", a: "Les prix affichés sont en engagement annuel. On peut discuter d'autres formules selon votre situation." },
  { q: "Comment se passe le paiement ?", a: "Facturation mensuelle ou annuelle, par utilisateur actif. Pas de frais cachés de mise en service au-delà de la migration éventuelle." },
  { q: "Puis-je ajouter des utilisateurs en cours de route ?", a: "Oui. Vous ajoutez ou retirez des licences quand vous voulez, la facturation s'ajuste." },
  { q: "Comment résilier ?", a: "Vous récupérez vos données à tout moment. La résiliation se fait dans les conditions de votre engagement annuel." },
  { q: "Y a-t-il une période d'essai ?", a: "On installe une démo sur un échantillon de vos données en 48h. C'est le meilleur moyen de juger avant de vous engager." },
  { q: "Et la remise volume ?", a: "Au-delà d'un certain nombre de licences, le prix par utilisateur est dégressif, sur devis." },
];

export default function Prix() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <PageHero
        eyebrow="Tarification"
        title="Des prix simples. Affichés. Sans piège."
        subtitle="Un prix unique par utilisateur, quelle que soit la taille de votre structure. Remise volume sur devis. Formation 14 jours toujours incluse."
      />

      <section className="plans" style={{ borderTop: "none" }}>
        <div className="container">
          <PricingGrid />
        </div>
      </section>

      {/* Comparatif détaillé */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Comparatif détaillé" title="Tout ce qui change d'un plan à l'autre." />
          <div style={{ display: "flex", flexDirection: "column", gap: 40, marginTop: 40 }}>
            {comparatif.map((block) => (
              <Reveal key={block.cat}>
                <h3 className="feature-card-title" style={{ marginBottom: 14 }}>{block.cat}</h3>
                <RecapPlans rows={block.rows} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Options + inclus */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <Reveal className="feature-card">
              <div className="feature-card-title">Options à la carte</div>
              <ul className="plan-incl-list" style={{ marginTop: 16 }}>
                {options.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="feature-card">
              <div className="feature-card-title">Inclus dans tous les plans</div>
              <ul className="plan-incl-list" style={{ marginTop: 16 }}>
                {allInclus.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal
            className="constat"
            style={{ marginTop: 24, borderLeftColor: "var(--bleu)" }}
          >
            <div className="constat-label" style={{ color: "var(--bleu)" }}>Remise volume</div>
            <p className="constat-text" style={{ fontSize: 16 }}>
              Au-delà d&apos;un certain volume de licences, le prix par utilisateur est
              dégressif. Sur devis, en fonction de votre nombre de sites et d&apos;utilisateurs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-tight">
          <SectionHead eyebrow="FAQ tarifaire" title="Les questions qu'on nous pose." />
          <div>
            {faq.map((f) => (
              <Reveal key={f.q} className="faq-item">
                <div className="faq-q">{f.q}</div>
                <div className="faq-a">{f.a}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
