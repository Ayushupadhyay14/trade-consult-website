"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const CONSENT_KEY = "tc_disclaimer_consent_v1";

export default function DisclaimerPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, new Date().toISOString());
    // SEBI audit trail: log the consent server-side (IP + user agent recorded).
    api.post("/compliance/disclaimer-consent", { disclaimer_version: "v1" }).catch(() => {});
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 p-4 backdrop-blur-sm">
      <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <h2 className="text-xl font-bold text-navy-900">Disclaimer</h2>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
          <p className="rounded-lg bg-amber-50 p-3 font-medium text-amber-800">
            &ldquo;Investment in securities market are subject to market risks. Read
            all the related documents carefully before investing.&rdquo;
          </p>
          <p>
            &ldquo;Registration granted by SEBI, enlistment as RA with exchange and
            certification from NISM in no way guarantee performance of the Research
            Analyst or provide any assurance of returns to investors. The securities
            quoted, if any, are for illustration only and are not recommendatory.&rdquo;
          </p>
          <p>
            By accessing our website, you have read, understood &amp; agree to be
            legally bound by the terms of the following disclaimer: stock trading is
            inherently risky and you agree to assume complete and full responsibility
            for the outcomes of all trading decisions that you make, including but
            not limited to loss of capital.
          </p>
          <p>
            Under no circumstances should any person make trading decisions solely
            based on the information discussed herein. Information and
            recommendations on the website are for general information only. Nothing
            contained herein is advice to sell nor solicitation to buy any securities.
          </p>
          <p>
            All information, recommendations, advice and content shared on the
            website is meant for personal use only and must not be reproduced or
            copied in any form.
          </p>
        </div>

        <button onClick={accept} className="btn-dark mt-6 w-full">
          I have read, understood &amp; agree
        </button>
      </div>
    </div>
  );
}
