import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="21 September 2026"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: [
            "By accessing this website or subscribing to any Alpha Insiight research plan, you agree to be bound by these Terms & Conditions, our Disclaimer, Disclosure and Privacy Policy.",
          ],
        },
        {
          heading: "Nature of Service",
          body: [
            "Alpha Insiight provides research-based trading recommendations (entry, target and stop-loss) across cash, futures, options and MCX commodity segments, delivered through a subscriber dashboard, SMS and WhatsApp, as a SEBI-registered Research Analyst (Reg. No. INH000020660).",
            "We do not provide portfolio management, fund management, execution/broking, or personalised investment advisory services.",
          ],
        },
        {
          heading: "Eligibility",
          body: [
            "Our services are intended for individuals who are at least 18 years of age and legally capable of entering into a binding contract under Indian law.",
          ],
        },
        {
          heading: "Subscription & Payment",
          body: [
            "Subscription plans are activated upon successful payment via our payment gateway partner. Prices, features and validity of each plan are as displayed on the Pricing page at the time of purchase.",
            "See our Refund Policy for cancellation and refund terms.",
          ],
        },
        {
          heading: "No Guarantee of Returns",
          body: [
            "All recommendations reflect research opinions and are subject to market risk. Alpha Insiight does not guarantee profits or protection against losses. You are solely responsible for your trading and investment decisions.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "All content on this website and delivered through our services — research reports, calls, articles — is the property of Alpha Insiight and is licensed to you for personal use only. Reproduction, redistribution or resale is strictly prohibited.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "To the maximum extent permitted by law, Alpha Insiight, its analysts and staff shall not be liable for any direct, indirect or consequential loss arising from the use of, or reliance on, information provided through our services.",
          ],
        },
        {
          heading: "Indemnity",
          body: [
            "You agree to indemnify and hold Alpha Insiight harmless from any claims, losses or damages arising from your breach of these Terms or your misuse of our services.",
          ],
        },
        {
          heading: "Governing Law & Jurisdiction",
          body: [
            "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts at Indore, Madhya Pradesh, without prejudice to your right to approach SEBI SCORES or the SEBI ODR portal.",
          ],
        },
        {
          heading: "Amendments",
          body: [
            "We may revise these Terms from time to time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.",
          ],
        },
      ]}
    />
  );
}
