"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CircleCheckBig, Clock, LoaderCircle, Lock, Phone } from "lucide-react";
import { formatPhone, submitLead } from "@/lib/submitLead";
import { site } from "@/lib/site";

const defaultOptions = ["Heating", "Cooling", "Plumbing", "Electrical", "Roofing", "Appliance", "Junk Removal", "Other"];

type Props = {
  title?: string;
  sub?: string;
  options?: string[];
  defaultService?: string;
  cta?: string;
  className?: string;
};

export function QuoteForm({
  title = "Get a fast, free quote",
  sub = "Takes 30 seconds. A real person calls you back.",
  options = defaultOptions,
  defaultService,
  cta = "Get My Free Quote",
  className = "",
}: Props) {
  const [service, setService] = useState(defaultService ?? options[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Please enter your name";
    if (phone.replace(/\D/g, "").length !== 10) next.phone = "Enter a 10-digit phone number";
    if (zip && !/^\d{5}$/.test(zip)) next.zip = "5-digit ZIP";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    await submitLead({ form: "quick-quote", service, name, phone, zip });
    setStatus("done");
  }

  const input =
    "h-12 w-full rounded-xl border bg-white px-4 text-[15px] text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-flame-500 focus:ring-4 focus:ring-flame-500/15";

  return (
    <div className={`relative overflow-hidden rounded-[28px] bg-white p-6 text-ink-900 shadow-[0_30px_80px_-20px_rgba(5,15,28,0.45)] ring-1 ring-ink-900/5 sm:p-7 ${className}`}>
      <AnimatePresence mode="wait">
        {status !== "done" ? (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="mb-5">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Techs available today
              </div>
              <h3 className="font-display text-2xl font-extrabold text-ink-900">{title}</h3>
              <p className="mt-1 text-sm text-ink-600">{sub}</p>
            </div>

            <fieldset>
              <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-ink-600">What do you need help with?</legend>
              <div className="flex flex-wrap gap-2">
                {options.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => setService(o)}
                    aria-pressed={service === o}
                    className={`rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition hover:-translate-y-0.5 ${
                      service === o
                        ? "border-flame-500 bg-flame-500 text-white shadow-md shadow-flame-500/25"
                        : "border-ink-900/10 bg-cream text-ink-700 hover:border-ink-900/30"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-4 space-y-3">
              <div>
                <label htmlFor="qf-name" className="sr-only">Full name</label>
                <input
                  id="qf-name"
                  className={`${input} ${errors.name ? "border-red-400" : "border-ink-900/10"}`}
                  placeholder="Full name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="mt-1 text-xs font-medium text-red-600">{errors.name}</p>}
              </div>
              <div className="grid grid-cols-[1fr_7.5rem] gap-3">
                <div>
                  <label htmlFor="qf-phone" className="sr-only">Phone number</label>
                  <input
                    id="qf-phone"
                    className={`${input} ${errors.phone ? "border-red-400" : "border-ink-900/10"}`}
                    placeholder="Phone number"
                    inputMode="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                  />
                  {errors.phone && <p className="mt-1 text-xs font-medium text-red-600">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="qf-zip" className="sr-only">ZIP code</label>
                  <input
                    id="qf-zip"
                    className={`${input} ${errors.zip ? "border-red-400" : "border-ink-900/10"}`}
                    placeholder="ZIP"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    maxLength={5}
                    value={zip}
                    onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
                  />
                  {errors.zip && <p className="mt-1 text-xs font-medium text-red-600">{errors.zip}</p>}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-shine group relative mt-5 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-flame-500 font-semibold text-white shadow-[0_12px_30px_-10px_rgba(255,90,31,0.8)] transition hover:bg-flame-600 disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden /> Sending…
                </>
              ) : (
                <>
                  {cta} <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden />
                </>
              )}
            </button>

            <div className="mt-4 flex items-center justify-between gap-3 text-xs text-ink-600">
              <span className="flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5" aria-hidden /> No spam. No obligation.
              </span>
              <a href={site.phoneHref} className="flex items-center gap-1.5 font-semibold text-ink-900 hover:text-flame-600">
                <Phone className="h-3.5 w-3.5" aria-hidden /> Or call {site.phone}
              </a>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[380px] flex-col items-center justify-center py-6 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.1 }}
              className="grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-emerald-600"
            >
              <CircleCheckBig className="h-10 w-10" aria-hidden />
            </motion.div>
            <h3 className="mt-5 font-display text-2xl font-extrabold">You&apos;re all set, {name.split(" ")[0]}!</h3>
            <p className="mt-2 max-w-xs text-ink-600">
              A {service.toLowerCase()} specialist will call <strong className="text-ink-900">{phone}</strong> shortly to confirm your quote.
            </p>
            <div className="mt-5 flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-semibold">
              <Clock className="h-4 w-4 text-flame-500" aria-hidden /> Average callback: 12 minutes
            </div>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setName("");
                setPhone("");
                setZip("");
              }}
              className="mt-6 text-sm font-semibold text-ink-600 underline-offset-4 hover:underline"
            >
              Submit another request
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
