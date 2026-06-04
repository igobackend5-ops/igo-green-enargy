export default function ProjectsPage() {
  const projects = [
    {
      title: 'Utility-scale Renewables',
      summary:
        'Large solar and wind farms delivering clean, dispatchable power to regional grids. Projects focus on maximising capacity factor and community benefits.',
      details:
        'IGO develops utility-scale solar parks, wind farms and hybrid projects that combine storage to provide firmed renewable energy. We partner with local stakeholders to secure land access, accelerate permits and deliver socio-economic benefits through jobs and local infrastructure investment.'
    },
    {
      title: 'Energy Storage',
      summary:
        'Grid-scale battery energy storage systems to stabilise intermittent renewable supply and support peak demand.',
      details:
        'Our storage projects are designed to integrate with solar and wind assets to store excess generation and dispatch during high demand. Systems include lithium-ion batteries with modular design, smart controls, and lifecycle management focused on safety and recyclability.'
    },
    {
      title: 'Green Hydrogen',
      summary:
        'Pilot and commercial green hydrogen projects producing low-carbon hydrogen for industry and transport.',
      details:
        'Using renewable electricity and electrolyzers, we are developing green hydrogen pilots for industrial feedstock and mobility. Projects evaluate local offtake, water resources and integration with renewable generation to minimise lifecycle emissions.'
    },
  ];

  return (
    <div className="min-h-screen text-white bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/solar-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-green-950/95" />

      <div className="relative z-10 max-w-6xl mx-auto py-24 px-6">
        <div className="max-w-3xl mb-10">
          <p className="text-brandGreen text-xs uppercase tracking-[0.3em] mb-3">Project Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-white/80">Overview of our flagship and pipeline projects across renewables, storage and hydrogen.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          <img src="/images/solar-bg.png" alt="Solar project" className="h-56 w-full object-cover rounded-2xl border border-white/15" />
          <img src="/images/wind-bg.png" alt="Wind project" className="h-56 w-full object-cover rounded-2xl border border-white/15" />
          <img src="/images/biogas-bg.png" alt="Biogas project" className="h-56 w-full object-cover rounded-2xl border border-white/15" />
        </div>

        <div className="grid gap-8">
          {projects.map((p) => (
            <article key={p.title} className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-2 text-white">{p.title}</h2>
              <p className="text-white/80 mb-3">{p.summary}</p>
              <p className="text-white/70">{p.details}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
