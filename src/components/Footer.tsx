'use client';

import { getSEOConfig } from '@/lib/seo';

export default function Footer() {
  const seo = getSEOConfig();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 justify-items-center">

          <div>
            <h3 className="text-xl font-bold mb-4">{seo.domainName}</h3>
            <p className="text-gray-400">
              Premium domain available for sale. Perfect for your next project.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#details" className="hover:text-white transition-colors">
                  Domain Details
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} {seo.domainName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

