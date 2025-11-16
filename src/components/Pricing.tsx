'use client';

export default function Pricing() {
  const price = process.env.NEXT_PUBLIC_DOMAIN_PRICE || 'Contact for pricing';
  const currency = process.env.NEXT_PUBLIC_CURRENCY || 'USD';
  
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Domain Pricing
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Competitive pricing for this premium domain
        </p>
        
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-12 shadow-xl">
          <div className="mb-8">
            {price !== 'Contact for pricing' ? (
              <>
                <div className="text-6xl font-bold text-purple-600 mb-2">
                  {currency === 'USD' ? '$' : currency}{price}
                </div>
                <p className="text-gray-600 text-lg">One-time purchase</p>
              </>
            ) : (
              <>
                <div className="text-5xl font-bold text-purple-600 mb-4">
                  Contact Us
                </div>
                <p className="text-gray-600 text-lg">
                  Get a personalized quote for this premium domain
                </p>
              </>
            )}
          </div>
          
          <div className="mt-8 space-y-4 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-700">Instant domain transfer</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-700">Full ownership rights</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-700">No hidden fees</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-700">Secure payment processing</span>
            </div>
          </div>
          
          <a
            href="#contact"
            className="inline-block mt-10 bg-purple-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

