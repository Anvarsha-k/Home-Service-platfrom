import { Phone } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-8xl font-extrabold text-flame-500">404</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold">This page sprang a leak.</h1>
      <p className="mt-3 max-w-md text-lg text-ink-600">
        We couldn&apos;t find what you were looking for — but we can definitely fix whatever&apos;s broken at home.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <LinkButton href="/">Back to home</LinkButton>
        <LinkButton href={site.phoneHref} variant="outline">
          <Phone className="h-4 w-4" aria-hidden /> {site.phone}
        </LinkButton>
      </div>
    </section>
  );
}
