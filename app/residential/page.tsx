import type { Metadata } from "next";
import { Building2, Home, Layers, TreePine } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { PropertyExplorer } from "@/components/projects/PropertyExplorer";
import { CTABanner } from "@/components/ui/CTABanner";
import { LeadSection } from "@/components/home/LeadSection";
import { Schema } from "@/components/seo/Schema";
import { breadcrumbSchema } from "@/lib/schema";
import { RESIDENTIAL_PROJECTS } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Residential Projects in Gurgaon — Luxury Apartments & Floors",
  description:
    "Explore RERA-verified luxury apartments, builder floors and residential projects in Gurgaon, New Gurgaon & Dwarka Expressway. Filter by budget, location, builder & possession.",
  alternates: { canonical: "/residential" },
  keywords: ["Luxury Apartments Gurgaon", "Residential Projects Gurgaon", "Builder Floors Gurgaon", "New Gurgaon Property"],
};

const HIGHLIGHTS = [
  { icon: Home, label: "Luxury Apartments", value: "3 & 4 BHK" },
  { icon: Layers, label: "Builder Floors", value: "Low Density" },
  { icon: Building2, label: "Sky Villas", value: "Premium" },
  { icon: TreePine, label: "Plots", value: "Freehold" },
];

export default function ResidentialPage() {
  return (
    <>
      <Schema
        json={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Residential Projects", url: "/residential" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Residential", href: "/residential" },
        ]}
        eyebrow="Luxury Living in Gurgaon"
        title={
          <>
            Residential <span className="text-gold-foil">Projects</span> in Gurgaon
          </>
        }
        subtitle="Handpicked, RERA-verified luxury apartments, builder floors and sky villas across Gurgaon's most sought-after corridors — with floor plans, price lists and site visits on request."
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
      >
        <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <h.icon className="mb-2 h-5 w-5 text-gold" />
              <p className="text-sm font-semibold text-white">{h.value}</p>
              <p className="text-xs text-white/55">{h.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="section bg-cloud">
        <div className="container">
          <PropertyExplorer projects={RESIDENTIAL_PROJECTS} />
        </div>
      </section>

      <LeadSection />
      <CTABanner title="Can't find the right home? Let us shortlist for you." />
    </>
  );
}
