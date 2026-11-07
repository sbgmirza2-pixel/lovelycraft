import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqsAccordion from "./FaqsAccordion";

const SITE_URL = "https://lovelycraftapk.org";
const PAGE_URL = `${SITE_URL}/faqs`;
const LOGO_URL = `${SITE_URL}/logo.jpg`;
const TITLE = "Lovely Craft APK FAQs - Install, Safety & Updates";
const DESCRIPTION =
  "Find answers about Lovely Craft APK, Android installation, compatibility, updates, and common download problems.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Lovely Craft",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "Lovely Craft APK Gameplay Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [LOGO_URL],
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

  // ---------- JSON-LD Schema ----------
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faqpage`,
        url: PAGE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: faqsList.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "FAQs", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F5F9F1] flex flex-col justify-between font-[var(--font-body)] text-[#15251B]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navbar Integration */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-[800px] w-full mx-auto px-4 py-12 md:py-16">

        {/* Visible Breadcrumb (schema ke saath match karta hai) */}
        <nav className="text-xs text-[#6B7E74] mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-[#23891A]">Home</Link>
          <span>/</span>
          <span>FAQs</span>
        </nav>

        {/* Page Header with h1 */}
        <div className="mb-10 text-left">
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-[var(--font-display)] font-extrabold text-[#15251B] tracking-tight mb-3">
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQs Accordion Client Component */}
        <FaqsAccordion faqsList={faqsList} />

        {/* Footer Note */}
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