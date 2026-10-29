import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Disclaimer - Lovely Craft APK",
  description:
    "Read our disclaimer covering game information, APK downloads, third-party links, trademarks, and website responsibility.",
  alternates: {
    canonical: "https://lovelycraftapk.org/disclaimer",
  },
    openGraph: {
    title: "Disclaimer - Lovely Craft APK",
    description:
      "Read our disclaimer covering game information, APK downloads, third-party links, trademarks, and website responsibility.",
    url: "https://lovelycraftapk.org/disclaimer",
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

export default function DisclaimerPage() {
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
              Disclaimer
            </h2>

            {/* Elegant Green Line Below Heading */}
            <div className="w-16 h-1 bg-[#23891A] my-5 rounded-none relative z-10"></div>

            {/* Content Text */}
            <div className="flex flex-col gap-5 text-[#51655A] text-base md:text-lg leading-relaxed text-left relative z-10 mt-2 w-full">
              
              <p className="m-0">
                The information published on{" "}
                <Link href="/" className="text-[#23891A] font-semibold hover:underline">
                  LovelyCraftAPK.org
                </Link>{" "}
                is provided for general informational purposes. We try to keep our content accurate, but game details, versions, and compatibility requirements may change.
              </p>

              <p className="m-0">
                We cannot guarantee the safety or authenticity of APK files obtained from third-party sources. Visitors should verify files before downloading or installing them.
              </p>

              <p className="m-0">
                Our website may include links to external websites. We are not responsible for their content, security, or privacy practices.
              </p>

              <p className="m-0">
                All game names, logos, and trademarks belong to their respective owners. Their mention does not imply official affiliation or endorsement.
              </p>

              <p className="m-0">
                For questions or content concerns, please{" "}
                <Link href="/contact-us" className="text-[#23891A] font-semibold hover:underline">
                  contact us
                </Link>
                .
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