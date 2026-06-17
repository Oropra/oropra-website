/** Mini-écran "Générer un devis" avec tooltip de visite guidée et navigation. */
export default function MockShowme() {
  return (
    <div className="showme-screen">
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: "var(--ink)",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          marginBottom: 12,
        }}
      >
        Générer un devis
      </div>

      {[
        ["Client", "Martin Dubois", false],
        ["Véhicule", "Peugeot 308 GT Line 2024", true],
        ["Prix", "32 900 €", false],
        ["Reprise", "14 200 €", false],
        ["Financement", "LOA 48 mois", false],
      ].map(([label, value, hl]) => (
        <div className="showme-form-row" key={label as string}>
          <div style={{ fontSize: 10, color: "var(--ink-mute)", width: 70 }}>{label}</div>
          <div className={`showme-form-field${hl ? " highlighted" : ""}`}>{value}</div>
        </div>
      ))}

      <div className="showme-tooltip showme-tooltip-1">
        <span className="showme-tooltip-num">2</span>
        Choisissez le véhicule sur lequel porte le devis.
      </div>

      <div className="showme-nav">
        <span style={{ fontSize: 11 }}>Étape 2 / 5</span>
        <div className="showme-nav-progress">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`showme-nav-dot${i === 1 ? " active" : ""}`} />
          ))}
        </div>
        <span className="showme-nav-btn">Suivant →</span>
      </div>
    </div>
  );
}
