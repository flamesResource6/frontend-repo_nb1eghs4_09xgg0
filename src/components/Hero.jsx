import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background gradient aura to complement Spline */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.15),transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-300/90 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            Vireo LLC • Websites & AI Agents
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Build a smarter web presence with Vireo
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200/90 max-w-xl mx-auto lg:mx-0">
            We craft blazing-fast websites and deploy custom AI agents that automate support, sales, and operations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#contact" className="inline-flex justify-center items-center rounded-xl bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 font-medium shadow-lg shadow-violet-500/25 transition">
              Get a free strategy call
            </a>
            <a href="#services" className="inline-flex justify-center items-center rounded-xl bg-white/10 hover:bg-white/15 text-white px-6 py-3 font-medium border border-white/10 backdrop-blur transition">
              Explore services
            </a>
          </div>
          <div className="mt-6 text-slate-400 text-sm">
            Trusted by startups and growing teams
          </div>
        </div>

        {/* Spline 3D animation */}
        <div className="relative h-[380px] md:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm" />
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft gradient ring overlay to match the AI aura */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(closest-side,rgba(99,102,241,0.18),transparent_70%)]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
