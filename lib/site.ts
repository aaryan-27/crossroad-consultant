// ─────────────────────────────────────────────────────────────
// Central site configuration — NAP, contact, navigation, SEO
// Single source of truth for business identity (used across pages
// + JSON-LD schema). Keep consistent with Google Business Profile.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Evergreen Real Estate",
  legalName: "Evergreen Real Estate | Property Dealer | Real Estate Consultant Gurugram",
  tagline: "Your Trusted Partner for Real Estate Investments in Gurgaon",
  description:
    "Evergreen Real Estate is the trusted property dealer and real estate consultant for Gurugram, New Gurgaon, Dwarka Expressway & Delhi NCR. Explore luxury apartments, commercial spaces, SCO plots and high-growth investment opportunities with expert guidance.",
  url: "https://www.evergreenrealestate.in",
  phone: "+91 96711 95544",
  phoneRaw: "919671195544",
  whatsapp: "919671195544",
  email: "info@evergreenrealestate.in",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Evergreen%20Real%20Estate%20The%20westin%20Vatika%20Sohna%20Karanki&query_place_id=ChIJozjps20pDTkRbunfm45O_-k",
  mapsEmbed:
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=place_id:ChIJozjps20pDTkRbunfm45O_-k",
  // Approximate — verify against your Google Business Profile pin.
  geo: { lat: 28.2382, lng: 77.0192 },
  address: {
    street: "The Westin Vatika Sohna Karanki Resort & Spa, The Westin",
    locality: "Sohna, Karnki",
    region: "Haryana",
    postalCode: "122103",
    country: "IN",
    full: "The Westin Vatika Sohna Karanki Resort & Spa, The Westin, Sohna, Karnki, Haryana 122103, India",
  },
  hours: "Mon–Sun · 9:30 AM – 8:00 PM",
  founded: "2008",
  social: {
    instagram: "https://instagram.com/evergreenrealestate",
    facebook: "https://facebook.com/evergreenrealestate",
    youtube: "https://youtube.com/@evergreenrealestate",
    linkedin: "https://linkedin.com/company/evergreenrealestate",
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
      "Hi Evergreen Real Estate, I'd like to know more about investment opportunities in Gurgaon."
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:+${SITE.phoneRaw}`;
}
