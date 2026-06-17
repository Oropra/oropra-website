type EyebrowColor = "bleu" | "vert" | "orange" | "purple";

export default function Eyebrow({
  children,
  color = "bleu",
  dark = false,
}: {
  children: React.ReactNode;
  color?: EyebrowColor;
  dark?: boolean;
}) {
  if (dark) {
    return <span className="delco-eyebrow">{children}</span>;
  }
  const cls = color === "bleu" ? "section-eyebrow" : `section-eyebrow ${color}`;
  return <span className={cls}>{children}</span>;
}
