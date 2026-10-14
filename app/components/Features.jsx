export default function Features() {
  const featuresList = [
    {
      title: "Piston-based building and mechanics",
      desc: "Lovely Craft is a game about the mechanics of pistons. It is not a usual sandbox game. Players can replace blocks and add new mechanisms, so building is more interactive and structures are never fixed. You can play with different layouts and change the designs to see how things work in the game environment."
    },
    {
      title: "Voxel-style world and graphics",
      desc: "Lovely Craft APK has a voxel-style look that suits anyone who loves voxel games. There are many rooms to explore and build. The box design is kept simple to focus on gameplay and building mechanics, so players can easily understand the world and interact with different objects."
    },
    {
      title: "Character and cosmetic customization",
      desc: "Players can play with different characters, clothes, backgrounds, and cosmetics. The official version 0.2.999 update adds new mobs, cosmetic items, backgrounds, and achievements, which gives players more options to customize the game."
    },
    {
      title: "Exploration and resource harvesting",
      desc: "This game is not only about building mechanisms. Players can explore the environment and collect resources to craft things and move forward. Third-party sources also mention traders and collectible items, which makes the game different from a traditional building simulator."
    },
    {
      title: "Offline gameplay",
      desc: "Some third-party websites mention Lovely Craft APK offline. If you want to play without an internet connection, you will need offline support. Don't expect every version of Lovely Craft to have the same features, and always check the version information when you install."
    },
    {
      title: "Android version requirements vary",
      desc: "The system requirements are not the same on every website. For example, one site lists Android 6.0+ and another lists Android 5.1+. Check your device's Android version to avoid installation or compatibility issues."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F5F9F1] border-b border-[#DCE8D6]" id="features">
      <div className="max-w-[1120px] mx-auto px-4">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-10 text-center md:text-left">
          <span className="font-[var(--font-pixel)] text-[0.8rem] uppercase tracking-[0.14em] text-[#B91FCC] inline-flex items-center gap-2.5 justify-center md:justify-start">
            <span className="w-2.5 h-2.5 bg-[#7BE23C] shadow-[3px_3px_0_#F9E6FC] inline-block"></span>
            Features
          </span>
          <h2 className="text-[clamp(1.75rem,3.6vw,2.4rem)] font-[var(--font-display)] font-bold text-[#15251B] m-0">
            Key features of Lovely Craft APK
          </h2>
          <p className="font-[var(--font-body)] text-[#51655A] text-base m-0">
            Here are some features you should know if you are thinking of trying Lovely Craft APK.
          </p>
        </div>

        {/* Features Grid Layout matching reference style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="border-t border-[#DCE8D6] pt-6 pb-2 flex flex-col gap-2.5"
            >
              <h3 className="flex items-center gap-3 font-[var(--font-display)] font-bold text-lg text-[#15251B]">
                <span className="w-3 h-3 bg-[#7BE23C] shadow-[4px_4px_0_#F9E6FC] shrink-0 inline-block"></span>
                {feature.title}
              </h3>
              <p className="font-[var(--font-body)] text-[#51655A] text-base leading-relaxed m-0">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}