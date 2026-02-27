'use client';

import { getSEOConfig } from '@/lib/seo';

export default function Hero() {
  const seo = getSEOConfig();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-[#050510]">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-orb-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/15 blur-[100px] animate-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-[140px] animate-pulse-glow" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="animate-fade-in-up">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-sm text-purple-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Purchase
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up-delay-1 break-words">
          <span className="text-gradient">{seo.domainName}</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-4 animate-fade-in-up-delay-2 max-w-2xl mx-auto">
          Premium Domain Available for Sale
        </p>
        <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto animate-fade-in-up-delay-2">
          {seo.description}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-3">
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-xl font-semibold text-lg text-white btn-gradient shadow-lg shadow-purple-500/20 flex items-center gap-2"
          >
            Make an Offer
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#details"
            className="px-8 py-4 rounded-xl font-semibold text-lg text-slate-300 glass hover:bg-white/10 transition-all duration-300 hover:text-white"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent" />
    </section>
  );
}
