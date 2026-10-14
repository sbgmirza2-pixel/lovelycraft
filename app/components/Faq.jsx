'use client';

import { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqList = [
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

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-12 md:py-16 bg-[#F5F9F1] border-b border-[#DCE8D6]" id="faq">
      <div className="max-w-[1120px] mx-auto px-4">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#7BE23C] inline-block"></span>
            <span className="font-pixel text-[0.8rem] uppercase tracking-[0.14em] font-bold text-[#B91FCC]">
              FAQS
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.2vw,2.5rem)] font-[var(--font-display)] font-extrabold text-[#15251B] m-0">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 max-w-3xl">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#8BD952] shadow-[0_4px_12px_rgba(35,137,26,0.06)]' : 'border-[#DCE8D6]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer select-none bg-transparent border-0"
                >
                  <span className="font-[var(--font-display)] font-bold text-base md:text-lg text-[#15251B]">
                    {item.question}
                  </span>
                  
                  {/* Plus / Minus Icon Badge */}
                  <span 
                    className={`w-7 h-7 flex items-center justify-center font-bold text-base shrink-0 rounded-lg transition-colors ${
                      isOpen 
                        ? 'bg-[#23891A] text-white' 
                        : 'bg-[#EBF7E3] text-[#23891A]'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 md:px-6 md:pb-6 font-[var(--font-body)] text-[#51655A] text-base leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}