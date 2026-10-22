export default function Conclusion() {
  return (
    <section className="py-10 md:py-14 bg-white border-b border-[#DCE8D6]" id="conclusion">
      <div className="max-w-[1120px] mx-auto px-4">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-8 text-center md:text-left">
          <span className="font-[var(--font-pixel)] text-[0.8rem] uppercase tracking-[0.14em] text-[#B91FCC] inline-flex items-center gap-2.5 justify-center md:justify-start">
            <span className="w-2.5 h-2.5 bg-[#7BE23C] shadow-[3px_3px_0_#F9E6FC] inline-block"></span>
            Summary
          </span>
          <h2 className="text-[clamp(1.4rem,2.8vw,2.2rem)] font-[var(--font-display)] font-bold text-[#15251B] m-0">
            Conclusion
          </h2>
        </div>

        {/* Conclusion Card */}
        <div className="bg-[#F5F9F1] border border-[#DCE8D6] shadow-[2px_2px_0_rgba(21,37,27,0.08)] p-6 md:p-8 rounded-none max-w-3xl flex flex-col gap-4">
          <p className="font-[var(--font-body)] text-[#15251B] text-base leading-relaxed m-0">
            Lovely Craft Piston Trap is a sandbox game that provides players with the freedom to create, explore, and experiment with different things. It does not offer a set style of gameplay, but allows players to play the game in their own way.
          </p>
          <p className="font-[var(--font-body)] text-[#51655A] text-base leading-relaxed m-0">
            It is more varied than a typical block-building game, due to the combination of building, customization, exploration, and the variety in the game mechanics. Lovely Craft might be interesting for those who like to try out new ideas and enjoy creative games.
          </p>
        </div>

      </div>
    </section>
  );
}