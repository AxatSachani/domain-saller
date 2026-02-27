'use client';

export default function Pricing() {
  const price = process.env.NEXT_PUBLIC_DOMAIN_PRICE || 'Contact for pricing';
  const currency = process.env.NEXT_PUBLIC_CURRENCY || 'USD';

  return (
    <section className="py-24 px-4 bg-[#050510] relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="text-gradient">Domain Pricing</span>
        </h2>
        <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto">
          Competitive pricing for this premium domain
        </p>

        {/* Pricing card with gradient border */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/30 via-transparent to-cyan-500/30 max-w-lg mx-auto">
          <div className="glass-strong rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="mb-8">
              {price !== 'Contact for pricing' ? (
                <>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-2 break-words">
                    {currency === 'USD' ? '$' : currency}{price}
                  </div>
                  <p className="text-slate-400 text-lg">One-time purchase</p>
                </>
              ) : (
                <>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 break-words">
                    Contact Us
                  </div>
                  <p className="text-slate-400 text-lg">
                    Get a personalized quote for this premium domain
                  </p>
                </>
              )}
            </div>

            <div className="mt-8 space-y-4 text-left max-w-md mx-auto">
              {[
                'Instant domain transfer',
                'Full ownership rights',
                'No hidden fees',
                'Secure payment processing',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block mt-10 px-10 py-4 rounded-xl font-semibold text-lg text-white btn-gradient shadow-lg shadow-purple-500/20"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
