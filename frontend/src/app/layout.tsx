import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import TopBar from "@/components/site/TopBar";
import StockTicker from "@/components/StockTicker";
import DisclaimerPopup from "@/components/DisclaimerPopup";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: {
    default: "Alpha Insiight | SEBI Registered Research Analyst",
    template: "%s | Alpha Insiight",
  },
  description:
    "SEBI-registered research analyst delivering disciplined, transparent trading research: intraday cash, equity delivery, futures, options and MCX.",
  keywords: [
    "stock advisory",
    "SEBI registered research analyst",
    "intraday calls",
    "option trading",
    "MCX tips",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="scroll-smooth antialiased" lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-white font-sans text-slate-900 selection:bg-red-600/20 selection:text-red-900`}>
        <ScrollReveal />
        <DisclaimerPopup />
        <StockTicker />
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
