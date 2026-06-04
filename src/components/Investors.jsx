export default function Investors() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4" id="investors">
      <h2 className="text-3xl font-bold text-white mb-4">Investors</h2>
      <p className="text-white/80 mb-6">
        Financial performance, governance, and sustainability information for
        stakeholders and potential investors. Find reports, presentations,
        and key metrics that demonstrate our business strength and long-term
        strategy.
      </p>

      <div className="grid gap-6 sm:grid-cols-3">
        <a className="p-6 bg-white/5 rounded-lg hover:shadow-lg" href="#">
          <h3 className="text-lg font-semibold text-white">Financials</h3>
          <p className="text-white/70 mt-2">Quarterly results and statements</p>
        </a>

        <a className="p-6 bg-white/5 rounded-lg hover:shadow-lg" href="#">
          <h3 className="text-lg font-semibold text-white">Reports</h3>
          <p className="text-white/70 mt-2">Annual & sustainability reports</p>
        </a>

        <a className="p-6 bg-white/5 rounded-lg hover:shadow-lg" href="#">
          <h3 className="text-lg font-semibold text-white">Governance</h3>
          <p className="text-white/70 mt-2">Board, policies and regulatory filings</p>
        </a>
      </div>
    </section>
  );
}
