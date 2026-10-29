import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us - Lovely Craft APK",
  description:
    "Learn about our website, its purpose, and the game information, features, and installation guides available for players.",
  alternates: {
    canonical: "https://lovelycraftapk.org/about-us/",
  },
    openGraph: {
    title: "About Us - Lovely Craft APK",
    description:
      "Learn about our website, its purpose, and the game information, features, and installation guides available for players.",
    url: "https://lovelycraftapk.org/about-us",
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

export default function AboutUsPage() {
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
              About Us
            </h2>

            {/* Elegant Green Line Below Heading */}
            <div className="w-16 h-1 bg-[#23891A] my-5 rounded-none relative z-10"></div>

            {/* Content Text */}
            <div className="flex flex-col gap-5 text-[#51655A] text-base md:text-lg leading-relaxed text-left relative z-10 mt-2">
              
              <p className="m-0">
                Welcome to{" "}
                <Link href="/" className="text-[#23891A] font-semibold hover:underline">
                  LovelyCraftAPK.org
                </Link>
                , a website for players who want to learn more about Lovely Craft. We share useful information about the game, its features, available versions, and installation process.
              </p>

              <p className="m-0">
                Our goal is to keep things simple by providing helpful guides and answering common questions about gameplay and Android compatibility. We aim to make game information easy to understand for every visitor.
              </p>

              <p className="m-0 text-sm md:text-base text-[#6B7E74] leading-relaxed">
                LovelyCraftAPK.org is an independent informational website and is not affiliated with the game&apos;s developers unless explicitly stated. We encourage visitors to verify download sources before installing any APK.
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