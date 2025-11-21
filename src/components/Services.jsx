function Services() {
  const items = [
    {
      title: 'Custom Websites',
      desc: 'Design-first, SEO-ready websites built with modern stacks for speed and conversion.',
    },
    {
      title: 'AI Voice & Chat Agents',
      desc: '24/7 agents that qualify leads, book meetings, and support your customers across channels.',
    },
    {
      title: 'Automation & Integrations',
      desc: 'Connect your tools, automate workflows, and ship internal apps that save hours weekly.',
    },
  ];

  return (
    <section id="services" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(236,72,153,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">What we do</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">A focused set of services to get you from idea to launch, and then scale with AI.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:translate-y-[-2px] hover:bg-white/10">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-orange-400 opacity-80 group-hover:opacity-100 transition" />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-300/90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
