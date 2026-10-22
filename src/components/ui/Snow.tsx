/** Lightweight CSS snowfall. Deterministic values avoid hydration mismatches. */
export function Snow({ count = 40, className = "" }: { count?: number; className?: string }) {
  const rand = (n: number) => {
    const x = Math.sin(n * 9301 + 49297) * 233280;
    return x - Math.floor(x);
  };
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const size = 2 + rand(i) * 4;
        return (
          <span
            key={i}
            className="absolute top-0 animate-snow rounded-full bg-white"
            style={
              {
                left: `${rand(i + 100) * 100}%`,
                width: size,
                height: size,
                opacity: 0.25 + rand(i + 200) * 0.5,
                animationDuration: `${9 + rand(i + 300) * 12}s`,
                animationDelay: `-${rand(i + 400) * 20}s`,
                filter: size > 4.5 ? "blur(1px)" : undefined,
                "--drift": `${(rand(i + 500) - 0.5) * 120}px`,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
