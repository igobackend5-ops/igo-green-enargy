import Hero from '../components/Hero';
import MinistryStrip from '../components/MinistryStrip';
import Solutions from '../components/Solutions';
import Projects from '../components/Projects';
import Investors from '../components/Investors';
import Government from '../components/Government';
import Audiences from '../components/Audiences';
import FooterCTA from '../components/FooterCTA';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image with Dark Gradient Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/home-bg.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#085041]/70 to-[#085041]/95 backdrop-blur-[2px]"></div>
      </div>

      {/* Page Content */}
      <main className="flex-grow relative z-10 pt-20">
        <Hero />
        <MinistryStrip />
        <Solutions />
        <Projects />
        <Investors />
        <Government />
        <Audiences />
        <FooterCTA />
      </main>
    </div>
  );
}
