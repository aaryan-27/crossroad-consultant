// ─────────────────────────────────────────────────────────────
// Central site configuration — NAP, contact, navigation, SEO
// Single source of truth for business identity (used across pages
// + JSON-LD schema). Keep consistent with Google Business Profile.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Shagun Real Estate",
  legalName: "Shagun Real Estate | Property Dealer | Real Estate Consultant Gurugram",
  tagline: "Your Trusted Partner for Real Estate Investments in Gurgaon",
  description:
    "Shagun Real Estate is the trusted property dealer and real estate consultant for Gurugram, New Gurgaon, Dwarka Expressway & Delhi NCR. Explore luxury apartments, commercial spaces, SCO plots and high-growth investment opportunities with expert guidance.",
  url: "https://www.shagunrealestate.in",
  phone: "+91 88001 15214",
  phoneRaw: "918800115214",
  whatsapp: "918800115214",
  email: "info@shagunrealestate.in",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shagun%20Real%20Estate&query_place_id=ChIJs3ogqjgXDTkRCrp_gBxTul8",
  mapsEmbed:
    "https://www.google.com/maps?q=Shagun+Real+Estate+Sector+102+Gurugram&output=embed",
  // Approximate — verify against your Google Business Profile pin.
  geo: { lat: 28.4897, lng: 76.9822 },
  address: {
    street: "ROF aalayas, 75meter road, Northern Peripheral Rd",
    locality: "Sector 102, Gurugram",
    region: "Gurugram, Haryana",
    postalCode: "122505",
    country: "IN",
    full: "ROF aalayas, 75meter road, Northern Peripheral Rd, Sector 102, Gurugram, Haryana 122505, India",
  },
  hours: "Mon–Sun · 9:30 AM – 8:00 PM",
  founded: "2008",
  social: {
    instagram: "https://instagram.com/shagunrealestate",
    facebook: "https://facebook.com/shagunrealestate",
    youtube: "https://youtube.com/@shagunrealestate",
    linkedin: "https://linkedin.com/company/shagunrealestate",
  },
} as const;

export const SERVICE_AREAS = [
  "Dwarka Expressway",
  "New Gurgaon",
  "Sector 83",
  "Sector 84",
  "Sector 85",
  "Sector 88",
  "Sector 89",
  "Golf Course Extension Road",
  "Sohna Road",
  "SPR Road",
  "Delhi NCR",
] as const;

export const PROPERTY_INTERESTS = [
  "Luxury Apartments",
  "Residential Projects",
  "Commercial Property",
  "SCO Plots",
  "Retail Shops",
  "Office Spaces",
  "Builder Floors",
  "Pre-Launch Projects",
  "Investment Property",
] as const;

export const BUDGET_RANGES = [
  "Under Rs.1 Cr",
  "Rs.1 Cr – Rs.2 Cr",
  "Rs.2 Cr – Rs.3.5 Cr",
  "Rs.3.5 Cr – Rs.5 Cr",
  "Rs.5 Cr – Rs.10 Cr",
  "Rs.10 Cr+",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Residential",
    href: "/residential",
  },
  {
    label: "Commercial",
    href: "/commercial",
  },
  { label: "Locations", href: "/locations" },
  { label: "Developers", href: "/developers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

// Pre-built WhatsApp deep links
export function waLink(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Hi Shagun Real Estate, I'd like to know more about investment opportunities in Gurgaon."
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:+${SITE.phoneRaw}`;
}
