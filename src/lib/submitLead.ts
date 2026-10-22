export type Lead = Record<string, string>;

/**
 * DEMO MODE: pretends to send the lead and resolves after a short delay.
 *
 * To go live, replace the body with a real call, e.g. Web3Forms / Formspree / your CRM:
 *
 *   await fetch("https://api.web3forms.com/submit", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({ access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY, ...lead }),
 *   });
 */
export async function submitLead(lead: Lead): Promise<{ ok: true; ref: string }> {
  await new Promise((r) => setTimeout(r, 1100));
  if (process.env.NODE_ENV !== "production") console.info("[demo] lead captured", lead);
  const ref = "APX-" + Math.random().toString(36).slice(2, 7).toUpperCase();
  return { ok: true, ref };
}

/** Formats US phone input as (555) 123-4567 while typing. */
export function formatPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}
