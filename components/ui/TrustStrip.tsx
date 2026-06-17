export interface TrustStat {
  num: string;
  label: string;
}

/**
 * Bande de crédibilité : un libellé à gauche + N chiffres clés séparés.
 * Reproduit la section .credibility du mockup v4.
 */
export default function TrustStrip({
  label,
  stats,
}: {
  label?: React.ReactNode;
  stats: TrustStat[];
}) {
  return (
    <section className="credibility">
      <div className="container cred-grid">
        {label && <div className="cred-label">{label}</div>}
        {stats.map((s) => (
          <div className="cred-stat" key={s.label}>
            <div className="cred-stat-num">{s.num}</div>
            <div className="cred-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
