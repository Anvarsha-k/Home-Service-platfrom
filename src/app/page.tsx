import { HomeHero } from "@/components/sections/HomeHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";

/** Gateway page: no booking or call actions here. Each service has its own landing page with its own number and form. */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <ServicesGrid
        eyebrow="Choose your service"
        title={
          <>
            Pick the pro you need, <br className="hidden sm:block" />
            <span className="text-flame-500">we&apos;ll take it from there.</span>
          </>
        }
        sub="Each service has its own specialist team. Select one to see pricing, what we fix and how to reach that team directly."
      />
      <WhyUs />
    </>
  );
}
