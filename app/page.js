const SITE_URL = 'https://lovelycraftapk.org';
export const metadata = {
  title: "Lovely Craft APK Download v0.2.999 for Android (Latest Version)",
  description: "Explore Lovely Craft APK features, gameplay, piston mechanics, customization, requirements, safety tips, and everything you need to know before installing.",
   alternates: {
    canonical: SITE_URL,
  },
};
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTabs from "./components/SectionTabs";
import TableOfContents from "./components/TableOfContents";
import AppInfo from "./components/AppInfo";
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
    "description": "Explore Lovely Craft APK features, gameplay, piston mechanics, customization, requirements, safety tips, and everything you need to know before installing.",
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

      <div id="features">
        <Features />
      </div>

      <div id="checklist">
        <Checklist />
      </div>
       <div id="how-to-play">
        <HowToPlay />
      </div>
      <div id="screenshots">
        <Screenshots />
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