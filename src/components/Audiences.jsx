import { TbPlant, TbTrendingUp, TbBuilding } from 'react-icons/tb';

export default function Audiences() {
  const whatsappUrl = "https://wa.me/917397789803?text=Hi%2C+I'm+interested+in+IGO+Green+Energies";

  return (
    <section className="w-full bg-transparent py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-4 drop-shadow-lg">
            Who We Serve
          </h2>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Farmers & Landowners */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[12px] p-6 text-left flex flex-col justify-between hover:shadow-xl transition-shadow hover:bg-white/20">
            <div>
              <div className="text-white mb-4 drop-shadow-sm">
                <TbPlant className="w-[24px] h-[24px]" />
              </div>
              <h3 className="font-serif text-[18px] text-white font-semibold mb-3 drop-shadow-sm">
                Farmers & Landowners
              </h3>
              <p className="font-sans text-[14px] text-white/90 font-medium leading-relaxed mb-6">
                Reduce your input costs, earn from clean energy, and modernise your farm operations with zero-upfront models.
              </p>
            </div>
            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-white font-sans font-semibold text-[14px] hover:text-white/80 transition-colors drop-shadow-sm"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* Card 2: Investors & JV Partners (id="investors") */}
          <div
            id="investors"
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[12px] p-6 text-left flex flex-col justify-between hover:shadow-xl transition-shadow scroll-mt-24 hover:bg-white/20"
          >
            <div>
              <div className="text-white mb-4 drop-shadow-sm">
                <TbTrendingUp className="w-[24px] h-[24px]" />
              </div>
              <h3 className="font-serif text-[18px] text-white font-semibold mb-3 drop-shadow-sm">
                Investors & JV Partners
              </h3>
              <p className="font-sans text-[14px] text-white/90 font-medium leading-relaxed mb-6">
                High-ROI renewable energy projects on verified farmland. Joint venture and franchise models with structured returns.
              </p>
            </div>
            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-white font-sans font-semibold text-[14px] hover:text-white/80 transition-colors drop-shadow-sm"
              >
                Investor deck →
              </a>
            </div>
          </div>

          {/* Card 3: Government & Policy (id="government") */}
          <div
            id="government"
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[12px] p-6 text-left flex flex-col justify-between hover:shadow-xl transition-shadow scroll-mt-24 hover:bg-white/20"
          >
            <div>
              <div className="text-white mb-4 drop-shadow-sm">
                <TbBuilding className="w-[24px] h-[24px]" />
              </div>
              <h3 className="font-serif text-[18px] text-white font-semibold mb-3 drop-shadow-sm">
                Government & Policy
              </h3>
              <p className="font-sans text-[14px] text-white/90 font-medium leading-relaxed mb-6">
                Aligned with Tamil Nadu's 2030 agritech roadmap. Your implementation partner for subsidy-linked green programmes.
              </p>
            </div>
            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-white font-sans font-semibold text-[14px] hover:text-white/80 transition-colors drop-shadow-sm"
              >
                Policy alignment →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
