
export default function CinematicHero() {
  return (
    <div className="cinematic-hero relative h-screen w-full flex flex-col overflow-hidden bg-[hsl(var(--hero-bg))] font-['Inter',sans-serif]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Glassmorphic Navigation Bar */}
      <nav className="relative z-10 flex flex-row items-center justify-between w-full px-8 py-6 max-w-7xl mx-auto text-white">
        <div
          className="text-3xl tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </div>

        <ul className="hidden md:flex flex-row gap-8 items-center">
          <li><a href="#" className="text-sm font-medium">Home</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Studio</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Journal</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Reach Us</a></li>
        </ul>

        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm hover:scale-[1.03] transition-transform duration-300">
          Begin Journey
        </button>
      </nav>

      {/* Cinematic Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 flex-grow pb-20">
        <h1
          className="animate-fade-rise text-white text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-gray-400">dreams</em> rise{' '}
          <em className="not-italic text-gray-400">through the silence.</em>
        </h1>

        <p className="animate-fade-rise-delay text-gray-400 text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          I'm designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, I build digital spaces for sharp focus and inspired work.
        </p>

        <button className="animate-fade-rise-delay-2 liquid-glass text-white rounded-full px-14 py-5 text-base mt-12 hover:scale-[1.03] transition-transform duration-300 cursor-pointer">
          Let's Explore!
        </button>
      </main>
    </div>
  );
}
