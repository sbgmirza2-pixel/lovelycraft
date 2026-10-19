'use client';

import { useState } from 'react';

export default function FaqsAccordion({ faqsList }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {faqsList.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-white border border-[#23891A]/30 shadow-[0_0_15px_rgba(35,137,26,0.1)] transition-all rounded-none"
          >
            {/* Accordion Header / Toggle */}
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer bg-white hover:bg-[#F5F9F1] transition-colors border-0"
              aria-expanded={isOpen}
            >
              <h3 className="font-[var(--font-display)] font-bold text-base md:text-lg text-[#15251B] m-0 flex items-center gap-3">
                <span className="text-[#23891A] font-bold text-sm shrink-0">#0{index + 1}</span>
                <span>{faq.question}</span>
              </h3>

              {/* Toggle Icon (+ / -) */}
              <span className="w-7 h-7 shrink-0 rounded-none bg-[#E5F5DC] text-[#15251B] border border-[#23891A]/30 flex items-center justify-center font-bold text-lg">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {/* Accordion Content */}
            {isOpen && (
              <div className="px-5 pb-5 pt-2 border-t border-[#DCE8D6] bg-white">
                <p className="font-[var(--font-body)] text-sm md:text-base text-[#51655A] leading-relaxed m-0 pl-4 border-l-2 border-[#23891A]">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}