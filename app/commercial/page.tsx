import type { Metadata } from "next";
import { Store, Building2, LayoutGrid, UtensilsCrossed, Briefcase, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PropertyExplorer } from "@/components/projects/PropertyExplorer";
import { ROICalculator } from "@/components/tools/ROICalculator";
import { EMICalculator } from "@/components/tools/EMICalculator";
import { LeadSection } from "@/components/home/LeadSection";
import { CTABanner } from "@/components/ui/CTABanner";
import { Schema } from "@/components/seo/Schema";
import { breadcrumbSchema } from "@/lib/schema";
import { COMMERCIAL_PROJECTS } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Commercial Property in Gurgaon — Office, Retail & SCO Plots",
  description:
    "Invest in commercial property in Gurgaon — office spaces, retail shops, SCO plots, food courts & business parks. Use our ROI & rental-yield calculators and get an investment analysis.",
  alternates: { canonical: "/commercial" },
  keywords: ["Commercial Property Gurgaon", "SCO Plots Gurgaon", "Office Space Gurgaon", "Retail Shops Gurgaon"],
};

const CATEGORIES = [
  { icon: Briefcase, title: "Office Spaces", desc: "Grade-A floor plates & pre-leased units with assured rental income." },
  { icon: Store, title: "Retail Shops", desc: "High-street retail in dense, premium residential catchments." },
  { icon: LayoutGrid, title: "SCO Plots", desc: "100% freehold Shop-Cum-Office plots — build, lease & own outright." },
  { icon: UtensilsCrossed, title: "Food Courts", desc: "High-footfall F&B units in landmark commercial destinations." },
  { icon: Building2, title: "Business Parks", desc: "Integrated work environments with institutional-grade tenants." },
];

export default function CommercialPage() {
  return (
    <>
      <Schema
        json={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Commercial Property", url: "/commercial" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Commercial", href: "/commercial" },
        ]}
        eyebrow="Income & Appreciation"
        title={
          <>
            Commercial <span className="text-gold-foil">Investments</span> in Gurgaon
          </>
        }
        subtitle="Office spaces, retail shops, SCO plots and food courts engineered for rental income and capital growth — with full investment analysis, ROI projections and leasing support."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Category cards */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="What We Offer"
            title={<>Commercial asset classes we <span className="text-gold-foil">specialise in</span></>}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 5) * 0.08}>
                <div className="group h-full rounded-2xl border border-navy/5 bg-cloud/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-luxe">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold-gradient group-hover:text-navy">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg text-navy">{c.title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="section bg-cloud">
        <div className="container">
          <SectionHeading
            eyebrow="Investment Tools"
            title={<>Model your <span className="text-gold-foil">returns</span> before you invest</>}
            subtitle="Project appreciation, rental income and loan EMIs with our investor-grade calculators."
          />
          <div className="mt-12 space-y-8">
            <Reveal>
              <ROICalculator />
            </Reveal>
            <Reveal delay={0.1}>
              <EMICalculator />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Investment analysis strip */}
      <section className="section bg-navy text-white">
        <div className="container grid gap-10 lg:grid-cols-3">
          {[
            { stat: "8–10%", label: "SCO Rental Yields", desc: "Among the highest-yielding commercial assets in Gurgaon." },
            { stat: "14–18%", label: "Total Annual ROI", desc: "On well-located SCO & high-street retail in growth corridors." },
            { stat: "100%", label: "Freehold Ownership", desc: "SCO plots give you outright land + building ownership." },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <TrendingUp className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="font-display text-4xl font-bold text-gold">{s.stat}</p>
                  <p className="mt-1 font-semibold text-white">{s.label}</p>
                  <p className="mt-1 text-sm text-white/60">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Commercial listings */}
      <section className="section bg-cloud">
        <div className="container">
          <SectionHeading
            eyebrow="Available Now"
            title={<>Featured <span className="text-gold-foil">commercial projects</span></>}
          />
          <div className="mt-10">
            <PropertyExplorer projects={COMMERCIAL_PROJECTS} />
          </div>
        </div>
      </section>

      <LeadSection />
      <CTABanner title="Want a personalised commercial investment analysis?" />
    </>
  );
}
