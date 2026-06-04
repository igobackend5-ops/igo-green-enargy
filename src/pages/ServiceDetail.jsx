import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TbSun, TbWind, TbLeaf, TbArrowLeft, TbCheck, TbChevronRight } from 'react-icons/tb';

const serviceData = {
  solar: {
    bgImage: '/images/solar-bg.png',
    accent: '#0F6E56',
    name: 'Solar Energy',
    tagline: "Clean solar power built for Tamil Nadu's farms and open land.",
    stats: ['500+ Acres Powered', '30% Average Cost Reduction'],
    icon: TbSun,
    whatWeOffer: [
      { title: 'Agri-Solar Panels', desc: 'Dual-use panels mounted above crops, generating power while providing partial shade that reduces water evaporation.' },
      { title: 'Solar Fencing', desc: 'Electric perimeter fencing powered entirely by solar, protecting crops from wildlife with zero grid dependency.' },
      { title: 'Irrigation Pumping', desc: 'Solar-powered pump systems replacing diesel pumps, cutting irrigation costs by up to 70% for smallholder farmers.' },
      { title: 'On-Farm Power', desc: 'Full rooftop or ground-mount systems generating power for farm operations, cold storage, and residential use on-site.' }
    ],
    howItWorks: [
      { title: 'Site Survey' },
      { title: 'Custom Design' },
      { title: 'Installation' },
      { title: 'Handover & Support' }
    ],
    audiences: [
      { 
        type: 'For Farmers', 
        intro: 'Benefits tailored for agricultural needs:',
        points: [
          'Bill eliminated for farming',
          'Earn through net metering by selling surplus power',
          'Zero grid dependency for remote fields'
        ]
      },
      { 
        type: 'For Investors', 
        intro: 'High-yield opportunities on verified land:',
        points: [
          'High IRR and structured returns',
          'Subsidies for clean energy projects',
          '25-year guaranteed asset lifespan'
        ]
      }
    ],
    benefits: ['₹0 Fuel Cost', '25 Year Panel Life', '70% Bill Reduction', '5 Yr Support']
  },
  wind: {
    bgImage: '/images/wind-bg.png',
    accent: '#085041',
    name: 'Wind Energy',
    tagline: 'Small and medium wind turbines for open farmland and coastal estates.',
    stats: ['2–50 kW Turbine Range', 'Coastal & Inland Deployment'],
    icon: TbWind,
    whatWeOffer: [
      { title: 'Small Wind Turbines', desc: 'Compact turbines ideal for individual farms, powering irrigation, lighting, and cold storage off-grid.' },
      { title: 'Medium Wind Turbines', desc: 'Higher-output systems for large estates, agro-processing units, and multi-farm cooperatives.' },
      { title: 'Coastal Wind Systems', desc: 'Turbines rated for high wind speed and salt-air environments along Tamil Nadu\'s coastline.' },
      { title: 'Hybrid Wind+Solar', desc: 'Combined wind and solar systems with battery storage ensuring 24/7 power regardless of weather.' }
    ],
    howItWorks: [
      { title: 'Wind Assessment' },
      { title: 'Turbine Selection' },
      { title: 'Civil & Electrical' },
      { title: 'Commissioning' }
    ],
    audiences: [
      { 
        type: 'For Farmers', 
        intro: 'Perfect for coastal and open areas:',
        points: [
          'Supplements solar during rainy seasons',
          '24/7 power generation potential',
          'Minimal land footprint required'
        ]
      },
      { 
        type: 'For Investors', 
        intro: 'Structured wind asset investments:',
        points: [
          'Accelerated depreciation benefits',
          'Renewable Energy Certificates (RECs)',
          'Long-term stable power generation'
        ]
      }
    ],
    benefits: ['24/7 Generation', 'Salt-Air Rated', '15% Tax Benefit', '20 Yr Lifespan']
  },
  biogas: {
    bgImage: '/images/biogas-bg.png',
    accent: '#0F6E56',
    name: 'Biogas',
    tagline: 'Turning farm waste into clean fuel and electricity — nothing wasted.',
    stats: ['1 Cow = 1.5 m³ Gas/Day', '60–70% Methane Content'],
    icon: TbLeaf,
    whatWeOffer: [
      { title: 'Livestock Waste', desc: 'Biogas plants fed by cattle, goat, or poultry dung. Generates enough gas for full household cooking.' },
      { title: 'Crop Residue', desc: 'Paddy straw, sugarcane bagasse, and coconut shells converted to biogas, eliminating stubble burning.' },
      { title: 'Power Generation', desc: 'Biogas fed into a generator set producing electricity for farm operations and rural microgrids.' },
      { title: 'Bio-Slurry Fertiliser', desc: 'The digester by-product is nutrient-rich organic fertiliser, replacing chemical fertilisers.' }
    ],
    howItWorks: [
      { title: 'Waste Audit' },
      { title: 'Digester Install' },
      { title: 'Pipeline Setup' },
      { title: 'Training & Use' }
    ],
    audiences: [
      { 
        type: 'For Farmers', 
        intro: 'Turn daily waste into value:',
        points: [
          'Free cooking fuel for household',
          'Produces rich organic fertiliser',
          'Eliminates waste disposal issues'
        ]
      },
      { 
        type: 'For Investors', 
        intro: 'Subsidized green projects:',
        points: [
          '25–40% capital subsidy from govt',
          'Scalable to commercial bio-CNG',
          'Contributes to circular economy'
        ]
      }
    ],
    benefits: ['Free Cooking Fuel', '40% Govt Subsidy', 'Organic Fertiliser', 'Zero Waste']
  }
};

