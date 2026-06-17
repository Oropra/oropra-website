import Button from "./Button";

export default function CtaFinal({
  title = "Vous voulez voir ce que ça donne sur vos données ?",
  subtitle = "On installe une démo en 48h avec vos marques, vos sites, un échantillon de vos données. Pas de démo générique.",
  primaryLabel = "Demander une démo",
  secondaryLabel = "Parler à un expert",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-inner">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-sub">{subtitle}</p>
          <div className="cta-actions">
            <Button href="/contact" variant="cta-primary" arrow>
              {primaryLabel}
            </Button>
            <Button href="/contact" variant="cta-secondary">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
