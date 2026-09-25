import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      sections={[
        {
          heading: "All Sales Are Final",
          body: [
            "All sales are final, and we do not offer refunds for the paid period of services already availed by the client. Complaints or dissatisfaction regarding the quality of services during the paid period shall not entitle the client to any refund or compensation.",
          ],
        },
        {
          heading: "Pro-Rata Cancellation",
          body: [
            "As per SEBI guidelines, if a client requests to cancel the subscription, a refund shall only be issued for the unused portion of the subscription period. The refund will be calculated on a pro-rata basis, deducting the charges for the services already availed, including applicable taxes and administrative fees.",
            "Refunds will not be provided for the period of services already availed, irrespective of the client's satisfaction with the recommendations or the outcome of trades.",
          ],
        },
        {
          heading: "Market Risk Acknowledgement",
          body: [
            "Always remember trading/investment in securities markets are always subjected to market risk. We request you to go through the website and read about the Disclaimer, Disclosure, and other terms before subscribing to our services.",
            "We do not offer any guaranteed returns or commit to guaranteed profits on our recommendations. We trade and invest in the stock market, where all investment and trading capital is subject to market risk.",
            "By making the payment for our services it is acknowledged that the client has read and understood the refund policy.",
          ],
        },
        {
          heading: "Contact Us",
          body: [
            "If you still have any query, contact us on +91 95755 19739, or mail us at info@alphainsiight.com.",
          ],
        },
      ]}
    />
  );
}
