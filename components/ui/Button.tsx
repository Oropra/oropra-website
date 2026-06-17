import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "cta-primary" | "cta-secondary";
type Size = "default" | "lg";

const classMap: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary-lg",
  ghost: "btn-ghost",
  "cta-primary": "cta-btn-primary",
  "cta-secondary": "cta-btn-secondary",
};

export default function Button({
  href,
  variant = "primary",
  size = "default",
  arrow = false,
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const sizeCls = size === "lg" && variant === "primary" ? "btn-primary-lg" : "";
  const classes = `${classMap[variant]} ${sizeCls} ${className}`.trim();
  const external = href.startsWith("http");

  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={16} />}
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
