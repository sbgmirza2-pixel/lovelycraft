export default function HowToPlay() {
  const windowsSteps = [
    "Go to the official Lovely Craft game page.",
    "Download Windows version.",
    "Click the file and choose Extract All.",
    "Open the folder.",
    "Find the game’s .exe file.",
    "Double-click it to start playing."
  ];

  const pcSteps = [
    "Install an Android emulator like BlueStacks.",
    "Download the Lovely Craft app from a reliable source.",
    "Run the emulator on your PC.",
    "Install the APK (if available).",
    "Choose the downloaded APK file.",
    "Wait till installation is complete.",
    "Open the Lovely Craft emulator and enjoy the game."
  ];

  return (
    <section className="py-16 bg-white border-b border-[#DCE8D6]" id="how-to-play">
      <div className="max-w-[1120px] mx-auto px-4 flex flex-col gap-10">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#23891A] inline-block rounded-none"></span>
            <span className="font-[var(--font-display)] text-xs md:text-sm font-bold tracking-wider text-[#23891A] uppercase">
              GAMEPLAY GUIDE
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-[var(--font-display)] font-extrabold text-[#15251B] m-0">
            How to play Lovely Craft APK on Windows or PC
          </h2>
          <p className="font-[var(--font-body)] text-[#51655A] text-sm md:text-base m-0">
            Below are some tips to play Lovely Craft on Windows or PC:
          </p>
        </div>

        {/* Without Box Stacked Layout */}
        <div className="flex flex-col gap-10">
          
          {/* Windows Version */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[var(--font-display)] text-lg md:text-xl font-bold text-[#15251B] uppercase tracking-wide border-b border-[#DCE8D6] pb-2 m-0">
              Play Lovely Craft on Windows
            </h3>
            
            <ul className="list-disc list-inside m-0 p-0 flex flex-col gap-2.5">
              {windowsSteps.map((step, index) => (
                <li key={index} className="font-[var(--font-body)] text-[#51655A] text-sm md:text-base">
                  {step.includes('.exe') ? (
                    <>
                      Find the game’s <code className="bg-[#F5F9F1] px-1.5 py-0.5 text-xs font-mono text-[#23891A] border border-[#DCE8D6]">.exe</code> file.
                    </>
                  ) : (
                    step
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* PC / Emulator Version */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[var(--font-display)] text-lg md:text-xl font-bold text-[#15251B] uppercase tracking-wide border-b border-[#DCE8D6] pb-2 m-0">
              Play Lovely Craft APK on PC
            </h3>
            
            <ul className="list-disc list-inside m-0 p-0 flex flex-col gap-2.5">
              {pcSteps.map((step, index) => (
                <li key={index} className="font-[var(--font-body)] text-[#51655A] text-sm md:text-base">
                  {step.includes('BlueStacks') ? (
                    <>
                      Install an Android emulator like{' '}
                      <a 
                        href="https://www.bluestacks.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#23891A] font-bold underline hover:text-[#1A6D13] transition-colors"
                      >
                        BlueStacks
                      </a>.
                    </>
                  ) : (
                    step
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}