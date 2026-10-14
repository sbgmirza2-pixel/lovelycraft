import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTabs from "./components/SectionTabs";
import AppInfo from "./components/AppInfo";
import About from "./components/About";
import Features from "./components/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Navbar />
      <main>
        <Hero />
        <SectionTabs />
        <AppInfo />
        <About />
        <Features />
      </main>
    </div>
  );
}