export default function Projects() {
  const items = [
    { title: 'Utility-scale Renewables', desc: 'Large solar and wind projects powering regions.' },
    { title: 'Energy Storage', desc: 'Grid-scale battery projects to stabilise supply.' },
    { title: 'Green Hydrogen', desc: 'Pilots and commercialisation of low-carbon hydrogen.' },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4" id="projects">
      <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
      <p className="text-white/80 mb-6">Flagship and ongoing projects across renewables, storage, and grid infrastructure.</p>

      <div className="grid gap-6 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="p-6 bg-white/5 rounded-lg">
            <h3 className="text-lg font-semibold text-white">{it.title}</h3>
            <p className="text-white/70 mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
