import { plans } from "@/content/plans";
import PlanCard from "./PlanCard";

export default function PricingGrid() {
  return (
    <div className="plans-grid">
      {plans.map((p) => (
        <PlanCard key={p.name} plan={p} />
      ))}
    </div>
  );
}
