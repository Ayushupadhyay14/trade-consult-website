import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Investor Charter" };

export default function InvestorCharterPage() {
  return (
    <LegalPage
      title="Investor Charter in respect of Research Analyst (RA)"
      sections={[
        {
          heading: "A. Vision and Mission Statements for Investors",
          body: [
            "Vision: Invest with knowledge & safety.",
            "Mission: Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.",
          ],
        },
        {
          heading: "B. Business Transacted by the Research Analyst",
          body: [
            "To publish research report based on the research activities of the RA.",
            "To provide an independent unbiased view on securities.",
            "To offer unbiased recommendation, disclosing the financial interests in recommended securities.",
            "To provide research recommendation, based on analysis of publicly available information and known observations.",
            "To conduct audit annually.",
          ],
        },
        {
          heading: "C. Details of Services Provided to Investors (No Indicative Timelines)",
          body: [
            "Onboarding of Clients.",
            "Disclosure to Clients.",
            "To distribute research reports and recommendations to the clients without discrimination.",
            "To maintain confidentiality w.r.t. publication of the research report until made available in the public domain.",
          ],
        },
        {
          heading: "D. Details of Grievance Redressal Mechanism and How to Access It",
          body: [
            "In case of any grievance/complaint, an investor should approach the concerned research analyst and shall ensure that the grievance is resolved within 30 days.",
            "If the investor's complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI's SCORES portal, a centralized web-based complaints redressal system. SEBI takes up complaints registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the status of the complaint.",
            "With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400 051.",
          ],
        },
        {
          heading: "E. Expectations from the Investors (Responsibilities of Investors)",
          body: [
            "Do's:",
            "i. Always deal with SEBI registered Research Analyst.",
            "ii. Ensure that the Research Analyst has a valid registration certificate.",
            "iii. Check for SEBI registration number.",
            <>
              iv. Please refer to the list of all SEBI registered Research Analysts which is available on SEBI website in the following link:{" "}
              <a
                href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-red-700 hover:underline"
              >
                https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14
              </a>
            </>,
            "v. Always pay attention towards disclosures made in the research reports before investing.",
            "vi. Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments.",
            "vii. Before buying securities or applying in a public offer, check for the research recommendation provided by your Research Analyst.",
            "viii. Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.",
            "ix. Inform SEBI about a Research Analyst offering assured or guaranteed returns.",
          ],
        },
        {
          heading: "Don'ts",
          body: [
            "i. Do not provide funds for investment to the Research Analyst.",
            "ii. Don't fall prey to luring advertisements or market rumours.",
            "iii. Do not get attracted to limited period discounts or other incentives, gifts, etc. offered by the Research Analyst.",
            "iv. Do not share login credentials and passwords of your trading and demat accounts with the Research Analyst.",
          ],
        },
      ]}
    />
  );
}