export default function ServiceDetail() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const data = serviceData[type];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!data) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center p-8 bg-black text-center text-white">
        <h1 className="text-2xl font-serif text-white mb-4">Service Not Found</h1>
        <button 
          onClick={() => navigate('/')} 
          className="text-brandGreen font-medium hover:underline inline-flex items-center gap-2"
        >
          <TbArrowLeft /> Return to Home
        </button>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="flex-grow flex flex-col relative bg-black">
      
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-gradient-to-b from-black/40 via-black/70 to-green-950/95"
      />

      {/* Back Button Bar */}
      <div className="w-full bg-black relative z-40 border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 font-sans text-[13px] font-medium text-white hover:text-brandGreen transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            <TbArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full pb-32">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center pt-24 pb-16 px-4">
          <div 
            className="w-[64px] h-[64px] rounded-2xl flex items-center justify-center text-black mb-6 shadow-md"
            style={{ backgroundColor: data.accent }}
          >
            <Icon className="w-8 h-8" />
          </div>
          
          <h1 
            className="font-serif text-5xl sm:text-[64px] font-semibold mb-4 leading-tight drop-shadow-md"
            style={{ color: data.accent }}
          >
            {data.name}
          </h1>
          
          <p 
            className="font-sans text-[18px] max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md"
            style={{ color: data.accent }}
          >
            {data.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {data.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg text-sm font-sans font-medium text-darkGreen"
              >
                {stat}
              </div>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-24 mt-8">
          
          {/* 1. What we offer */}
          <section>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mb-12 text-center drop-shadow-md">
              What we offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.whatWeOffer.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-2xl flex flex-col hover:-translate-y-1 transition-transform">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-5 shadow-sm"
                    style={{ backgroundColor: data.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-[18px] text-black font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[14px] text-black/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. How it works */}
          <section>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mb-12 text-center drop-shadow-md">
              How it Works
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {data.howItWorks.map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center gap-4">
                  <div className="bg-white px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-3 hover:-translate-y-1 transition-transform border border-green-900/10">
                    <span className="font-sans text-xl font-medium text-black/60">{idx + 1}.</span>
                    <span className="font-sans text-[16px] font-medium text-black whitespace-nowrap">{step.title}</span>
                  </div>
                  {idx < data.howItWorks.length - 1 && (
                    <TbChevronRight className="text-white w-8 h-8 hidden md:block opacity-80" />
                  )}
                  {/* Show down arrow on mobile */}
                  {idx < data.howItWorks.length - 1 && (
                    <TbChevronRight className="text-white w-8 h-8 block md:hidden opacity-80 rotate-90" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 3. Who is this for */}
          <section>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mb-12 text-center drop-shadow-md">
              Who is this for
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.audiences.map((audience, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-shadow border border-green-900/10">
                  <h3 className="font-serif text-[28px] text-black font-semibold mb-4">
                    {audience.type}
                  </h3>
                  <p className="font-sans text-[15px] text-black/70 mb-8">
                    {audience.intro}
                  </p>
                  <ul className="space-y-4">
                    {audience.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <TbCheck className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: data.accent }} />
                        <span className="font-sans text-[15px] text-black">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Benefits at a Glance */}
          <section>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mb-12 text-center drop-shadow-md">
              Benefits at a Glance
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {data.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-full py-4 px-10 shadow-2xl font-sans text-[16px] font-medium text-black text-center hover:-translate-y-1 transition-transform border border-green-900/10">
                  {benefit}
                </div>
              ))}
            </div>
          </section>
          
          {/* 5. Ready to Explore */}
          <section className="text-center max-w-3xl mx-auto pt-8">
            <h2 className="font-serif text-3xl sm:text-[40px] text-white font-semibold mb-6 drop-shadow-md">
              Ready to Explore
            </h2>
            <p className="font-sans text-[17px] text-white/90 mb-10 leading-relaxed drop-shadow-md">
              Clean power powered by modern technology, expert installation, and
              providing frameworks to serve those help farmers and investors.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex bg-white text-black font-sans font-semibold px-10 py-4 rounded-full hover:bg-brandGreen hover:text-white transition-colors shadow-2xl text-[16px] cursor-pointer border-none"
            >
              Request a Proposal Today
            </button>
          </section>

        </div>
      </div>

      {/* Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-black rounded-3xl p-8 max-w-md w-full shadow-2xl relative border border-white/10">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-5 text-white/70 hover:text-white bg-transparent border-none text-3xl cursor-pointer"
            >
              &times;
            </button>
            <h3 className="font-serif text-2xl text-white mb-6">
              Inquire about {data.name}
            </h3>
            <form 
              className="flex flex-col gap-4" 
              onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);
                const name = formData.get('name') || '-';
                const phone = formData.get('phone') || '-';
                const location = formData.get('location') || '-';
                const landSize = formData.get('landSize') || '-';

                const message = encodeURIComponent([
                  `Service inquiry: ${data.name}`,
                  `Name: ${name}`,
                  `Phone: ${phone}`,
                  `Location: ${location}`,
                  `Land size: ${landSize} acres`,
                ].join('\n'));

                window.open(
                  `https://wa.me/917397789803?text=${message}`,
                  '_blank',
                  'noopener,noreferrer'
                );

                setIsModalOpen(false);
              }}
            >
              <input name="name" type="text" placeholder="Full Name" required className="px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/50 font-sans text-[15px] outline-none" />
              <input name="phone" type="tel" placeholder="10-digit mobile number" pattern="[0-9]{10}" required className="px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/50 font-sans text-[15px] outline-none" />
              <input name="location" type="text" placeholder="Location / District" required className="px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/50 font-sans text-[15px] outline-none" />
              <input name="landSize" type="number" placeholder="Land size in acres" required className="px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/50 font-sans text-[15px] outline-none" />
              <button 
                type="submit" 
                className="mt-4 py-4 rounded-xl font-sans font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer border-none text-[16px]" 
                style={{ backgroundColor: data.accent }}
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
