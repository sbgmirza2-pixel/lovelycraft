export default function Safety() {
  const precautionsList = [
    "Scan the file.",
    "Check for unusual behavior",
    "Protect Personal data",
    "Keep your device updated",
    "Remove unusual apps"
  ];

  return (
    <section id="safety" className="py-10 md:py-14 bg-white border-b border-[#DCE8D6]" >
      <div className="max-w-[1120px] mx-auto px-4">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-8 text-center md:text-left">
          <span className="font-[var(--font-pixel)] text-[0.8rem] uppercase tracking-[0.14em] text-[#B91FCC] inline-flex items-center gap-2.5 justify-center md:justify-start">
            <span className="w-2.5 h-2.5 bg-[#7BE23C] shadow-[3px_3px_0_#F9E6FC] inline-block"></span>
            Safety
          </span>
          <h2 className="text-[clamp(1.4rem,2.8vw,2.2rem)] font-[var(--font-display)] font-bold text-[#15251B] m-0">
            Is Lovely Craft APK Safe to Use?
          </h2>
          <p className="font-[var(--font-body)] text-[#51655A] text-base m-0 leading-relaxed max-w-3xl">
            The safety of Lovely Craft APK depends on the source where you are downloading the APK. APK files is safe to use, but sometimes unofficial copies can change the original version. Take these simple precautions before you start the game:
          </p>
        </div>

        {/* Precautions Card */}
        <div className="bg-[#F5F9F1] border border-[#DCE8D6] shadow-[2px_2px_0_rgba(21,37,27,0.08)] p-5 md:p-6 rounded-none max-w-3xl">
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {precautionsList.map((item, index) => (
              <li key={index} className="flex items-center gap-3 py-1.5 border-b border-[#DCE8D6]/60 last:border-b-0">
                <span className="w-2 h-2 bg-[#23891A] shrink-0 inline-block"></span>
                <span className="font-[var(--font-body)] text-[#15251B] font-medium text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}