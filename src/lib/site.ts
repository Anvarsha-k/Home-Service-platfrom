/**
 * All business details live here.
 * Everything below is PLACEHOLDER data — replace with the client's real info.
 */
export const site = {
  name: "Apex Home Services",
  shortName: "Apex",
  tagline: "Heating · Cooling · Plumbing · Electrical",
  city: "Dallas–Fort Worth",
  cityShort: "DFW",
  phone: "(555) 012-3456",
  phoneHref: "tel:+15550123456",
  email: "hello@apexhomeservices.com",
  address: {
    street: "1200 Main Street, Suite 300",
    city: "Dallas",
    region: "TX",
    zip: "75201",
  },
  license: "TACLA00000C · M-00000",
  founded: 2008,
  rating: 4.9,
  reviewCount: 1284,
  jobsCompleted: 38000,
  technicians: 45,
  hours: [
    { days: "Mon – Fri", time: "7:00 AM – 8:00 PM" },
    { days: "Saturday", time: "8:00 AM – 6:00 PM" },
    { days: "Sunday", time: "Emergency calls only" },
  ],
  emergencyNote: "24/7 emergency service — nights, weekends & holidays",
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    google: "#",
  },
  serviceAreas: [
    "Dallas",
    "Fort Worth",
    "Plano",
    "Frisco",
    "Arlington",
    "Irving",
    "Garland",
    "McKinney",
    "Richardson",
    "Allen",
    "Carrollton",
    "Grand Prairie",
    "Mesquite",
    "Denton",
    "Southlake",
    "Rockwall",
  ],
} as const;

export const yearsInBusiness = new Date().getFullYear() - site.founded;

export const offers = [
  {
    id: "tuneup",
    tag: "Winter Special",
    title: "Furnace Tune-Up",
    price: "$79",
    was: "$149",
    detail: "21-point safety inspection, carbon monoxide test & filter check.",
    fine: "Per system. Expires Dec 31.",
  },
  {
    id: "system",
    tag: "New System",
    title: "Off a New Furnace or Heat Pump",
    price: "$500",
    was: null,
    detail: "Plus 0% APR financing — plans from $89/mo with approved credit.",
    fine: "Cannot combine with other offers.",
  },
  {
    id: "plumbing",
    tag: "First-Time Customers",
    title: "Off Any Repair",
    price: "$50",
    was: null,
    detail: "Plumbing, electrical, appliance or HVAC. Mention code WARM50.",
    fine: "Repairs over $250. One per household.",
  },
] as const;

export const guarantees = [
  {
    title: "Fixed Right, or It's Free",
    text: "If the same issue returns within 12 months, we come back and fix it at no cost. Period.",
  },
  {
    title: "On-Time Arrival Promise",
    text: "If our tech is late for your arrival window, you get $50 off your service — no questions asked.",
  },
  {
    title: "Upfront, Flat-Rate Pricing",
    text: "You approve the exact price before we start. No overtime charges, no surprise fees.",
  },
  {
    title: "Clean-Home Guarantee",
    text: "Shoe covers, floor mats and a full clean-up — your home is left as clean as we found it.",
  },
] as const;
