import { TbMapPin, TbPhone, TbMail } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative z-10 bg-darkGreen text-white py-16 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          
          {/* Column 1: Logo + Vision */}
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <img src="/images/igo-group-logo.jpg" alt="IGO Group logo" className="h-10 object-contain" />
            </a>
            <p className="font-sans text-[13px] text-white/70 leading-[1.7] mb-8 mt-4">
              Empowering Tamil Nadu's farmers and landowners with
              solar, wind, and biogas energy. We build sustainable
              livelihoods through clean technology.
            </p>
            
            {/* Social Media Links */}
            <div>
              <h3 className="font-sans text-[14px] font-semibold text-white mb-4">
                Follow us on
              </h3>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all hover:bg-white/10">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all hover:bg-white/10">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M16.5 7.5l0 .01"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all hover:bg-white/10">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all hover:bg-white/10">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all hover:bg-white/10">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path><path d="M10 9l5 3l-5 3z"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-sans text-[11px] uppercase tracking-wider text-white/50 mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2 items-start">
              {[
                { text: 'Solar Energy Solutions', link: '/service/solar' },
                { text: 'Wind Energy Systems', link: '/service/wind' },
                { text: 'Biogas & Farm Waste', link: '/service/biogas' }
              ].map((item) => (
                <li key={item.text}>
                  <Link 
                    to={item.link}
                    className="font-sans text-[13px] text-white/70 hover:text-white transition-colors text-left inline-flex items-center"
                  >
                    {item.text} <span className="ml-1 text-[10px]">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="font-sans text-[11px] uppercase tracking-wider text-white/50 mb-4">
              Contact Us
            </h3>
            <div className="flex flex-col gap-[10px]">
              {/* Address */}
              <div className="flex items-start gap-3">
                <TbMapPin className="text-white/50 mt-[2px] shrink-0" size={14} />
                <p className="font-sans text-[13px] text-white/70 leading-[1.6] m-0">
                  No 17, Kovalan Street, 2nd Main Road,<br />
                  Uthandi Kanathur, Chennai – 600 119
                </p>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-3">
                <TbPhone className="text-white/50 mt-[2px] shrink-0" size={14} />
                <div className="font-sans text-[13px] text-white/70 flex flex-col gap-[10px]">
                  <span>+91 73977 89803</span>
                  <span>+91 73977 89804</span>
                  <span>+91 73977 89805</span>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-3">
                <TbMail className="text-white/50 mt-[2px] shrink-0" size={14} />
                <div className="font-sans text-[13px] text-white/70 flex flex-col gap-[10px]">
                  <span>bankingbackend.indiagreen@gmail.com</span>
                  <span>bd2@igogroups.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="font-sans text-[11px] uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 items-start">
              <li>
                <a href="/" className="font-sans text-[13px] text-white/70 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#solutions" className="font-sans text-[13px] text-white/70 hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/investors" className="font-sans text-[13px] text-white/70 hover:text-white transition-colors">
                  Investors
                </a>
              </li>
              <li>
                <a href="/government" className="font-sans text-[13px] text-white/70 hover:text-white transition-colors">
                  Government
                </a>
              </li>
              <li>
                <a href="/#footer-cta" className="font-sans text-[13px] text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="font-sans text-[13px] text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider + Copyright Bar */}
        <div className="mt-16 pt-6 border-t border-white/20 text-center">
          <p className="font-sans text-[12px] text-white/50">
            © 2025 IGO Green Energies · IGO Group · Chennai
          </p>
        </div>
      </div>
    </footer>
  );
}
