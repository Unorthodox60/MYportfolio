export default function CinematicHero() {
  return (
    <div className="cinematic-hero relative h-screen w-full flex flex-col overflow-hidden bg-[#0b080c] font-['Geist',sans-serif]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        <source 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Cinematic Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 flex-grow">
        <h1 
          className="animate-fade-rise text-[#eae5ec] text-3xl md:text-4xl lg:text-[42px] font-normal tracking-wide mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where dreams rise through the silence.
        </h1>
        
        <p className="animate-fade-rise-delay text-[#eae5ec]/80 text-xs md:text-sm max-w-3xl mb-8 leading-relaxed tracking-wide">
          I'm designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, I build digital spaces for sharp focus and inspired work.
        </p>
        
        <button className="animate-fade-rise-delay-2 text-[#eae5ec] border border-white/20 rounded-full px-5 py-1.5 text-xs hover:bg-white/10 transition-colors duration-300 cursor-pointer tracking-wider">
          Let's Explore!
        </button>
      </main>
    </div>
  );
}
