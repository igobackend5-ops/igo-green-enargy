export default function InvestorsPage() {
  return (
    <div className="min-h-screen text-white bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/wind-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-green-950/95" />

      <div className="relative z-10 max-w-5xl mx-auto py-24 px-6">
        <div className="max-w-3xl mb-10">
          <p className="text-brandGreen text-xs uppercase tracking-[0.3em] mb-3">Investor Relations</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investors</h1>
          <p className="text-white/80">Financial information, governance and sustainability disclosures for investors and analysts.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          <img src="/images/investor-1.jpg" alt="IGO AgriTechFarms team discussion" className="h-56 w-full object-cover rounded-2xl border border-white/15" />
          <img src="/images/investor-2.jpg" alt="IGO AgriTechFarms field consultation" className="h-56 w-full object-cover rounded-2xl border border-white/15" />
        </div>

        <section className="mb-8 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-2 text-white">Financial Information</h2>
          <p className="text-white/70 mb-2">Quarterly results, annual reports, financial statements and investor presentations provide transparency into our performance.</p>
          <ul className="list-disc ml-5 text-white/70">
            <li>Quarterly Results &amp; Earnings Releases</li>
            <li>Annual Reports &amp; Auditor Statements</li>
            <li>Investor Presentations &amp; Webcasts</li>
          </ul>
        </section>

        <section className="mb-8 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-2 text-white">Governance &amp; Regulatory</h2>
          <p className="text-white/70 mb-2">Our governance framework includes an independent Board, defined committees, and policies that ensure regulatory compliance and ethical conduct.</p>
          <ul className="list-disc ml-5 text-white/70">
            <li>Board of Directors &amp; Board Committees</li>
            <li>Corporate Governance Reports &amp; Policies</li>
            <li>Shareholding Pattern &amp; Regulatory Filings</li>
          </ul>
        </section>

        <section className="mb-8 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-2 text-white">Sustainability &amp; ESG</h2>
          <p className="text-white/70">Environmental and social disclosures, targets, certifications and value-chain sustainability that support long-term value creation.</p>
        </section>
      </div>
    </div>
  );
}
