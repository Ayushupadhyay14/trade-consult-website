import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Payment" };

export default function PaymentPage() {
  return (
    <div className="bg-slate-50 py-8 sm:py-16">
      <div className="container-site max-w-4xl">
        <h1 className="section-title">Our Payment Options</h1>
        <p className="mt-2 text-xs text-slate-500 sm:text-sm">Alpha Insiight</p>

        <div className="reveal mt-6 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {/* Scan & Pay */}
          <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-red-700">
              UPI
            </span>
            <h2 className="mt-1 text-base font-semibold text-navy-900 sm:text-lg">Scan &amp; Pay</h2>

            <div className="relative mt-4 h-40 w-40 overflow-hidden rounded-xl border border-slate-100 sm:mt-5 sm:h-48 sm:w-48">
              <Image src="/qr_code_clean.png" alt="Alpha Insiight UPI QR code" fill className="object-contain" />
            </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-400 sm:mt-5">UPI ID</p>
            <p className="mt-1 select-all font-mono text-xs font-semibold text-navy-900 sm:text-sm">
              harshitkumar.ra@validkpay
            </p>

            <p className="mt-3 text-xs text-slate-400 sm:mt-4">BHIM · GPay · PhonePe · Paytm</p>
          </div>

          {/* Bank Transfer */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-red-700">
              NEFT / IMPS
            </span>
            <h2 className="mt-1 text-base font-semibold text-navy-900 sm:text-lg">Bank Transfer</h2>

            <dl className="mt-4 space-y-3 text-xs sm:mt-5 sm:space-y-4 sm:text-sm">
              <div>
                <dt className="text-slate-500">Bank</dt>
                <dd className="mt-0.5 font-semibold text-navy-900">Kotak Mahindra Bank</dd>
              </div>
              <div>
                <dt className="text-slate-500">Account No.</dt>
                <dd className="mt-0.5 select-all font-mono font-semibold text-navy-900">9250107989</dd>
              </div>
              <div>
                <dt className="text-slate-500">IFSC Code</dt>
                <dd className="mt-0.5 select-all font-mono font-semibold text-navy-900">KKBK0005915</dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-slate-600 sm:mt-8 sm:text-sm">
          Prefer to pay online instead? Every desk on our{" "}
          <a href="/pricing" className="font-medium text-red-700 hover:underline">
            pricing page
          </a>{" "}
          can be subscribed to directly via secure checkout — no manual transfer required.
        </p>
      </div>
    </div>
  );
}
