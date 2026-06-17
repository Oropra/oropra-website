"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "/plateforme", label: "Plateforme" },
  { href: "/delco", label: "Delco IA" },
  { href: "/adoption", label: "Adoption" },
  { href: "/prix", label: "Prix" },
  { href: "/ressources", label: "Ressources" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="top">
      <div className="container top-inner">
        <Link href="/" className="logo" aria-label="One Data — accueil">
          <span className="logo-mark" />
          One Data
        </Link>

        <div className="nav-mid">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname.startsWith(l.href) ? "active" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <a href="https://app.onedata.fr" className="btn-ghost">
            Connexion
          </a>
          <Link href="/contact" className="btn-primary">
            Demander une démo
          </Link>
          <button
            type="button"
            className="btn-ghost nav-toggle"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{
            borderTop: "1px solid var(--rule)",
            background: "var(--paper)",
            padding: "12px 0",
          }}
        >
          <div
            className="container"
            style={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  padding: "12px 0",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--ink)",
                  borderBottom: "1px solid var(--rule)",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary btn-primary-lg"
              style={{ marginTop: 12, justifyContent: "center" }}
            >
              Demander une démo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
