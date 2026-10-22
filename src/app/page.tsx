import { HomeHero } from "@/components/sections/HomeHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <ServicesGrid />
      <WhyUs />
      <ContactSection />
    </>
  );
}
