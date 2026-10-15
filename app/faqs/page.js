'use client';

import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsList = [
    {
      question: "In Lovely Craft, can players modify their character's appearance?",
      answer: "Yes. Players can switch between character options and cosmetics, such as changing portions of their in-game appearance."
    },
    {
      question: "Does Lovely Craft APK contain other creatures or mobs?",
      answer: "Yes. New mobs have been added with updates to the game, adding more things to discover in the game world."
    },
    {
      question: "Does Lovely Craft APK have in-game achievements?",
      answer: "Yes, Lovely Craft APK has achievements that players can unlock by completing tasks and goals in the game. But the exact achievements are not confirmed."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F5F9F1] flex flex-col">
      {/* Navbar Integration */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-[800px] w-full mx-auto px-4 py-12 md:py-16">
        
        {/* Page Header */}
        <div className="mb-10 text-left">
          <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-[var(--font-display)] font-extrabold text-[#15251B] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-[var(--font-body)] text-base md:text-lg text-[#51655A] leading-relaxed">
            Got questions about Lovely Craft APK? Find clear answers regarding characters, mobs, and game achievements below.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="flex flex-col gap-4">
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-[#DCE8D6] shadow-[0_2px_8px_rgba(21,37,27,0.03)] transition-all"
              >
                {/* Accordion Header / Toggle */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer bg-white hover:bg-[#F5F9F1] transition-colors border-0"
                  aria-expanded={isOpen}
                >
                  <h2 className="font-[var(--font-display)] font-bold text-base md:text-lg text-[#15251B] m-0 flex items-center gap-3">
                    <span className="text-[#23891A] font-pixel text-sm shrink-0">#0{index + 1}</span>
                    <span>{faq.question}</span>
                  </h2>

                  {/* Toggle Icon (+ / -) */}
                  <span className="w-7 h-7 shrink-0 rounded-none bg-[#E5F5DC] text-[#15251B] border border-[#23891A]/30 flex items-center justify-center font-bold text-lg">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#DCE8D6] bg-white">
                    <p className="font-[var(--font-body)] text-sm md:text-base text-[#51655A] leading-relaxed m-0 pl-7 border-l-2 border-[#7BE23C]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </main>

     <Footer />
    </div>
  );
}