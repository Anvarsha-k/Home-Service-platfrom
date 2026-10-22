import type { Metadata } from "next";
import { HvacHero } from "@/components/hvac/HvacHero";
import { WarningSigns } from "@/components/hvac/WarningSigns";
import { HvacServices } from "@/components/hvac/HvacServices";
import { TrustBar } from "@/components/sections/TrustBar";
import { Offers } from "@/components/sections/Offers";
import { ContactSection } from "@/components/sections/ContactSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Same-Day Furnace & Heat Pump Repair in ${site.city}`,
  description: `No heat? NATE-certified technicians can be at your door today. Flat-rate pricing, $79 furnace tune-ups and 0% financing on new systems across ${site.city}.`,
};

export default function HvacPage() {
  return (
    <>
      <HvacHero />
      <TrustBar />
      <HvacServices />
      <Offers />
      <WarningSigns />
      <ServicesGrid
        exclude="hvac"
        eyebrow="More services"
        title={
          <>
            One team for <span className="text-flame-500">your whole home.</span>
          </>
        }
        sub="Heating, plumbing, electrical, roofing, appliances and junk removal — one call, one guarantee."
      />
      <ContactSection
        defaultService="Heating"
        title={
          <>
            No heat? <span className="text-flame-500">Let&apos;s fix it today.</span>
          </>
        }
      />
    </>
  );
}
