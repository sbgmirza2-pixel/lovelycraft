import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms and Conditions - Lovely Craft APK",
  description:
    "Review the terms for using our website, accessing published content, and following external download links.",
  alternates: {
    canonical: "https://lovelycraftapk.org/terms-and-conditions/",
  },
  openGraph: {
    title: "Terms and Conditions - Lovely Craft APK",
    description:
      "Review the terms for using our website, accessing published content, and following external download links.",
    url: "https://lovelycraftapk.org/terms-and-conditions/",
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

export default function TermsAndConditionsPage() {
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
              Terms and Conditions
            </h2>

            {/* Elegant Green Line Below Heading */}
            <div className="w-16 h-1 bg-[#23891A] my-5 rounded-none relative z-10"></div>

            {/* Content Text */}
            <div className="flex flex-col gap-5 text-[#51655A] text-base md:text-lg leading-relaxed text-left relative z-10 mt-2 w-full">
              
              <p className="m-0">
                By using{" "}
                <Link href="/" className="text-[#23891A] font-semibold hover:underline">
                  LovelyCraftAPK.org
                </Link>
                , you agree to use our website responsibly and follow these Terms and Conditions.
              </p>

              <p className="m-0">
                Our content is provided for informational purposes, including game details, installation guides, and related updates. We try to maintain accurate information but cannot guarantee that every detail is always current.
              </p>

              <p className="m-0">
                You are responsible for checking external websites and verifying downloaded files before installation. We do not control third-party websites or their services.
              </p>

              <p className="m-0">
                Our original content may not be reproduced without permission. Third-party names and trademarks belong to their respective owners.
              </p>

              <p className="m-0">
                We may update these terms when necessary. Continued use of the website means you accept the revised terms.
              </p>

            </div>

          </div>

        </div>
      </main>

      {/* Relative Import Footer */}
      <Footer />
    </div>
  );
}