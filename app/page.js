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
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F9F1] text-[#15251B]">
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

      <div id="pros-cons">
        <ProsCons />
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

      <Conclusion />

      <div id="faq">
        <Faq />
      </div>

      <Footer />
    </main>
  );
}