// ─────────────────────────────────────────────────────────────
// Central site configuration — NAP, contact, navigation, SEO
// Single source of truth for business identity (used across pages
// + JSON-LD schema). Keep consistent with Google Business Profile.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Singla Estate",
  legalName: "Singla Estate | Property Dealer | Real Estate Consultant Gurugram",
  tagline: "Your Trusted Partner for Real Estate Investments in Gurgaon",
  description:
    "Singla Estate is the trusted property dealer and real estate consultant for Gurugram, New Gurgaon, Dwarka Expressway & Delhi NCR. Explore luxury apartments, commercial spaces, SCO plots and high-growth investment opportunities with expert guidance.",
  url: "https://www.singlaestate.in",
  phone: "+91 99919 35935",
  phoneRaw: "919991935935",
  whatsapp: "919991935935",
  email: "info@singlaestate.in",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Singla%20Estate&query_place_id=ChIJh-GwPPklDTkRaoSxme8UtIw",
  mapsEmbed:
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=place_id:ChIJh-GwPPklDTkRaoSxme8UtIw",
  // Approximate — verify against your Google Business Profile pin.
  geo: { lat: 28.2490, lng: 77.0154 },
  address: {
    street: "Suryansh Hotel Sector-33, Badshahpur Sohna Rd, near Central Park Flower Valley",
    locality: "Sohna, Gurugram",
    region: "Haryana",
    postalCode: "122103",
    country: "IN",
    full: "Suryansh Hotel Sector-33, Badshahpur Sohna Rd, near Central Park Flower Valley, Sohna, Haryana 122103, India",
  },
  hours: "Mon–Sun · 9:30 AM – 8:00 PM",
  founded: "2008",
  social: {
    instagram: "https://instagram.com/singlaestate",
    facebook: "https://facebook.com/singlaestate",
    youtube: "https://youtube.com/@singlaestate",
    linkedin: "https://linkedin.com/company/singlaestate",
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
      "Hi Singla Estate, I'd like to know more about investment opportunities in Gurgaon."
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:+${SITE.phoneRaw}`;
}
