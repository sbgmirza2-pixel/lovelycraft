export default function HowToPlay() {
  return (
    <section className="py-12 bg-white border-b border-[#DCE8D6]" id="how-to-play">
      <div className="max-w-[1120px] mx-auto px-4 flex flex-col gap-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-[var(--font-display)] font-extrabold text-[#15251B] m-0">
          How to play Lovely Craft APK on Windows or PC
        </h2>

        <p className="font-[var(--font-body)] text-[#51655A] text-sm md:text-base m-0 leading-relaxed">
          Below are some tips to play Lovely Craft on Windows or PC:
        </p>

        {/* Grid Layout for Windows & PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Windows Version Card */}
          <div className="bg-white border border-[#DCE8D6] p-6 md:p-8 rounded-none shadow-[2px_2px_0_rgba(21,37,27,0.04)]">
            <h3 className="font-[var(--font-display)] text-lg md:text-xl font-bold text-[#23891A] mb-4 uppercase tracking-wide">
              Play Lovely Craft on Windows
            </h3>
            <ul className="list-disc list-inside m-0 p-0 flex flex-col gap-2.5">
              <li className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                Go to the official Lovely Craft game page.
              </li>
              <li className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                Download Windows version.
              </li>
              <li className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                Click the file and choose Extract All.
              </li>
              <li className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                Open the folder.
              </li>
              <li className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                Find the game’s <code className="bg-[#F5F9F1] px-1.5 py-0.5 text-xs font-mono text-[#23891A]">.exe</code> file.
              </li>
              <li className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                Double-click it to start playing.
              </li>
            </ul>
          </div>

          {/* PC / Emulator Version Card */}
          <div className="bg-white border border-[#DCE8D6] p-6 md:p-8 rounded-none shadow-[2px_2px_0_rgba(21,37,27,0.04)]">
            <h3 className="font-[var(--font-display)] text-lg md:text-xl font-bold text-[#23891A] mb-4 uppercase tracking-wide">
              Play Lovely Craft APK on PC
            </h3>
            <ul className="list-disc list-inside m-0 p-0 flex flex-col gap-2.5">
              <li className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                Install an Android emulator like BlueStacks.
              </li>
              <li className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                Download the Lovely Craft app from a reliable source.
              </li>
              <li className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                Run the emulator on your PC.
              </li>
              <li className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                Install the APK (if available).
              </li>
              <li className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                Choose the downloaded APK file.
              </li>
              <li className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                Wait till installation is complete.
              </li>
              <li className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                Open the Lovely Craft emulator and enjoy the game.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}