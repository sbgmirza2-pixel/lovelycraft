import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "DMCA Policy - Lovely Craft APK",
  description:
    "Submit copyright complaints and request a review of potentially infringing content published on our website.",
  alternates: {
    canonical: "https://lovelycraftapk.org/dmca/",
  },
    openGraph: {
    title: "DMCA Policy - Lovely Craft APK",
    description:
      "Submit copyright complaints and request a review of potentially infringing content published on our website.",
    url: "https://lovelycraftapk.org/dmca/",
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

export default function DMCAPage() {
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
              DMCA Policy
            </h2>

            {/* Elegant Green Line Below Heading */}
            <div className="w-16 h-1 bg-[#23891A] my-5 rounded-none relative z-10"></div>

            {/* Content Text */}
            <div className="flex flex-col gap-5 text-[#51655A] text-base md:text-lg leading-relaxed text-left relative z-10 mt-2 w-full">
              
              <p className="m-0">
                <Link href="/" className="text-[#23891A] font-semibold hover:underline">
                  LovelyCraftAPK.org
                </Link>{" "}
                respects copyright and intellectual property rights. If you believe that material published on our website infringes your copyright, you may contact us with a removal request.
              </p>

              <p className="m-0">
                Please include your name, contact details, the copyrighted work, the URL of the disputed material, and an explanation of your claim. You should also confirm that you own the rights or are authorized to act for the copyright owner.
              </p>

              {/* Copyright Contact Detail Box */}
              <div className="p-4 bg-[#F5F9F1] border-l-4 border-[#23891A] text-[#15251B] font-medium text-base md:text-lg">
                Copyright Contact:{" "}
                <a
                  href="mailto:admin@lovelycraftapk.org"
                  className="text-[#23891A] font-bold hover:underline"
                >
                  admin@lovelycraftapk.org
                </a>
              </div>

              <p className="m-0">
                We will review complete complaints and take appropriate action when necessary. Additional information may be requested if the complaint is incomplete.
              </p>

              <p className="m-0 text-sm md:text-base text-[#6B7E74] leading-relaxed">
                Please ensure all submitted information is accurate. This policy does not replace applicable copyright law.
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