import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import Button from "./Button";

type EyebrowColor = "bleu" | "vert" | "orange" | "purple";

/**
 * Hero standard des pages détaillées.
 * - Sans `visual` : hero centré pleine largeur (pages éditoriales : prix, ressources…).
 * - Avec `visual` : grille 2 colonnes (texte + visuel/vidéo).
 */
export default function PageHero({
  eyebrow,
  eyebrowColor = "bleu",
  title,
  subtitle,
  visual,
  primary,
  secondary,
  dark = false,
}: {
  eyebrow?: string;
  eyebrowColor?: EyebrowColor;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  visual?: React.ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  dark?: boolean;
}) {
  const ctas = (primary || secondary) && (
    <div className="hero-ctas" style={{ marginBottom: 0 }}>
      {primary && (
        <Button href={primary.href} variant={dark ? "cta-primary" : "primary"} size="lg" arrow>
          {primary.label}
        </Button>
      )}
      {secondary && (
        <Button href={secondary.href} variant={dark ? "cta-secondary" : "secondary"}>
          {secondary.label}
        </Button>
      )}
    </div>
  );

  return (
    <section
      className="hero"
      style={dark ? { background: "var(--ink)", borderBottom: "none" } : undefined}
    >
      <div className={visual ? "container hero-grid" : "container-tight"}>
        <Reveal>
          {eyebrow && (
            <Eyebrow color={eyebrowColor} dark={dark}>
              {eyebrow}
            </Eyebrow>
          )}
          <h1
            className="hero-title"
            style={dark ? { color: "#fff", marginTop: 8 } : { marginTop: 8 }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="hero-sub"
              style={dark ? { color: "rgba(255,255,255,0.7)" } : undefined}
            >
              {subtitle}
            </p>
          )}
          {ctas}
        </Reveal>
        {visual && <Reveal delay={0.1}>{visual}</Reveal>}
      </div>
    </section>
  );
}
