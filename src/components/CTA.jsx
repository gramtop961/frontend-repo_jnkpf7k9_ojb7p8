export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_60%)]" />
          </div>
          <div className="relative p-10 sm:p-14">
            <div className="max-w-2xl text-white">
              <h3 className="text-2xl sm:text-3xl font-bold">Ready to build with Fyron?</h3>
              <p className="mt-3 text-white/80">Tell us about your idea and we’ll get back within 24 hours.</p>
              <form className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input type="text" placeholder="Your name" className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
                <input type="email" placeholder="Email" className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
                <button type="submit" className="rounded-md bg-white text-gray-900 px-5 py-3 font-medium hover:bg-gray-100 transition">Get in touch</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
