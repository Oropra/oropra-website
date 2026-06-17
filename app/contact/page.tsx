import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Demander une démo",
  description:
    "Demandez une démo de One Data sur vos données, en 48h. Dites-nous qui vous êtes et ce que vous utilisez aujourd'hui.",
  alternates: { canonical: "/contact" },
};

const champ: React.CSSProperties = {
  width: "100%",
  border: "1px solid var(--rule-strong)",
  borderRadius: 8,
  padding: "12px 14px",
  fontSize: 15,
  background: "var(--paper)",
  color: "var(--ink)",
  fontFamily: "inherit",
};
const label: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  marginBottom: 6,
  color: "var(--ink)",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Demander une démo"
        title="Voyez ce que ça donne sur vos données."
        subtitle="On installe une démo en 48h avec vos marques, vos sites et un échantillon de vos données. Pas de démo générique."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card-grid" style={{ gridTemplateColumns: "1.3fr 1fr", alignItems: "start" }}>
            <Reveal className="feature-card" style={{ padding: 36 }}>
              <form
                action="mailto:contact@oropra.fr"
                method="post"
                encType="text/plain"
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                  <div>
                    <label htmlFor="nom" style={label}>Nom</label>
                    <input id="nom" name="nom" style={champ} required />
                  </div>
                  <div>
                    <label htmlFor="concession" style={label}>Concession</label>
                    <input id="concession" name="concession" style={champ} required />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                  <div>
                    <label htmlFor="email" style={label}>Email</label>
                    <input id="email" name="email" type="email" style={champ} required />
                  </div>
                  <div>
                    <label htmlFor="tel" style={label}>Téléphone</label>
                    <input id="tel" name="tel" type="tel" style={champ} />
                  </div>
                </div>
                <div>
                  <label htmlFor="outils" style={label}>Quels outils utilisez-vous aujourd&apos;hui ?</label>
                  <textarea id="outils" name="outils" rows={4} style={champ} />
                </div>
                <button type="submit" className="btn-primary btn-primary-lg" style={{ alignSelf: "flex-start" }}>
                  Envoyer la demande
                </button>
              </form>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: <Mail size={18} />, t: "Email", v: "contact@oropra.fr" },
                  { icon: <Phone size={18} />, t: "Téléphone", v: "Sur demande par email" },
                  { icon: <MapPin size={18} />, t: "Édité par", v: "Oropra — France" },
                ].map((c) => (
                  <div key={c.t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div className="feature-card-icon" style={{ marginBottom: 0, flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 600 }}>{c.t}</div>
                      <div style={{ fontSize: 15, color: "var(--ink)" }}>{c.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
