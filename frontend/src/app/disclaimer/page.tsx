import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      sections={[
        {
          heading: "SEBI Registration Status",
          body: [
            "Alpha Insiight is SEBI registered as a Research Entity in terms of SEBI (Research Analyst) Regulations, 2014. Alpha Insiight or its associates has not been debarred/suspended by SEBI or any other regulatory authority for accessing/dealing in securities market.",
          ],
        },
        {
          heading: "Reliability of Research Information",
          body: [
            "The information and views in the reports, our website & all the services (“Research Information”) we provide are believed to be reliable, but we do not represent or warrant its accuracy, completeness or reliability of the information contained in our Research Information, investors and clients are advised to independently evaluate the market conditions/risks involved, before making any trading/investment decisions. The Research Information is not intended to be an exhaustive statement on the financial instruments, issuers, markets or developments referred to therein. Reasonable care has been taken to ensure that the Research Information are not misleading or untrue at the time of publication. Any opinions expressed in the Research Information are subject to change without notice. The analysis contained in the Research Information is based on numerous assumptions. Different assumptions could result in materially different results. Information in the specific research reports are for the private use of the person to whom it has been provided without any liability whatsoever on the part of the Firm, its partners, employees and associate entities. The research material published on this website does not constitute an offer or solicitation to buy or sell any securities referred to therein. It should not be so construed, nor should it or any part of it form the basis of, or be relied on in connection with, any contract or commitment whatsoever.",
            "The information and views in this website & all the services and reports that we provide are believed to be reliable, but we do not accept any responsibility (or liability) for errors of fact or opinion. Users have the right to choose the product/s that suits them/their profile.",
            "Investment/Trading in Securities markets has its own risks. Sincere efforts have been made to present the right investment perspective. The information contained herein is based on analysis and on sources that we consider reliable. We, however, do not vouch for the accuracy or the completeness thereof. This material is for personal information and we are not responsible for any loss incurred due to it & take no responsibility whatsoever for any financial profits or loss which may arise from the recommendations above.",
          ],
        },
        {
          heading: "User Consent",
          body: [
            "You agree and understand that the information and material contained in this website implies and constitutes your consent to the terms and conditions mentioned below. You also agree that Alpha Insiight (Research Analyst) can modify or alter the terms and conditions of the use of this service without any liability.",
            "The content of the site and the interpretation of data are solely the personal views of the contributors. Alpha Insiight reserves the right to make modifications and alterations to the content of the website. Users are advised to use the data for the purpose of information only and rely on their own judgement while making investment decisions. The investments discussed or recommended may not be suitable for all investors. Alpha Insiight does not warranty the timeliness, accuracy or quality of the electronic content.",
          ],
        },
        {
          heading: "Confidentiality of Calls & Reports",
          body: [
            "Our clients (Paid or Unpaid), any third party or anyone else have no rights to forward or share our calls or SMS or reports or any Information provided by us to/with anyone which is received directly or indirectly by them. If found so then Serious Legal Actions can be taken.",
          ],
        },
        {
          heading: "Website Terms & Third-Party Links",
          body: [
            "By accessing alphainsiight.com you have read, understood and agree to be legally bound by the terms of the following disclaimer and user agreement. We are not responsible for any errors, omissions, representations or any links on any of our pages, and do not endorse any advertisers on our web pages. Please verify the veracity of all information on your own before undertaking any alliance. This website contains articles contributed by several individuals; the views are exclusively their own and do not necessarily represent the views of the website or its management. The linked sites are not under our control and we are not responsible for the contents of any linked site or any link contained in a linked site, or any changes or updates to such sites. We are providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the site.",
            "The information on this website is updated from time to time. We however exclude any warranties (whether expressed or implied), as to the quality, accuracy, efficacy, completeness, performance, fitness or any of the contents of the website, including (but not limited to) any comments, feedback and advertisements contained within the site.",
          ],
        },
        {
          heading: "SMS & Communication Risk",
          body: [
            "There are risks associated with utilizing internet and short messaging system (SMS) based information and research dissemination services. Subscribers are advised to understand that the services can fail due to failure of hardware, software, and internet connection. While we try our best that the messages are delivered in time to the subscribers' mobile network, the delivery of these messages to the customer's mobile phone/handset is the responsibility of the customer's mobile network. SMS may be delayed and/or not delivered on certain days, owing to technical reasons, and we cannot be held responsible for the same.",
          ],
        },
        {
          heading: "Limitation of Liability & Jurisdiction",
          body: [
            "We hereby expressly disclaim any implied warranties imputed by the laws of any jurisdiction. We consider ourselves and intend to be subject to the jurisdiction only of the court of Indore in India. If you don't agree with any of our disclaimers above please do not read the material on any of our pages. This site is specifically for users in the territory of India; although access to users outside India is not denied, we shall have no legal liabilities whatsoever under the laws of any jurisdiction other than India. We reserve the right to make changes to our site and these disclaimers, terms, and conditions at any time.",
            "All information is for educational and informational use only. You are solely responsible for making your own investment decisions.",
          ],
        },
        {
          heading: "Content Accuracy & Third-Party Information",
          body: [
            "Alpha Insiight, its management, its associate companies and/or their employees take no responsibility for the veracity, validity and the correctness of the expert recommendations or other information or research. Although we attempt to research thoroughly on information provided herein, there are no guarantees in accuracy. The information presented on the site has been gathered from various sources believed to be providing correct information. Alpha Insiight, its group, companies, associates and/or employees are not responsible for errors, inaccuracies if any in the content provided on the site. Any prediction made on the direction of the stock/commodity market or on the direction of individual stocks/commodities may prove to be incorrect. Users/visitors are expected to refer to other investment resources to verify the accuracy of the data posted on this site on their own.",
          ],
        },
        {
          heading: "Copyright & Reproduction",
          body: [
            "The content of the website cannot be copied, reproduced, republished, uploaded, posted, transmitted or distributed for any non-personal use without obtaining prior permission from Alpha Insiight. We reserve the right to terminate the accounts of subscribers/customers who violate the proprietary rights, in addition to necessary legal action.",
          ],
        },
        {
          heading: "Technical Failures",
          body: [
            "Alpha Insiight and its owners/affiliates are not liable for damages caused by any performance, failure of performance, error, omission, interruption, deletion, defect, delay in transmission or operations, computer virus, communications line failure, and unauthorized access to personal accounts. Alpha Insiight is not responsible for any technical failure or malfunctioning of the software or delays of any kind.",
            "The share price projections shown are not necessarily indicative of future price performance. The information herein, together with all estimates and forecasts, can change without notice. Analyst or any person related to Alpha Insiight might be holding positions in the securities recommended.",
          ],
        },
        {
          heading: "Payment & Transaction Liability",
          body: [
            "“We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any transaction, on account of the cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.”",
          ],
        },
        {
          heading: "Marketing & Communication Consent",
          body: [
            "By filling out the 'Quick Registration' and 'Free Trial' forms on this website, you agree to provide us your valid mobile number and provide consent for us to call and send SMS to that number, even if it is registered on the National 'Do Not Disturb' registry.",
            "By surfing our website and submitting your details, you authorize Alpha Insiight to send Promotional and Transactional communication, even if you are registered under the National Do Not Call Registry or the Telecom Commercial Communications Customer Preference Regulations, 2010.",
          ],
        },
        {
          heading: "Dispute Resolution",
          body: [
            "All disputes will be subject, first to mediation, and then to arbitration by a sole arbitrator appointed by Alpha Insiight in accordance with Indian law, the Indian Arbitration and Conciliation Act, 1996. The venue of arbitration and other legal proceedings will be in the jurisdiction of Indore, Madhya Pradesh courts.",
          ],
        },
        {
          heading: "Standard Warning",
          body: [
            "“Investment in securities market are subject to market risks. Read all the related documents carefully before investing.”",
            "“Registration granted by SEBI, enlistment as RA with exchange and certification from NISM in no way guarantee performance of the Research Analyst or provide any assurance of returns to investors.”",
            "Any surfing and reading of the information is the acceptance of this disclaimer. If you do not agree to any of the terms mentioned in this agreement, you should exit the site.",
          ],
        },
      ]}
    />
  );
}
