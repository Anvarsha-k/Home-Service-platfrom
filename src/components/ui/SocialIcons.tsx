import { site } from "@/lib/site";

const icons = {
  facebook: (
    <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
  ),
  instagram: (
    <path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm6-8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21 8c-.1-1.6-.4-3-1.6-4.2C18.2 2.6 16.8 2.2 15.2 2.2 13.6 2 10.4 2 8.8 2.2 7.2 2.2 5.8 2.6 4.6 3.8 3.4 5 3.1 6.4 3 8 2.9 9.6 2.9 14.4 3 16c.1 1.6.4 3 1.6 4.2 1.2 1.2 2.6 1.6 4.2 1.6 1.6.1 6.4.1 8 0 1.6-.1 3-.4 4.2-1.6 1.2-1.2 1.6-2.6 1.6-4.2.1-1.6.1-6.4 0-8Zm-2 9.8a3.1 3.1 0 0 1-1.8 1.8c-1.2.5-4.2.4-5.5.4s-4.3.1-5.5-.4A3.1 3.1 0 0 1 4.4 17.8C3.9 16.6 4 13.6 4 12.3s-.1-4.3.4-5.5A3.1 3.1 0 0 1 6.2 5c1.2-.5 4.2-.4 5.5-.4s4.3-.1 5.5.4A3.1 3.1 0 0 1 19 6.8c.5 1.2.4 4.2.4 5.5s.1 4.3-.4 5.5Z" />
  ),
  youtube: (
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  ),
  google: (
    <path d="M21.4 10.2H12v3.9h5.4c-.5 2.5-2.6 3.9-5.4 3.9a6 6 0 1 1 3.9-10.6l2.9-2.9A10 10 0 1 0 12 22c5 0 9.6-3.6 9.6-10 0-.6-.1-1.2-.2-1.8Z" />
  ),
};

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {(Object.keys(icons) as (keyof typeof icons)[]).map((k) => (
        <a
          key={k}
          href={site.socials[k]}
          aria-label={k}
          className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition hover:bg-flame-500 hover:text-white hover:ring-flame-500"
        >
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
            {icons[k]}
          </svg>
        </a>
      ))}
    </div>
  );
}
