export default function MinistryStrip() {
  const departments = [
    "Agriculture",
    "Animal Husbandry",
    "Dairy Development",
    "Fisheries",
    "Forest Department"
  ];

  return (
    <section id="projects" className="w-full bg-white/10 backdrop-blur-md border-y border-white/20 py-4 lg:py-0 lg:h-20 flex items-center scroll-mt-20 relative z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-8">
          
          {/* Left Label */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <span className="font-sans text-[11px] text-white/80 uppercase tracking-widest font-semibold drop-shadow-sm">
              GOVERNMENT ALIGNMENT — 5 MINISTRY ECOSYSTEM
            </span>
          </div>

          {/* Badges row */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {departments.map((dept, idx) => (
              <span
                key={idx}
                className="inline-block border border-white/40 text-white font-sans text-[12px] font-medium rounded-full px-3 py-1 bg-white/10 shadow-sm backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                {dept}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
