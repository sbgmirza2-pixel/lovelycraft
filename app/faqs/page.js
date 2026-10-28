import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqsAccordion from "./FaqsAccordion";

export const metadata = {
  title: "Frequently Asked Questions - Lovely Craft APK",
  description:
    "Find answers about Lovely Craft APK, Android installation, compatibility, updates, and common download problems.",
  alternates: {
    canonical: "https://lovelycraftapk.org/faqs/",
  },
    openGraph: {
    title: "Frequently Asked Questions - Lovely Craft APK",
    description:
      "Find answers about Lovely Craft APK, Android installation, compatibility, updates, and common download problems.",
    url: "https://lovelycraftapk.org/faqs/",
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

export default function FAQsPage() {
  const faqsList = [
    {
      question: "What is Lovely Craft?",
      answer: "Lovely Craft is a sandbox-style game associated with creative gameplay and block-based environments."
    },
    {
      question: "How do I install Lovely Craft APK?",
      answer: "Download the APK from a trustworthy source, open the file, and follow the installation instructions on your device."
    },
    {
      question: "Is Lovely Craft APK safe?",
      answer: "Safety depends on the source and the actual file. Verify downloads before installing them."
    },
    {
      question: "Why is the game not installing?",
      answer: "The APK may be incomplete or incompatible with your Android version. Check the file and device requirements."
    },
    {
      question: "How do I update the game?",
      answer: "Check for a newer verified version from a trustworthy source."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F9F1] flex flex-col justify-between font-[var(--font-body)] text-[#15251B]">
      {/* Navbar Integration */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-[800px] w-full mx-auto px-4 py-12 md:py-16">
        
        {/* Page Header with h2 */}
        <div className="mb-10 text-left">
          <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-[var(--font-display)] font-extrabold text-[#15251B] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
     
        </div>

        {/* FAQs Accordion Client Component */}
        <FaqsAccordion faqsList={faqsList} />

        {/* Missing Footer Note Added */}
        <p className="mt-8 font-[var(--font-body)] text-sm md:text-base text-[#6B7E74] leading-relaxed text-left border-t border-[#DCE8D6] pt-6">
          For more information, explore the guides available on{" "}
          <Link href="/" className="text-[#23891A] font-semibold hover:underline">
            LovelyCraftAPK.org
          </Link>
          .
        </p>

      </main>

      {/* Footer Integration */}
      <Footer />
    </div>
  );
}