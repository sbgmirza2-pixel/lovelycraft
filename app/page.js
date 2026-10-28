const SITE_URL = 'https://lovelycraftapk.org/';
export const metadata = {
  title: "Lovely Craft APK Download v0.2.999 for Android (Latest Version)",
  description: "Download Lovely Craft Piston Trap APK for Android and enjoy creative building, piston traps, resource gathering, and sandbox gameplay.",
   alternates: {
    canonical: SITE_URL,
  },
};
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTabs from "./components/SectionTabs";

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

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Lovely Craft APK",
        "operatingSystem": "ANDROID",
        "applicationCategory": "GameApplication",
        "softwareVersion": "0.2.999",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Download Lovely Craft Piston Trap APK for Android and enjoy creative building, piston traps, resource gathering, and sandbox gameplay."
      },
      {
        "@type": "WebSite",
        "@id": "https://lovelycraftapk.org/#website",
        "url": "https://lovelycraftapk.org/",
        "name": "Lovely Craft APK",
        "publisher": {
          "@id": "https://lovelycraftapk.org/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://lovelycraftapk.org/#organization",
        "name": "Lovely Craft APK",
        "url": "https://lovelycraftapk.org/",
       
      },
      {
        "@type": "WebPage",
        "@id": "https://lovelycraftapk.org/#webpage",
        "url": "https://lovelycraftapk.org/",
        "name": "Lovely Craft APK Download v0.2.999 for Android",
        "datePublished": "2026-08-09T00:00:00+00:00",
        "dateModified": "2026-08-09T00:00:00+00:00",
        "author": {
          "@type": "Person",
          "name": "Crime"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#F5F9F1] text-[#15251B]">
      
  {/* Schema Markup (Structured Data) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
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