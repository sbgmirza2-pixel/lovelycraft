export default function Checklist() {
  const checklistData = [
    {
      check: "Android version",
      why: "Check that your phone supports the required version."
    },
    {
      check: "APK version",
      why: "Compare the file's version with the developer's published release."
    },
    {
      check: "Storage space",
      why: "Make sure your device has enough free space for the Lovely Craft APK."
    },
    {
      check: "Permissions",
      why: "Review the permissions before installation."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F5F9F1] border-b border-[#DCE8D6]" id="checklist">
      <div className="max-w-[1120px] mx-auto px-4">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#7BE23C] inline-block"></span>
            <span className="font-pixel text-[0.8rem] uppercase tracking-[0.14em] font-bold text-[#B91FCC]">
              BEFORE YOU INSTALL
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.2vw,2.5rem)] font-[var(--font-display)] font-extrabold text-[#15251B] m-0 max-w-2xl leading-[1.2]">
            A practical checklist for installing Lovely Craft
          </h2>
        </div>

        {/* Table Card Container */}
        <div className="bg-white border border-[#DCE8D6] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)] max-w-4xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#E8F7DC] border-b border-[#DCE8D6]">
                  <th className="py-4 px-6 font-pixel text-xs uppercase tracking-wider text-[#51655A] font-bold w-1/3">
                    WHAT TO CHECK
                  </th>
                  <th className="py-4 px-6 font-pixel text-xs uppercase tracking-wider text-[#51655A] font-bold w-2/3">
                    WHY IT IS IMPORTANT
                  </th>
                </tr>
              </thead>
              <tbody>
                {checklistData.map((row, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-[#E8F3E2] last:border-b-0 hover:bg-[#F9FCF7] transition-colors"
                  >
                    <td className="py-5 px-6 font-[var(--font-display)] font-bold text-[#15251B] text-base align-middle">
                      {row.check}
                    </td>
                    <td className="py-5 px-6 font-[var(--font-body)] text-[#51655A] text-base leading-relaxed align-middle">
                      {row.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}