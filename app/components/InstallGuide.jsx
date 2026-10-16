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
    <section id="install" className="py-14 bg-white border-b border-[#DCE8D6]">
      <div className="max-w-[1120px] mx-auto px-4 flex flex-col gap-10">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-2xl md:text-3xl font-[var(--font-display)] font-bold text-[#15251B] m-0">
            How to Install Lovely Craft APK on Android
          </h2>
          <p className="font-[var(--font-body)] text-[#51655A] text-sm md:text-base m-0">
            If you are installing a Lovely Craft APK file, follow the basic steps:
          </p>
        </div>

        {/* Modern Steps Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stepsList.map((step, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#DCE8D6] p-5 flex items-start gap-4 shadow-sm hover:border-[#23891A] transition-colors"
            >
              <span className="w-8 h-8 bg-[#23891A] text-white font-[var(--font-display)] font-bold text-sm flex items-center justify-center shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base font-medium m-0 leading-relaxed self-center">
                {step}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}