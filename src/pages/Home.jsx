import Hero from '../components/Hero';
import MinistryStrip from '../components/MinistryStrip';
import Solutions from '../components/Solutions';
import Projects from '../components/Projects';
import Investors from '../components/Investors';
import Government from '../components/Government';
import Audiences from '../components/Audiences';
import FooterCTA from '../components/FooterCTA';
import heroVideo from '../../6867d1d40e02a11134a21561e67683e0_720w.mp4';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Full-screen Video Background with Dark Gradient Overlay */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          style={{ minHeight: '100vh', minWidth: '100vw' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#085041]/20 to-[#085041]/45 backdrop-blur-[0px]"></div>
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
