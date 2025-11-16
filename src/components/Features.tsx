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

export default function Features() {
  return (
    <section id="details" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Why This Domain?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

