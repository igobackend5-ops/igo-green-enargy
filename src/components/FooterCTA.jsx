import { useState } from 'react';

export default function FooterCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    landSize: '',
    interest: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent([
      'New inquiry from IGO Green Energies website:',
      `Name: ${formData.name || '-'}`,
      `Phone: ${formData.phone || '-'}`,
      `Location: ${formData.location || '-'}`,
      `Land size: ${formData.landSize || '-'} acres`,
      `Interest: ${formData.interest || '-'}`,
    ].join('\n'));

    window.open(
      `https://wa.me/917397789803?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSubmitted(true);
  };

  return (
    <section id="footer-cta" className="bg-transparent text-white pt-20 pb-8 flex flex-col items-center">
      <div className="max-w-3xl mx-auto px-4 w-full flex flex-col items-center text-center">
        
        {/* Section Heading */}
        <h2 className="font-serif text-[36px] text-white mb-8 leading-tight drop-shadow-lg">
          Let's build clean energy on your land
        </h2>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <button 
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black font-sans font-medium px-8 py-3 rounded-full hover:bg-brandGreen hover:text-white transition-colors"
          >
            Request site assessment
          </button>
          <a 
            href={`https://wa.me/917397789803?text=${encodeURIComponent("Hi, I'm interested in IGO Green Energies")}`}
            target="_blank" 
            rel="noreferrer"
            className="border border-white text-white font-sans font-medium px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center"
          >
            WhatsApp us
          </a>
        </div>

        {/* Lead Capture Form */}
        <div id="lead-form" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-[12px] p-8 w-full max-w-xl mx-auto mb-16 text-left shadow-2xl">
          {submitted ? (
            <div className="text-center py-10">
              <p className="text-brandGreen font-medium text-lg">
                Thank you! Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1 drop-shadow-sm">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                    className="w-full border border-white/30 bg-white/5 text-white placeholder-white/50 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-transparent font-sans"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-1 drop-shadow-sm">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile number"
                  title="Please enter a valid 10-digit phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-white/30 bg-white/5 text-white placeholder-white/50 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-transparent font-sans"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-white/90 mb-1 drop-shadow-sm">Location / District</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  required 
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-white/30 bg-white/5 text-white placeholder-white/50 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-transparent font-sans"
                />
              </div>

              <div>
                <label htmlFor="landSize" className="block text-sm font-medium text-white/90 mb-1 drop-shadow-sm">Land size in acres</label>
                <input 
                  type="number" 
                  id="landSize" 
                  name="landSize" 
                  required
                  min="0"
                  step="any"
                  value={formData.landSize}
                  onChange={handleChange}
                  className="w-full border border-white/30 bg-white/5 text-white placeholder-white/50 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-transparent font-sans"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-white/90 mb-1 drop-shadow-sm">Interest type</label>
                <select 
                  id="interest" 
                  name="interest" 
                  required 
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full border border-white/30 bg-white/5 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-transparent font-sans"
                >
                  <option className="bg-black text-white" value="" disabled>Select an option</option>
                  <option className="bg-black text-white" value="Solar">Solar</option>
                  <option className="bg-black text-white" value="Wind">Wind</option>
                  <option className="bg-black text-white" value="Biogas">Biogas</option>
                  <option className="bg-black text-white" value="All three">All three</option>
                </select>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-brandGreen text-black font-medium py-3 rounded-lg hover:bg-white hover:text-black transition-colors font-sans text-base"
                >
                  Send enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      
    </section>
  );
}
