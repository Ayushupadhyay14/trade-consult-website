import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        {
          heading: "Our Commitment to Your Privacy",
          body: [
            "Welcome to Alpha Insight. We understand and respect your privacy, and we are committed to protecting it. In order to provide transparency and clarity on how we collect and use your information, we have created this notice which outlines our online information practices and your options for providing and managing that information.",
          ],
        },
        {
          heading: "Information We Collect",
          body: [
            "We collect certain information from you when you provide it to us through our website or social media. Our aim in gathering this information is to improve our services to you. We take great care to maintain the accuracy and security of this information.",
          ],
        },
        {
          heading: "How We Protect Your Information",
          body: [
            "Protecting your privacy and data is extremely important to us. We take measures to ensure the security and confidentiality of any information shared with us. We will only use personally identifiable information for the purposes to which you have consented. However, we cannot guarantee the security of your information 100%, despite our efforts to protect it. Any information you transmit to us through our online services is done at your own risk.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "In addition of the services we provide to you, we may also use your personal information such as your mobile number and email address to send you newsletters, surveys, contest information, or updates on any new services that we believe may be beneficial to you. By subscribing to our services, you agree to allow Alpha Insight to use your personal information for these purposes.",
          ],
        },
        {
          heading: "Consent to Contact",
          body: [
            "By submitting the 'Inquiry Form' on this website or via other channels, you consent to be contacted by us through phone, SMS, or WhatsApp at the number provided, even if registered on the National 'Do Not Disturb' list. We respect your privacy and appreciate your trust.",
          ],
        },
      ]}
    />
  );
}
