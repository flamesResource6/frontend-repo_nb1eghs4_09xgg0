function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to build your website or AI agent?</h2>
        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Tell us about your goals and we’ll propose a roadmap with pricing in 24 hours.</p>

        <form className="mt-8 grid gap-4 sm:grid-cols-2 text-left">
          <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Name" />
          <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Email" />
          <input className="sm:col-span-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Company / Website" />
          <textarea rows="4" className="sm:col-span-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="What do you want to build?" />
          <button type="button" className="sm:col-span-2 inline-flex justify-center items-center rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 hover:opacity-95 text-white px-6 py-3 font-semibold shadow-lg shadow-violet-500/25 transition">
            Get proposal
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-400">Or email hello@vireollc.com</p>
      </div>
    </section>
  );
}

export default CTA;
