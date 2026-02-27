'use client';

import { getSEOConfig } from '@/lib/seo';

export default function Footer() {
  const seo = getSEOConfig();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030308] relative pt-12 pb-8 px-4">
      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 justify-items-center">
          <div>
            <h3 className="text-lg font-bold mb-3 text-gradient">{seo.domainName}</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Premium domain available for sale. Perfect for your next project.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#details" className="text-slate-500 text-sm hover:text-purple-400 transition-colors duration-300">
                  Domain Details
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-500 text-sm hover:text-purple-400 transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 text-center">
          <p className="text-slate-600 text-sm">
            © {currentYear} {seo.domainName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
