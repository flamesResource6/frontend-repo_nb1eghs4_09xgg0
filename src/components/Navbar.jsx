function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 shadow-lg shadow-violet-500/30" />
          <span className="text-white font-semibold">Vireo LLC</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-200/90">
          <a className="hover:text-white transition" href="#services">Services</a>
          <a className="hover:text-white transition" href="#work">Work</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="hidden sm:inline-flex items-center rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm font-medium border border-white/10 transition">
          Let’s talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;
