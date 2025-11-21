import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Global subtle background pattern */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_55%)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Services />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400" />
            <span className="text-sm text-slate-300">© {new Date().getFullYear()} Vireo LLC. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#services" className="hover:text-slate-200 transition">Services</a>
            <a href="#work" className="hover:text-slate-200 transition">Work</a>
            <a href="#contact" className="hover:text-slate-200 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
