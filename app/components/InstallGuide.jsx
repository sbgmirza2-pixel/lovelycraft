export default function InstallGuide() {
  const stepsList = [
    "Download the APK from an authentic source.",
    "Check the Android requirements and version.",
    "Check the downloaded file with your security software.",
    "If Android blocks the installation, then check the Install Unknown Apps permission in the device settings.",
    "Download the APK",
    "Start the game and verify that it plays properly"
  ];

  return (
    <section  id="install" className="py-10 md:py-14 bg-white border-b border-[#DCE8D6]">
      <div className="max-w-[1120px] mx-auto px-4">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-8 text-center md:text-left">
          <span className="font-[var(--font-pixel)] text-[0.8rem] uppercase tracking-[0.14em] text-[#B91FCC] inline-flex items-center gap-2.5 justify-center md:justify-start">
            <span className="w-2.5 h-2.5 bg-[#7BE23C] shadow-[3px_3px_0_#F9E6FC] inline-block"></span>
            Install guide
          </span>
          <h2 className="text-[clamp(1.4rem,2.8vw,2.2rem)] font-[var(--font-display)] font-bold text-[#15251B] m-0 whitespace-normal lg:whitespace-nowrap">
            How to Install Lovely Craft APK on Android
          </h2>
          <p className="font-[var(--font-body)] text-[#51655A] text-base m-0">
            If you are installing a Lovely Craft APK file, follow the basic steps:
          </p>
        </div>

        {/* Steps Card */}
        <div className="bg-[#F5F9F1] border border-[#DCE8D6] shadow-[2px_2px_0_rgba(21,37,27,0.08)] p-5 md:p-6 rounded-none">
          <ol className="list-none m-0 p-0 flex flex-col gap-3">
            {stepsList.map((step, index) => (
              <li key={index} className="flex items-start gap-3 py-1.5 border-b border-[#DCE8D6]/60 last:border-b-0">
                <span className="font-[var(--font-pixel)] text-base text-[#23891A] font-bold shrink-0 w-6">
                  0{index + 1}
                </span>
                <span className="font-[var(--font-body)] text-[#15251B] font-medium text-base leading-snug">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}