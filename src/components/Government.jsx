export default function Government() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4" id="government">
      <h2 className="text-3xl font-bold text-white mb-4">Government & Partnerships</h2>
      <p className="text-white/80 mb-6">
        Collaboration with government bodies and public stakeholders to deliver
        policy-aligned projects, regulatory compliance, and community development.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="p-6 bg-white/5 rounded-lg">
          <h3 className="text-lg font-semibold text-white">Public Partnerships</h3>
          <p className="text-white/70 mt-2">Joint initiatives for grid expansion and energy access.</p>
        </div>

        <div className="p-6 bg-white/5 rounded-lg">
          <h3 className="text-lg font-semibold text-white">Policy & Compliance</h3>
          <p className="text-white/70 mt-2">Adherence to regulations and support for national targets.</p>
        </div>
      </div>
    </section>
  );
}
