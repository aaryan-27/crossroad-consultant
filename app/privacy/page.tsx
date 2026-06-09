import type { Metadata } from "next";
import { LegalLayout } from "@/components/ui/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name} — how we collect, use and protect your personal information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="June 2026"
      slug="privacy"
      sections={[
        {
          heading: "Information We Collect",
          body: [
            `${SITE.name} collects information you voluntarily provide through our enquiry and consultation forms — including your name, phone number, email, budget and property preferences — solely to respond to your real estate requirements.`,
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use your information to share property options, schedule site visits, provide investment advice and keep you informed about relevant launches and offers. We never sell your data to third parties.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "Your data is stored securely and shared only with our internal advisory team and, where you request it, the relevant developer for the purpose of your enquiry.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            `You may request access to, correction of, or deletion of your personal data at any time by contacting us at ${SITE.email} or ${SITE.phone}.`,
          ],
        },
      ]}
    />
  );
}
