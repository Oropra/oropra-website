/** Schéma référentiel : nœud Client central + nœuds métier liés. */
const nodes = [
  { cls: "mock-node-1", icon: "V", label: "Véhicules" },
  { cls: "mock-node-2", icon: "O", label: "Opportunités" },
  { cls: "mock-node-3", icon: "D", label: "Documents" },
  { cls: "mock-node-4", icon: "A", label: "Atelier" },
  { cls: "mock-node-5", icon: "€", label: "Marge" },
  { cls: "mock-node-6", icon: "E", label: "Entreprise" },
];

export default function MockDataGraph() {
  return (
    <div className="mock-data">
      <div className="mock-data-title">/référentiel — schéma des liens métier</div>
      <div className="mock-data-graph">
        <svg
          width="100%"
          height="100%"
          style={{ position: "absolute", inset: 0, opacity: 0.5 }}
          aria-hidden="true"
        >
          {[
            ["18%", "26%"],
            ["82%", "26%"],
            ["16%", "78%"],
            ["84%", "78%"],
            ["92%", "50%"],
            ["8%", "50%"],
          ].map(([x, y], i) => (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={x}
              y2={y}
              stroke="var(--rule-strong)"
              strokeWidth="1"
            />
          ))}
        </svg>
        <div className="mock-node mock-node-c">
          <span className="mock-node-icon">C</span>
          Client
        </div>
        {nodes.map((n) => (
          <div className={`mock-node ${n.cls}`} key={n.label}>
            <span className="mock-node-icon">{n.icon}</span>
            {n.label}
          </div>
        ))}
      </div>
    </div>
  );
}
