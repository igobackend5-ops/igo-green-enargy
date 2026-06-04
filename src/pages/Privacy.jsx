export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-black/70 mb-6">Last updated: 4 June 2026</p>

        <section className="mb-6">
          <h2 className="font-semibold mb-2 text-brandGreen">Introduction</h2>
          <p className="text-black/80">IGO Green Energies is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your choices.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold mb-2 text-brandGreen">Information We Collect</h2>
          <ul className="list-disc ml-6 text-black/80">
            <li>Contact information you provide (name, email, phone)</li>
            <li>Usage data from our website (cookies, analytics)</li>
            <li>Communications and support requests</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold mb-2 text-brandGreen">How We Use Information</h2>
          <p className="text-black/80">We use data to respond to inquiries, improve the website, send updates, and for legal compliance. We do not sell personal data.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold mb-2 text-brandGreen">Cookies &amp; Tracking</h2>
          <p className="text-black/80">We use cookies and analytics to understand site usage. You can control cookies through your browser settings.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold mb-2 text-brandGreen">Contact</h2>
          <p className="text-black/80">For privacy questions, contact us at bankingbackend.indiagreen@gmail.com</p>
        </section>
      </div>
    </div>
  );
}
