import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import { Flame, Droplets, Zap, House, WashingMachine, Truck } from "lucide-react";

import hvacImg from "@/assets/service-hvac.jpg";
import plumbingImg from "@/assets/service-plumbing.jpg";
import electricalImg from "@/assets/service-electrical.jpg";
import roofingImg from "@/assets/service-roofing.jpg";
import applianceImg from "@/assets/service-appliance.jpg";
import junkImg from "@/assets/service-junk.jpg";
import plumbingHero from "@/assets/plumbing-bath.jpg";
import electricalHero from "@/assets/electrical-panel.jpg";
import roofingHero from "@/assets/roofing-team.jpg";
import applianceHero from "@/assets/appliance-washer.jpg";
import junkHero from "@/assets/junk-garage.jpg";

export type Service = {
  slug: string;
  href: string;
  name: string;
  short: string;
  icon: LucideIcon;
  image: StaticImageData;
  heroImage: StaticImageData;
  accent: string; // tailwind gradient classes for the icon tile
  /** Dedicated booking number for this service (dummy until the client supplies real ones) */
  phone: string;
  phoneHref: string;
  priceFrom: string;
  headline: string;
  sub: string;
  problems: string[];
  offerings: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "hvac",
    href: "/hvac",
    name: "Heating & Cooling",
    short: "Furnace & heat pump repair, AC service, new system installs and tune-ups.",
    icon: Flame,
    image: hvacImg,
    heroImage: hvacImg,
    accent: "from-orange-500 to-rose-500",
    phone: "(555) 012-1001",
    phoneHref: "tel:+15550121001",
    priceFrom: "$79 tune-up",
    headline: "Heat Back On — Today.",
    sub: "Same-day furnace and heat pump repair from NATE-certified technicians.",
    problems: ["No heat", "Furnace short-cycling", "Strange burning smell", "Heat pump iced over", "Thermostat not responding", "High energy bills"],
    offerings: [],
  },
  {
    slug: "plumbing",
    href: "/services/plumbing",
    name: "Plumbing",
    short: "Leaks, clogs, water heaters, burst pipes, sewer lines and fixture installs.",
    icon: Droplets,
    image: plumbingImg,
    heroImage: plumbingHero,
    accent: "from-sky-500 to-blue-600",
    phone: "(555) 012-1002",
    phoneHref: "tel:+15550121002",
    priceFrom: "$89 diagnostic",
    headline: "Leaks Stopped. Drains Flowing. Hot Water Back.",
    sub: "Licensed master plumbers on call 24/7 — with flat-rate prices you approve before we start.",
    problems: ["Burst or frozen pipe", "No hot water", "Clogged drain or toilet", "Leaking water heater", "Low water pressure", "Sewer smell or backup"],
    offerings: [
      { title: "Emergency Leak Repair", text: "Burst, frozen or pin-hole leaks found and fixed fast — before water damage spreads." },
      { title: "Water Heaters", text: "Tank and tankless repair, flushing and same-day replacement on most models." },
      { title: "Drain & Sewer Cleaning", text: "Camera inspection and hydro-jetting to clear the toughest clogs at the source." },
      { title: "Fixture Installation", text: "Faucets, toilets, showers, disposals and sinks installed to code, cleanly." },
      { title: "Repiping", text: "Whole-home PEX or copper repipes with minimal drywall disruption." },
      { title: "Leak Detection", text: "Non-invasive acoustic and thermal detection for slab and hidden leaks." },
    ],
  },
  {
    slug: "electrical",
    href: "/services/electrical",
    name: "Electrical",
    short: "Panel upgrades, outlets, lighting, EV chargers, generators and safety inspections.",
    icon: Zap,
    image: electricalImg,
    heroImage: electricalHero,
    accent: "from-amber-400 to-orange-500",
    phone: "(555) 012-1003",
    phoneHref: "tel:+15550121003",
    priceFrom: "$99 safety check",
    headline: "Safe, Code-Compliant Electrical Work — Done Right.",
    sub: "Licensed electricians for repairs, upgrades and installations, big or small.",
    problems: ["Breaker keeps tripping", "Sparking or warm outlet", "Flickering lights", "Partial power loss", "Burning smell from panel", "Need an EV charger"],
    offerings: [
      { title: "Panel Upgrades", text: "Replace outdated or recalled panels and add capacity for modern homes." },
      { title: "EV Charger Installation", text: "Level 2 chargers installed, permitted and ready to plug in." },
      { title: "Lighting & Fans", text: "Recessed lights, fixtures, ceiling fans and outdoor lighting." },
      { title: "Whole-Home Generators", text: "Standby generator install so winter storms never leave you in the dark." },
      { title: "Outlets & Wiring", text: "GFCI/AFCI outlets, new circuits and troubleshooting faulty wiring." },
      { title: "Safety Inspections", text: "Full-home inspection for buyers, sellers and older homes." },
    ],
  },
  {
    slug: "roofing",
    href: "/services/roofing",
    name: "Roofing",
    short: "Leak repair, storm damage, full replacements and free roof inspections.",
    icon: House,
    image: roofingImg,
    heroImage: roofingHero,
    accent: "from-slate-500 to-slate-700",
    phone: "(555) 012-1004",
    phoneHref: "tel:+15550121004",
    priceFrom: "Free inspection",
    headline: "Storm Damage? Leak? We've Got You Covered.",
    sub: "Free roof inspections, insurance claim help and lifetime-warranty replacements.",
    problems: ["Active roof leak", "Missing or lifted shingles", "Hail or wind damage", "Ice dams", "Sagging roofline", "Water stains on ceiling"],
    offerings: [
      { title: "Leak Repair", text: "Find the true source of the leak and seal it — not just patch the stain." },
      { title: "Storm Damage", text: "Emergency tarping and full documentation for your insurance claim." },
      { title: "Roof Replacement", text: "Architectural shingle and metal roofs with manufacturer warranties." },
      { title: "Gutters", text: "Seamless gutters, guards and downspouts to protect your foundation." },
      { title: "Free Inspections", text: "Drone-assisted inspection with a photo report you can keep." },
      { title: "Insurance Claims", text: "We meet your adjuster and make sure nothing gets missed." },
    ],
  },
  {
    slug: "appliance-repair",
    href: "/services/appliance-repair",
    name: "Appliance Repair",
    short: "Washers, dryers, fridges, ovens and dishwashers — all major brands.",
    icon: WashingMachine,
    image: applianceImg,
    heroImage: applianceHero,
    accent: "from-emerald-500 to-teal-600",
    phone: "(555) 012-1005",
    phoneHref: "tel:+15550121005",
    priceFrom: "$69 diagnostic",
    headline: "Your Appliances, Working Like New.",
    sub: "Factory-trained techs for every major brand — most repairs completed in one visit.",
    problems: ["Fridge not cooling", "Washer won't drain", "Dryer not heating", "Oven won't heat", "Dishwasher leaking", "Strange noises"],
    offerings: [
      { title: "Refrigerators", text: "Cooling issues, ice makers, leaks and compressor problems." },
      { title: "Washers & Dryers", text: "Drain, spin, heating and vent problems resolved fast." },
      { title: "Ovens & Ranges", text: "Gas and electric — igniters, elements, thermostats and controls." },
      { title: "Dishwashers", text: "Leaks, draining, cleaning performance and door latches." },
      { title: "Dryer Vent Cleaning", text: "Reduce fire risk and cut drying time in half." },
      { title: "All Major Brands", text: "Our vans are stocked with the parts most repairs need, so most jobs finish in one visit." },
    ],
  },
  {
    slug: "junk-removal",
    href: "/services/junk-removal",
    name: "Junk Removal",
    short: "Same-day haul-away for furniture, appliances, garage clean-outs and debris.",
    icon: Truck,
    image: junkImg,
    heroImage: junkHero,
    accent: "from-lime-500 to-green-600",
    phone: "(555) 012-1006",
    phoneHref: "tel:+15550121006",
    priceFrom: "Free estimate",
    headline: "Point at It. We'll Haul It Away.",
    sub: "Same-day junk removal with upfront volume pricing — we donate and recycle up to 60%.",
    problems: ["Garage clean-out", "Old appliances", "Furniture removal", "Renovation debris", "Estate clean-out", "Yard waste"],
    offerings: [
      { title: "Furniture Removal", text: "Couches, mattresses, tables — we do all the lifting." },
      { title: "Appliance Haul-Away", text: "Old fridges, washers and water heaters disposed of responsibly." },
      { title: "Garage & Attic", text: "Full clean-outs so you get your space back." },
      { title: "Construction Debris", text: "Drywall, flooring, cabinets and remodel leftovers." },
      { title: "Estate Clean-Outs", text: "Respectful, careful full-property clean-outs." },
      { title: "Eco-Friendly Disposal", text: "We donate and recycle whatever we can." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
