import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy - Lovely Craft APK",
  description:
    "Read our privacy policy to understand how visitor information, cookies, and website data may be collected and used.",
  alternates: {
    canonical: "https://lovelycraftapk.org/privacy-policy",
  },
   openGraph: {
    title: "Privacy Policy - Lovely Craft APK",
    description:
      "Read our privacy policy to understand how visitor information, cookies, and website data may be collected and used.",
    url: "https://lovelycraftapk.org/privacy-policy",
    siteName: "Lovely Craft APK",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Lovely Craft APK Gameplay Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-[var(--font-body)] text-[#15251B]">
      {/* Relative Import Navbar */}
      <Navbar />

      <main className="py-12 md:py-20 flex-grow relative">
        <div className="max-w-[800px] mx-auto px-4 flex flex-col items-center text-center">
          
          {/* Single Sharp Glowing Card Box */}
          <div className="w-full p-8 md:p-12 bg-white border border-[#23891A]/30 rounded-none shadow-[0_0_25px_rgba(35,137,26,0.2)] transition-all duration-300 flex flex-col items-center relative overflow-hidden">
            
            {/* Top Light Accent Glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#23891A]/10 blur-3xl pointer-events-none"></div>

            {/* Heading in Center */}
            <h2 className="text-2xl md:text-4xl font-[var(--font-display)] font-bold text-[#15251B] m-0 tracking-tight relative z-10">
              Privacy Policy
            </h2>

            {/* Elegant Green Line Below Heading */}
            <div className="w-16 h-1 bg-[#23891A] my-5 rounded-none relative z-10"></div>

            {/* Content Text */}
            <div className="flex flex-col gap-5 text-[#51655A] text-base md:text-lg leading-relaxed text-left relative z-10 mt-2 w-full">
              
              <p className="m-0">
                At{" "}
                <Link href="/" className="text-[#23891A] font-semibold hover:underline">
                  LovelyCraftAPK.org
                </Link>
                , we respect our visitors&apos; privacy. This page explains how information may be handled when you use our website.
              </p>

              <p className="m-0">
                We may collect basic technical information, such as browser details, device information, and pages visited, to understand website performance and improve our content.
              </p>

              <p className="m-0">
                Cookies and similar technologies may be used by our website or third-party services, including analytics and advertising providers, where applicable.
              </p>

              <p className="m-0">
                Our website may also contain links to external websites with their own privacy policies. We do not control their data practices.
              </p>

              <p className="m-0">
                For privacy-related questions, please{" "}
                <Link href="/contact-us" className="text-[#23891A] font-semibold hover:underline">
                  contact us
                </Link>
                . This policy may be updated when our website practices change.
              </p>

              {/* Last Updated Date */}
              <div className="pt-4 mt-2 border-t border-[#DCE8D6] text-xs md:text-sm text-[#6B7E74]">
                <strong>Last updated:</strong> October 2026.
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* Relative Import Footer */}
      <Footer />
    </div>
  );
}