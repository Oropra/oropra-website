import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

type EyebrowColor = "bleu" | "vert" | "orange" | "purple";

export default function SectionHead({
  eyebrow,
  eyebrowColor = "bleu",
  title,
  subtitle,
  dark = false,
}: {
  eyebrow?: string;
  eyebrowColor?: EyebrowColor;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Reveal className={dark ? "delco-head" : "section-head"}>
      {eyebrow && (
        <Eyebrow color={eyebrowColor} dark={dark}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={dark ? "delco-title" : "section-title"}>{title}</h2>
      {subtitle && <p className={dark ? "delco-sub" : "section-sub"}>{subtitle}</p>}
    </Reveal>
  );
}
