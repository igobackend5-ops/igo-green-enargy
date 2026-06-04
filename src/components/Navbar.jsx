import { useState } from 'react';
import { TbMenu2, TbX, TbLeaf } from 'react-icons/tb';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Projects', href: '/projects' },
    { name: 'Investors', href: '/investors' },
    { name: 'Government', href: '/government' },
    { name: 'About', href: '/#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-green-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src="/images/igo-group-logo.jpg" alt="IGO Group logo" className="h-12 object-contain" />
            <div>
              <span className="font-serif text-2xl font-semibold tracking-tight text-black block leading-tight">
                IGO Green Energies
              </span>
            </div>
          </a>

          {/* Center: Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black hover:text-brandGreen font-sans font-medium text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Get Quote Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="/#footer-cta"
              className="bg-brandGreen hover:bg-black hover:text-white text-black px-6 py-2.5 rounded-full font-sans font-medium text-sm shadow-md shadow-brandGreen/10 hover:shadow-lg transition-all duration-300"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-black hover:bg-black/5 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <TbX className="h-6 w-6" /> : <TbMenu2 className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white border-b border-green-900/10 shadow-lg transition-all duration-300 transform ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-sans font-medium text-black hover:bg-black/5 hover:text-brandGreen transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 px-3">
            <a
              href="/#footer-cta"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-brandGreen hover:bg-black hover:text-white text-black px-4 py-3 rounded-full font-sans font-medium text-sm transition-colors shadow-md"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
