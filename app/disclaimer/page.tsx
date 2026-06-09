import type { Metadata } from "next";
import { LegalLayout } from "@/components/ui/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for ${SITE.name} — important information about property listings and RERA.`,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      updated="June 2026"
      slug="disclaimer"
      sections={[
        {
          heading: "Advisory & Channel Partner Role",
          body: [
            `${SITE.name} is an independent real estate advisory and authorised channel partner. We are not the developer or builder of any project featured on this website. All transactions are executed directly between the buyer and the respective developer.`,
          ],
        },
        {
          heading: "RERA Compliance",
          body: [
            "All projects featured are, to the best of our knowledge, registered under the Haryana Real Estate Regulatory Authority (HARERA). Buyers are advised to verify RERA registration numbers and project approvals on the official HARERA portal before purchase.",
          ],
        },
        {
          heading: "Indicative Information",
          body: [
            "Images, pricing, payment plans, amenities and possession timelines are indicative and provided by developers. They do not constitute a legal offer or contract and are subject to change.",
          ],
        },
        {
          heading: "Contact",
          body: [
            `For any clarification, please contact us at ${SITE.phone} or ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
