export default function AppInfo() {
  const appData = [
    { label: "App Name", value: "Lovely Craft Piston Trap" },
    { label: "Developer", value: "Crime" },
    { label: "Version", value: "V0.2.999" },
    { label: "File Size", value: "1500 MB" },
    { label: "Requires", value: "Android 5.0+" },
    { label: "Platforms", value: "Android, Windows, Linux" },
    { label: "Last Update", value: "August 9, 2026" },
    { label: "Age", value: "18+" },
  ];

  return (
    <section className="bg-[#F5F9F1] border-b border-[#DCE8D6] py-8 md:py-12">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
          {appData.map((item, index) => (
            <div key={index} className="flex items-stretch gap-3">
              {/* Left Green Accent Bar */}
              <div className="w-[3px] bg-[#7BE23C] shrink-0"></div>
              
              <div className="flex flex-col justify-center">
                <span className="font-[var(--font-pixel)] text-[0.7rem] uppercase tracking-wider text-[#51655A]">
                  {item.label}
                </span>
                <span className="font-[var(--font-body)] text-base md:text-lg font-extrabold text-[#15251B] mt-0.5">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}