// ─────────────────────────────────────────────────────────────
// Central site configuration — NAP, contact, navigation, SEO
// Single source of truth for business identity (used across pages
// + JSON-LD schema). Keep consistent with Google Business Profile.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Agarwal Realtors",
  legalName: "Agarwal Realtors | Property Dealer | Real Estate Consultant Sohna",
  tagline: "Your Trusted Partner for Real Estate Investments in Sohna & Gurgaon",
  description:
    "Agarwal Realtors is the trusted property dealer and real estate consultant for Sohna, Gurgaon, New Gurgaon, Dwarka Expressway & Delhi NCR. Explore luxury apartments, commercial spaces, SCO plots and high-growth investment opportunities with expert guidance.",
  url: "https://www.agarwalrealtors.in",
  phone: "+91 99910 00585",
  phoneRaw: "919991000585",
  whatsapp: "919991000585",
  email: "info@agarwalrealtors.in",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Agarwal%20Realtors%20%7C%20Property%20Dealer%20%7C%20Real%20Estate%20Consultant%20Sohna&query_place_id=ChIJYdqVklIkDTkRDoOlaLREz98",
  mapsEmbed:
    "https://www.google.com/maps?q=Agarwal+Realtors+Sohna+Gurugram&output=embed",
  // Approximate — verify against your Google Business Profile pin.
  geo: { lat: 28.3497, lng: 77.0653 },
  address: {
    street: "Badshahpur Sohna Rd, next to Central Park Flower Valley, Dhunela",
    locality: "Sohna",
    region: "Gurugram, Haryana",
    postalCode: "122103",
    country: "IN",
    full: "Badshahpur Sohna Rd, next to Central Park Flower Valley, Dhunela, Sohna, Haryana 122103, India",
  },
  hours: "Mon–Sun · 9:30 AM – 8:00 PM",
  founded: "2008",
  social: {
    instagram: "https://instagram.com/agarwalrealtors",
    facebook: "https://facebook.com/agarwalrealtors",
    youtube: "https://youtube.com/@agarwalrealtors",
    linkedin: "https://linkedin.com/company/agarwalrealtors",
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
      "Hi Agarwal Realtors, I'd like to know more about investment opportunities in Gurgaon."
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:+${SITE.phoneRaw}`;
}
