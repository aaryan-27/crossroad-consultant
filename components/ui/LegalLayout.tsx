import { PageHero } from "./PageHero";

type Section = { heading: string; body: string[] };

export function LegalLayout({
  title,
  updated,
  sections,
  slug,
}: {
  title: string;
  updated: string;
  sections: Section[];
  slug: string;
}) {
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: title, href: `/${slug}` },
        ]}
        eyebrow="Legal"
        title={title}
        subtitle={`Last updated: ${updated}`}
      />
      <section className="section bg-cloud">
        <div className="container max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-xl text-navy md:text-2xl">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-ink/70">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
