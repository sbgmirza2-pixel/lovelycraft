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
      question: "Does Lovely Craft Piston Trap have in-game achievements?",
      answer: "Yes, Lovely Craft APK has achievements that players can unlock by completing tasks and goals in the game. But the exact achievements are not confirmed."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#DCE8D6]" id="faq">
      <div className="max-w-[1120px] mx-auto px-4">
        
        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-[var(--font-display)] text-xs font-extrabold uppercase tracking-widest text-[#23891A]">
              Help & Support
            </span>
            <h2 className="text-2xl md:text-3xl font-[var(--font-display)] font-extrabold text-[#15251B] m-0 leading-tight">
              Frequently Asked Questions
            </h2>
           
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-8 flex flex-col gap-3.5">
            {faqList.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`bg-white border transition-all duration-200 ${
                    isOpen ? 'border-[#23891A] bg-[#F9FCF6]' : 'border-[#DCE8D6] hover:border-[#23891A]/50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 cursor-pointer select-none bg-transparent border-0"
                  >
                    <span className="font-[var(--font-display)] font-bold text-base md:text-lg text-[#15251B]">
                      {item.question}
                    </span>
                    
                    <span 
                      className={`w-7 h-7 flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                        isOpen 
                          ? 'bg-[#23891A] text-white' 
                          : 'bg-[#F5F9F1] text-[#23891A]'
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 md:px-5 md:pb-5 font-[var(--font-body)] text-[#51655A] text-sm md:text-base leading-relaxed border-t border-[#DCE8D6]/60 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}