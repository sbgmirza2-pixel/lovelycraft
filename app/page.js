import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTabs from "./components/SectionTabs";
import Breadcrumb from "./components/Breadcrumb";

import About from "./components/About";
import Features from "./components/Features";
import Checklist from "./components/Checklist";
import ProsCons from "./components/ProsCons";
import InstallGuide from "./components/InstallGuide";
import Safety from "./components/Safety";
import WhoShouldTry from "./components/WhoShouldTry";
import Conclusion from "./components/Conclusion";
import Faq from "./components/Faq";
import HowToPlay from "./components/HowToPlay";
import Footer from "./components/Footer";
import Screenshots from "./components/Screenshots";

const SITE_URL = "https://lovelycraftapk.org";
const SITE_NAME = "Lovely Craft";
const APP_NAME = "Lovely Craft Piston Trap";
const LOGO_URL = `${SITE_URL}/logo.jpg`;
const TITLE = "Lovely Craft APK Download v0.2.999 for Android (Latest Version)";
const DESCRIPTION =
  "Download Lovely Craft Piston Trap APK for Android and enjoy creative building, piston traps, resource gathering, and sandbox gameplay.";

const BREADCRUMBS = [
  { name: "Home", url: SITE_URL },
  { name: "Lovely Craft Download", url: `${SITE_URL}/#install` },
];

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: APP_NAME,
        url: SITE_URL,
        image: LOGO_URL,
        operatingSystem: "ANDROID",
        applicationCategory: "GameApplication",
        softwareVersion: "0.2.999",
        description: DESCRIPTION,
        author: {
          "@type": "Organization",
          name: "Crime",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: LOGO_URL,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "en-US",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "en-US",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#app`,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/#breadcrumb`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: LOGO_URL,
        },
        datePublished: "2026-08-09T00:00:00+00:00",
        dateModified: "2026-08-09T00:00:00+00:00",
        author: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: BREADCRUMBS.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: b.url,
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F5F9F1] text-[#15251B]">
      {/* Schema Markup (Structured Data) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <Breadcrumb items={BREADCRUMBS} />
      <Hero />
      <SectionTabs />

      <div id="about">
        <About />
      </div>

      <div id="screenshots">
        <Screenshots />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="checklist">
        <Checklist />
      </div>

      <div id="how-to-play">
        <HowToPlay />
      </div>

      <div id="install">
        <InstallGuide />
      </div>

      <div id="safety">
        <Safety />
      </div>

      <div id="who-should-try">
        <WhoShouldTry />
      </div>

      <div id="pros-cons">
        <ProsCons />
      </div>

      <div id="faq">
        <Faq />
      </div>

      <Conclusion />

      <Footer />
    </main>
  );
}