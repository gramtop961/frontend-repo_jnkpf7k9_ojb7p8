import { Smartphone, MonitorSmartphone, Brain, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: 'Web Development',
    desc: 'High-performance websites and web apps built with modern frameworks and scalable architectures.',
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Mobile Apps',
    desc: 'Native-quality cross-platform apps with delightful UX and robust offline-first capabilities.',
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'AI Products',
    desc: 'We craft our own AI tools and integrate AI to supercharge your products and workflows.',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Product Design',
    desc: 'From concept to polish — brand, UX, and motion that feel futuristic yet human.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">Full-service design and engineering, dedicated to outcomes.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
