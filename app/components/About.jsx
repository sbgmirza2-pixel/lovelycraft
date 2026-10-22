export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-white border-b border-[#DCE8D6]" >
      <div className="max-w-[1120px] mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Section Heading */}
        <div className="md:col-span-5 flex flex-col gap-3.5">
          <span className="font-[var(--font-pixel)] text-[0.8rem] uppercase tracking-[0.14em] text-[#B91FCC] inline-flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-[#7BE23C] shadow-[3px_3px_0_#F9E6FC] inline-block"></span>
            About the game
          </span>
          <h2 className="text-[clamp(1.75rem,3.6vw,2.4rem)] font-[var(--font-display)] font-bold text-[#15251B] m-0 leading-tight">
            What is Lovely Craft Piston Trap?
          </h2>
        </div>

        {/* Content Paragraphs */}
        <div className="md:col-span-7 flex flex-col gap-4">
          <p className="font-[var(--font-body)] text-[#51655A] text-base md:text-lg leading-relaxed m-0">
            Lovely Craft Piston Trap is a sandbox experience where you can construct blocks and interact with pistons. Players can play around various mechanisms within a colorful 3D world.
          </p>
          
          <p className="font-[var(--font-body)] text-[#51655A] text-base md:text-lg leading-relaxed m-0">
            The game has multiple features such as Creative building, Piston-based mechanisms, Resource gathering, Character customization, Exploration, Collectibles, achievements, and Voxel-style graphics. Game updates can add new characters, mobs, cosmetic items, achievements, and more content through updates.
          </p>
        </div>

      </div>
    </section>
  );
}