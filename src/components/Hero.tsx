'use client';

import { getSEOConfig } from '@/lib/seo';

export default function Hero() {
  const seo = getSEOConfig();
  
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            {seo.domainName}
          </h1>
          <p className="text-xl md:text-2xl mb-2 opacity-90">
            Premium Domain Available for Sale
          </p>
          <p className="text-lg md:text-xl opacity-75 max-w-2xl mx-auto">
            {seo.description}
          </p>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Make an Offer
          </a>
          <a
            href="#details"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

