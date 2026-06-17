/** Tableau récap d'inclusions par plan (Performance / Connect / Intelligence). */
export interface RecapRow {
  feature: string;
  /** true = inclus, false = non inclus, string = libellé custom (ex "Option") */
  performance: boolean | string;
  connect: boolean | string;
  intelligence: boolean | string;
}

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="recap-check">✓</span>;
  if (value === false) return <span className="recap-dash">—</span>;
  return <span style={{ fontSize: 12, color: "var(--ink-soft)" }}>{value}</span>;
}

export default function RecapPlans({ rows }: { rows: RecapRow[] }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="recap-table">
        <thead>
          <tr>
            <th>Fonctionnalité</th>
            <th className="col-plan">Performance</th>
            <th className="col-plan">Connect</th>
            <th className="col-plan">Intelligence</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.feature}>
              <td className="feat">{r.feature}</td>
              <td className="col-plan"><Cell value={r.performance} /></td>
              <td className="col-plan"><Cell value={r.connect} /></td>
              <td className="col-plan"><Cell value={r.intelligence} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
