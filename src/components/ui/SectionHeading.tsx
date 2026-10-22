import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, sub, align = "center", dark = false, className = "" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
            dark ? "text-flame-400" : "text-flame-600"
          }`}
        >
          <span className="h-px w-6 bg-current" />
          {eyebrow}
          {center && <span className="h-px w-6 bg-current" />}
        </p>
      )}
      <h2 className={`font-display text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-[3.1rem] ${dark ? "text-white" : "text-ink-900"}`}>
        {title}
      </h2>
      {sub && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-ink-600"}`}>{sub}</p>}
    </Reveal>
  );
}
