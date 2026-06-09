// ─────────────────────────────────────────────────────────────
// Central site configuration — NAP, contact, navigation, SEO
// Single source of truth for business identity (used across pages
// + JSON-LD schema). Keep consistent with Google Business Profile.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Mahadev Properties",
  legalName: "Mahadev Properties Real Estate Advisory",
  tagline: "Your Trusted Partner for Real Estate Investments in Gurgaon",
  description:
    "Mahadev Properties is the trusted real estate investment consultant for Gurgaon, New Gurgaon, Dwarka Expressway & Delhi NCR. Explore luxury apartments, commercial spaces, SCO plots and high-growth investment opportunities with expert guidance.",
  url: "https://www.mahadevproperties.in",
  phone: "+91 90533 00312",
  phoneRaw: "919053300312",
  whatsapp: "919053300312",
  email: "info@mahadevproperties.in",
  mapsUrl: "https://maps.app.goo.gl/VsWxPaq7zJ9uiDpd9",
  mapsEmbed:
    "https://www.google.com/maps?q=SS+Omnia+Sector+86+Gurugram&output=embed",
  // Approximate — verify against your Google Business Profile pin.
  geo: { lat: 28.4006, lng: 76.9461 },
  address: {
    street: "Office 95, 3rd Floor, SS Omnia",
    locality: "Sector 86",
    region: "Gurugram, Haryana",
    postalCode: "122004",
    country: "IN",
    full: "Office 95, 3rd Floor, SS Omnia, Sector 86, Gurugram, Haryana 122004",
  },
  hours: "Mon–Sun · 9:30 AM – 8:00 PM",
  founded: "2014",
  social: {
    instagram: "https://instagram.com/mahadevproperties",
    facebook: "https://facebook.com/mahadevproperties",
    youtube: "https://youtube.com/@mahadevproperties",
    linkedin: "https://linkedin.com/company/mahadevproperties",
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
  "Under ₹1 Cr",
  "₹1 Cr – ₹2 Cr",
  "₹2 Cr – ₹3.5 Cr",
  "₹3.5 Cr – ₹5 Cr",
  "₹5 Cr – ₹10 Cr",
  "₹10 Cr+",
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
      "Hi Mahadev Properties, I'd like to know more about investment opportunities in Gurgaon."
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:+${SITE.phoneRaw}`;
}
