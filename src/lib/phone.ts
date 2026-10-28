import { services } from "@/lib/services";
import { site } from "@/lib/site";

export type PagePhone = { phone: string; phoneHref: string };

const general: PagePhone = { phone: site.phone, phoneHref: site.phoneHref };

/** Booking number for a service slug; falls back to the general number. */
export function getServicePhone(slug?: string): PagePhone {
  const s = services.find((x) => x.slug === slug);
  return s ? { phone: s.phone, phoneHref: s.phoneHref } : general;
}

/** Booking number for the page at `pathname` (/hvac, /services/plumbing …); general number elsewhere. */
export function getPhone(pathname: string): PagePhone {
  const s = services.find((x) => pathname === x.href || pathname.startsWith(`${x.href}/`));
  return s ? { phone: s.phone, phoneHref: s.phoneHref } : general;
}
