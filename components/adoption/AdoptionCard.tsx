import Reveal from "@/components/ui/Reveal";

type IconColor = "bleu" | "vert" | "orange" | "purple";

export default function AdoptionCard({
  icon,
  iconColor = "bleu",
  name,
  title,
  description,
  features,
  id,
}: {
  icon: React.ReactNode;
  iconColor?: IconColor;
  name: string;
  title: string;
  description: string;
  features: string[];
  id?: string;
}) {
  const iconCls = iconColor === "bleu" ? "adoption-card-icon" : `adoption-card-icon ${iconColor}`;
  return (
    <Reveal as="article" className="adoption-card" id={id}>
      <div className={iconCls}>{icon}</div>
      <div>
        <div className="adoption-card-name">{name}</div>
        <div className="adoption-card-title">{title}</div>
      </div>
      <p className="adoption-card-desc">{description}</p>
      <ul className="adoption-card-features">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </Reveal>
  );
}
