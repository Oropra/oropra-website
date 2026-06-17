interface Card {
  name: string;
  vehicle: string;
  price: string;
  tag: string;
  tagCls?: "" | "hot" | "warm";
}
interface Col {
  title: string;
  count: number;
  cards: Card[];
}

const cols: Col[] = [
  {
    title: "Premier contact",
    count: 4,
    cards: [
      { name: "M. Dubois", vehicle: "Peugeot 308 GT • La Centrale", price: "32 900 €", tag: "Chaud", tagCls: "warm" },
      { name: "S. Lefèvre", vehicle: "Renault Austral E-Tech", price: "36 500 €", tag: "Tiède" },
    ],
  },
  {
    title: "Essai",
    count: 2,
    cards: [
      { name: "K. Benali", vehicle: "BMW i4 eDrive40", price: "52 000 €", tag: "Très chaud", tagCls: "hot" },
    ],
  },
  {
    title: "Devis",
    count: 3,
    cards: [
      { name: "Famille Rousseau", vehicle: "Citroën C5 Aircross", price: "42 000 €", tag: "Chaud", tagCls: "warm" },
      { name: "É. Garcia", vehicle: "Peugeot 3008 Hybride", price: "38 200 €", tag: "Tiède" },
    ],
  },
];

/** Pipeline kanban à 3 colonnes. */
export default function MockKanban() {
  return (
    <div className="mock-kanban">
      {cols.map((col) => (
        <div className="mock-kanban-col" key={col.title}>
          <div className="mock-kanban-head">
            <div className="mock-kanban-title">{col.title}</div>
            <div className="mock-kanban-count">{col.count}</div>
          </div>
          {col.cards.map((c) => (
            <div className="mock-kanban-card" key={c.name}>
              <div className="mock-kanban-name">{c.name}</div>
              <div className="mock-kanban-vehicle">{c.vehicle}</div>
              <div className="mock-kanban-meta">
                <div className="mock-kanban-price">{c.price}</div>
                <div className={`mock-kanban-tag ${c.tagCls ?? ""}`.trim()}>{c.tag}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
