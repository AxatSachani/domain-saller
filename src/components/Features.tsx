'use client';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '✨',
    title: 'Premium Quality',
    description: 'A high-value domain name with excellent branding potential',
  },
  {
    icon: '🚀',
    title: 'SEO Ready',
    description: 'Domain optimized for search engines and online visibility',
  },
  {
    icon: '💼',
    title: 'Business Ready',
    description: 'Perfect for startups, businesses, or personal projects',
  },
  {
    icon: '🔒',
    title: 'Secure Transfer',
    description: 'Safe and secure domain transfer process guaranteed',
  },
];

const delayClasses = [
  'animate-fade-in-up-delay-1',
  'animate-fade-in-up-delay-2',
  'animate-fade-in-up-delay-3',
  'animate-fade-in-up-delay-4',
];

export default function Features() {
  return (
    <section id="details" className="py-24 px-4 bg-[#050510] relative">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Why This Domain?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Everything you need for a powerful online presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group glass rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1 glow-border ${delayClasses[index]}`}
            >
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-gradient-subtle transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
