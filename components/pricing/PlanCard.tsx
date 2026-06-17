import Link from "next/link";
import type { Plan } from "@/content/plans";

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={`plan-card${plan.popular ? " popular" : ""}`}>
      {plan.popular && <div className="plan-badge">Le plus populaire</div>}
      <div className="plan-name">{plan.name}</div>
      <div className="plan-tag">{plan.tagline}</div>
      <div className="plan-price-row">
        <div className="plan-price">{plan.price}</div>
        <div className="plan-unit">{plan.unit}</div>
      </div>
      <div className="plan-period">{plan.period}</div>
      <Link
        href="/contact"
        className={`plan-btn ${plan.popular ? "primary" : "secondary"}`}
      >
        Choisir {plan.name}
      </Link>
      <div className="plan-incl-title">{plan.inclTitle}</div>
      <ul className="plan-incl-list">
        {plan.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
