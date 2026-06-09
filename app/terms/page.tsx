import type { Metadata } from "next";
import { LegalLayout } from "@/components/ui/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use governing your use of the ${SITE.name} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      updated="June 2026"
      slug="terms"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: [
            `By accessing this website, you agree to these Terms of Use. ${SITE.name} acts as a real estate advisory and channel partner facilitating transactions between buyers and developers.`,
          ],
        },
        {
          heading: "Property Information",
          body: [
            "All prices, availability, specifications, floor plans and possession dates are indicative, provided by developers, and subject to change without notice. Buyers must independently verify all details and approvals before making any financial commitment.",
          ],
        },
        {
          heading: "No Guarantee of Returns",
          body: [
            "Real estate investments carry market risk. Any appreciation, rental yield or ROI figures shown are illustrative projections, not guarantees of future performance.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            `All content on this website is the property of ${SITE.name} unless otherwise stated, and may not be reproduced without permission.`,
          ],
        },
      ]}
    />
  );
}
