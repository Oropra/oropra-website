import Link from "next/link";

const cols = [
  {
    title: "Plateforme",
    links: [
      { href: "/donnee-propre", label: "La donnée propre" },
      { href: "/relation-client", label: "La relation client" },
      { href: "/management", label: "Le management commercial" },
      { href: "/delco", label: "Delco, l'IA métier" },
    ],
  },
  {
    title: "Adoption",
    links: [
      { href: "/adoption#formation", label: "Formation 14 jours" },
      { href: "/adoption#montre-moi", label: '"Montre-moi"' },
      { href: "/adoption#centre-aide", label: "Centre d'aide" },
      { href: "/adoption#support", label: "Support humain" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/a-propos", label: "À propos" },
      { href: "/ressources", label: "Ressources" },
      { href: "/prix", label: "Prix" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/cgv", label: "CGV" },
      { href: "/rgpd", label: "RGPD" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo" aria-label="One Data — accueil">
              <span className="logo-mark" />
              One Data
            </Link>
            <p className="footer-brand-desc">
              Le CRM des concessions auto, fait pour être utilisé tous les jours.
              Édité par Oropra.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="footer-col-title">{col.title}</div>
              <div className="footer-links">
                {col.links.map((l) => (
                  <Link key={l.href + l.label} href={l.href}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Oropra. Tous droits réservés.</span>
          <span>Hébergement Europe · Conformité RGPD</span>
        </div>
      </div>
    </footer>
  );
}
