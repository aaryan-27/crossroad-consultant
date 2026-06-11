// ─────────────────────────────────────────────────────────────
// Central site configuration — NAP, contact, navigation, SEO
// Single source of truth for business identity (used across pages
// + JSON-LD schema). Keep consistent with Google Business Profile.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Gorwal Properties & Developers",
  legalName: "Gorwal Properties & Developers | Property Dealer | Real Estate Consultant Gurugram",
  tagline: "Your Trusted Partner for Real Estate Investments in Gurgaon",
  description:
    "Gorwal Properties & Developers is the trusted property dealer and real estate consultant for Gurugram, New Gurgaon, Dwarka Expressway & Delhi NCR. Explore luxury apartments, commercial spaces, SCO plots and high-growth investment opportunities with expert guidance.",
  url: "https://www.gorwalproperties.in",
  phone: "+91 98126 90197",
  phoneRaw: "919812690197",
  whatsapp: "919812690197",
  email: "info@gorwalproperties.in",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gorwal%20Properties%20%26%20Developers&query_place_id=ChIJXRZaaoQlDTkRrnnd2eHL3BM",
  mapsEmbed:
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=place_id:ChIJXRZaaoQlDTkRrnnd2eHL3BM",
  // Approximate — verify against your Google Business Profile pin.
  geo: { lat: 28.2382, lng: 77.0192 },
  address: {
    street: "B-501, Near Westin Resort, Dhaula",
    locality: "Sohna",
    region: "Haryana",
    postalCode: "122103",
    country: "IN",
    full: "B-501, Near Westin Resort, Dhaula, Sohna, Gurgoan, Haryana 122103, India",
  },
  hours: "Mon–Sun · 9:30 AM – 8:00 PM",
  founded: "2008",
  social: {
    instagram: "https://instagram.com/gorwalproperties",
    facebook: "https://facebook.com/gorwalproperties",
    youtube: "https://youtube.com/@gorwalproperties",
    linkedin: "https://linkedin.com/company/gorwalproperties",
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
      "Hi Gorwal Properties & Developers, I'd like to know more about investment opportunities in Gurgaon."
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:+${SITE.phoneRaw}`;
}
