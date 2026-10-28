import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us - Lovely Craft APK",
  description:
    "Contact us for website questions, feedback, content corrections, or concerns about information published on our website.",
  alternates: {
    canonical: "https://lovelycraftapk.org/contact-us/",
  },
    openGraph: {
    title: "Contact Us - Lovely Craft APK",
    description:
      "Contact us for website questions, feedback, content corrections, or concerns about information published on our website.",
    url: "https://lovelycraftapk.org/contact-us/",
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

export default function ContactUsPage() {
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
              Contact Us
            </h2>

            {/* Elegant Green Line Below Heading */}
            <div className="w-16 h-1 bg-[#23891A] my-5 rounded-none relative z-10"></div>

            {/* Content Text */}
            <div className="flex flex-col gap-5 text-[#51655A] text-base md:text-lg leading-relaxed text-left relative z-10 mt-2 w-full">
              
              <p className="m-0">
                Thank you for visiting{" "}
                <Link href="/" className="text-[#23891A] font-semibold hover:underline">
                  LovelyCraftAPK.org
                </Link>
                . We welcome feedback, questions, and suggestions from our visitors.
              </p>

              <p className="m-0">
                If you notice incorrect game information, outdated details, broken links, or problems with any page, please contact us. You can also share suggestions for new guides or report issues with the information published on our website.
              </p>

              <p className="m-0">
                For copyright concerns, please include the relevant page URL and details about your request.
              </p>

              {/* Email Contact Detail */}
              <div className="p-4 bg-[#F5F9F1] border-l-4 border-[#23891A] text-[#15251B] font-medium text-base md:text-lg">
                Email: <a href="mailto:admin@lovelycraftapk.org" className="text-[#23891A] font-bold hover:underline">admin@lovelycraftapk.org</a>
              </div>

              <p className="m-0 text-sm md:text-base text-[#6B7E74] leading-relaxed">
                We review messages as needed and aim to respond to genuine website-related concerns. Please avoid sharing passwords or other sensitive personal information in your messages.
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