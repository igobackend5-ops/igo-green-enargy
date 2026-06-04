export default function GovernmentPage() {
  return (
    <div className="min-h-screen text-white bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#071d16] to-green-950" />

      <div className="relative z-10 max-w-5xl mx-auto py-24 px-6">
        <div className="max-w-3xl mb-10">
          <p className="text-brandGreen text-xs uppercase tracking-[0.3em] mb-3">Government & Partnerships</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Government & Partnerships</h1>
          <p className="text-white/80">Working with government agencies, public utilities and community stakeholders to deliver policy-aligned energy projects.</p>
        </div>

        <section className="mb-8 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-2 text-white">Public Partnerships</h2>
          <p className="text-white/70">Collaborating on grid expansion, rural electrification and joint infrastructure projects that accelerate energy access and local development.</p>
        </section>

        <section className="mb-8 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-2 text-white">Policy &amp; Compliance</h2>
          <p className="text-white/70">We align with national and state targets, maintain regulatory compliance, and support initiatives that promote renewable adoption and energy security.</p>
        </section>

        <section className="mb-8 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-2 text-white">Community &amp; Local Benefits</h2>
          <p className="text-white/70">Projects include community engagement, local hiring, and investment in social infrastructure to share benefits with host regions.</p>
        </section>
      </div>
    </div>
  );
}
