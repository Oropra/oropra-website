"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  id?: string;
  style?: React.CSSProperties;
}

/**
 * Apparition au scroll : opacity 0→1 + y 20→0, 0.6s, easing éditorial.
 * Respecte prefers-reduced-motion (rendu statique).
 */
export default function Reveal({ children, delay = 0, className, as = "div", id, style }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className} id={id} style={style}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      id={id}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  );
}
