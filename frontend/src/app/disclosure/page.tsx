import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Disclosure" };

export default function DisclosurePage() {
  return (
    <LegalPage
      title="Disclosure"
      sections={[
        {
          heading: "Purpose of This Document",
          body: [
            "The particulars given in this Disclosure Document have been prepared in accordance with SEBI (Research Analysts) Regulations, 2014.",
            "The purpose of the Document is to provide essential information about the Research and Recommendation Services in a manner to assist and enable the prospective client/client in making an informed decision for engaging in Research and Recommendation services before investing.",
            "For the purpose of this Disclosure Document, Research Analyst is Alpha Insiight (hereinafter referred to as “Research Analyst”).",
          ],
        },
        {
          heading: "History, Present Business and Background",
          body: [
            "Research Analyst is registered with SEBI with Registration No. INH000020660. The firm received its registration on 4th June, 2025 and is engaged in Research and Recommendation Services.",
            "The focus of the Research Analyst is to provide research and recommendation services to clients. The Research Analyst aligns its interests with those of the clients and aims to deliver well-researched services.",
          ],
        },
        {
          heading: "Terms and Conditions of Research and Recommendation Services",
          body: [
            "Terms and conditions of Research and Recommendation Services are detailed in the Terms and Conditions document. Please refer to the same for complete details.",
          ],
        },
        {
          heading: "Disciplinary History",
          body: [
            "There are no pending material litigations or legal proceedings, findings of inspections, or investigations for which action has been taken or initiated by any regulatory authority against the Research Analyst or its associates or relatives.",
            "No Associates.",
          ],
        },
        {
          heading: "Disclosures with Respect to Research and Recommendation Services",
          body: [
            "Research Analyst or his associate or his relative may have financial interest or actual/beneficial ownership of one per cent or more in the securities recommended in its personal portfolio at the end of the month immediately preceding the date of publication of the research report or date of the public appearance. Details of the same may be referred through the disclosures made at the time of recommendation.",
            "There are no actual or potential conflicts of interest arising from any connection of the Research Analyst or his associate or his relative to or association with any issuer of products/securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services. Such conflicts of interest shall be disclosed to the client as and when they arise.",
            "Research analyst or its associates or relatives may have actual/beneficial ownership of one per cent or more securities of the subject company, at the end of the month immediately preceding the date of publication of the research report or date of the public appearance or research recommendation. Details of the same may be referred through the disclosures made at the time of recommendation.",
            "Research analyst or its associate or relatives has no connection or association of any sort with any issuer of products/securities recommended herein.",
            "Research analyst or his associate or his relative has no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of research and recommendations services.",
            "Research analyst or its associates has not received any kind of remuneration or consideration from the products/securities recommended herein.",
            "Research analyst or its associates have not received any compensation from the subject company in the past 12 months.",
            "Research analyst or its associates have not managed or co-managed the public offering of the subject company in the past 12 months.",
            "Research analyst or its associates have not received any compensation for investment banking or merchant banking or brokerage services from the subject company in the past 12 months.",
            "Research analyst or its associates have not received any compensation or other benefits from the subject company or third party in connection with the research report or research recommendations.",
            "Research analyst or its associates have not received any compensation for products or services from the subject company in the past 12 months.",
            "The subject company is or was not a client of the Research Analyst or its associates during the twelve months preceding the date of distribution of the research report and recommendation services provided.",
            "Research Analyst or its associates has not served as an officer, director or employee of the subject company.",
          ],
        },
      ]}
    />
  );
}
