import { TbSun, TbWind, TbLeaf } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const cards = [
    {
      title: "Solar Energy",
      description: "Agri-solar panels, solar fencing, irrigation pumping, and on-farm power generation tailored for Tamil Nadu's climate.",
      badge: "Solar",
      accentClass: "bg-brandGreen",
      textClass: "text-brandGreen",
      bgClass: "bg-brandGreen/10",
      borderHover: "hover:border-brandGreen",
      icon: TbSun
    },
    {
      title: "Wind Energy",
      description: "Small and medium wind turbines optimised for open farmland and coastal estates across the region.",
      badge: "Wind",
      accentClass: "bg-darkGreen",
      textClass: "text-white",
      bgClass: "bg-white/10",
      borderHover: "hover:border-white",
      icon: TbWind
    },
    {
      title: "Biogas",
      description: "Farm waste to energy — converting crop residue, animal dung, and organic matter into clean fuel and electricity.",
      badge: "Biogas",
      accentClass: "bg-brandGreen",
      textClass: "text-brandGreen",
      bgClass: "bg-brandGreen/10",
      borderHover: "hover:border-brandGreen",
      icon: TbLeaf
    }
  ];

  return (
    <section id="solutions" className="w-full bg-transparent py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headers */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-3 drop-shadow-lg">
            Our Energy Solutions
          </h2>
          <p className="text-sm sm:text-base text-white/90 font-sans font-medium drop-shadow-sm">
            Three proven technologies. One integrated approach.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                to={`/service/${card.badge.toLowerCase()}`}
                key={idx}
                className={`bg-black/40 backdrop-blur-md border border-white/20 rounded-[12px] overflow-hidden text-left transition-all duration-300 block cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:bg-black/60 ${card.borderHover}`}
              >
                {/* Top colored bar: 3px height */}
                <div className={`w-full h-[3px] ${card.accentClass}`} />
                
                {/* Card Content body */}
                <div className="p-6 flex flex-col h-full">
                  
                  {/* Icon in 40x40px rounded square */}
                  <div className={`w-10 h-10 rounded-[8px] flex items-center justify-center text-black ${card.accentClass} shadow-sm`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[18px] text-white font-semibold mt-4 mb-2 drop-shadow-sm">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[13.5px] text-white/90 font-medium leading-relaxed mb-6 flex-grow">
                    {card.description}
                  </p>

                  {/* Bottom badge */}
                  <div className="mt-auto">
                    <span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-sans font-medium tracking-wide ${card.bgClass} ${card.textClass}`}>
                      {card.badge}
                    </span>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
