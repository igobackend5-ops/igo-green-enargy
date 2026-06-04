export default function Hero() {
  return (
    <section id="about" className="relative w-full bg-transparent text-white pt-32 pb-20 scroll-mt-20 overflow-hidden">
      {/* Background ambient lighting effects removed as we have a real bg now */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 1. Eyebrow text */}
        <p className="text-[12px] font-sans font-medium uppercase tracking-widest text-white/80 mb-3 drop-shadow-md">
          Clean Energy for India's Farms
        </p>

        {/* 2. H1 Headline */}
        <h1 className="text-[32px] md:text-[48px] font-serif font-semibold text-white leading-tight max-w-4xl mx-auto mb-6 drop-shadow-lg">
          Powering agriculture with solar, wind & biogas
        </h1>

        {/* 3. Body text */}
        <p className="text-base text-white/90 font-sans font-medium max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          IGO Green Energies brings renewable energy solutions to Tamil Nadu's farms and estates. 
          We deploy solar, wind, and biogas systems that reduce costs and generate new income for landowners.
        </p>

        {/* 4. CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#solutions"
            className="w-full sm:w-auto bg-brandGreen hover:bg-white hover:text-black text-black px-8 py-3.5 rounded-full font-sans font-medium text-sm transition-all duration-300 shadow-xl hover:scale-[1.02] border-none"
          >
            Explore Solutions
          </a>
          <a
            href="#investors"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-darkGreen px-8 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 shadow-xl hover:scale-[1.02]"
          >
            Investor Relations
          </a>
        </div>

        {/* 5. Stat Blocks (3-column grid) */}
        <div className="grid grid-cols-3 divide-x divide-white/20 max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
          {/* Stat 1 */}
          <div className="px-2 text-center">
            <p className="font-serif text-3xl sm:text-[40px] font-bold text-white leading-none drop-shadow-md">
              500+
            </p>
            <p className="font-sans text-[10px] sm:text-[12px] text-white/80 font-medium uppercase tracking-wider mt-3">
              Acres powered across TN
            </p>
          </div>
          
          {/* Stat 2 */}
          <div className="px-2 text-center">
            <p className="font-serif text-3xl sm:text-[40px] font-bold text-white leading-none drop-shadow-md">
              3
            </p>
            <p className="font-sans text-[10px] sm:text-[12px] text-white/80 font-medium uppercase tracking-wider mt-3">
              Energy streams deployed
            </p>
          </div>

          {/* Stat 3 */}
          <div className="px-2 text-center">
            <p className="font-serif text-3xl sm:text-[40px] font-bold text-white leading-none drop-shadow-md">
              ₹12Cr+
            </p>
            <p className="font-sans text-[10px] sm:text-[12px] text-white/80 font-medium uppercase tracking-wider mt-3">
              Project value delivered
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
