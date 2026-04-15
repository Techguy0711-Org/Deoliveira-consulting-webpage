import { Globe, Smartphone, Bot, Palette, Zap, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'AI-Generated Websites',
    description:
      'We design and develop full custom websites using AI-assisted workflows — from landing pages to full-scale web apps — in a fraction of the traditional time.',
    features: ['Custom Design', 'SEO Optimized', 'Lightning Fast', 'Mobile First'],
    gradient: 'from-primary-500 to-violet-500',
    glow: 'group-hover:shadow-primary-500/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Cross-platform iOS and Android apps built with AI precision. We deliver polished, production-ready apps that users love, faster than traditional agencies.',
    features: ['iOS & Android', 'React Native', 'App Store Ready', 'Push Notifications'],
    gradient: 'from-violet-500 to-pink-500',
    glow: 'group-hover:shadow-violet-500/20',
  },
  {
    icon: Bot,
    title: 'AI Chatbots & Agents',
    description:
      'Integrate powerful AI assistants directly into your website or app. From customer support bots to autonomous agents — we build them end to end.',
    features: ['GPT-4 Powered', 'Custom Training', 'Multi-Channel', '24/7 Support'],
    gradient: 'from-cyan-500 to-primary-500',
    glow: 'group-hover:shadow-cyan-500/20',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'AI-enhanced design systems and user interfaces that look exceptional and convert visitors into customers. Every pixel purposefully crafted.',
    features: ['Figma Designs', 'Design System', 'Prototyping', 'Brand Identity'],
    gradient: 'from-pink-500 to-orange-500',
    glow: 'group-hover:shadow-pink-500/20',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'We audit and optimize your existing digital products using AI tools — boosting speed, accessibility, and Core Web Vitals scores.',
    features: ['Core Web Vitals', 'Lighthouse 100', 'CDN Setup', 'Caching Strategy'],
    gradient: 'from-amber-500 to-orange-500',
    glow: 'group-hover:shadow-amber-500/20',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Growth',
    description:
      'Data-driven insights powered by AI to understand your users and grow your business. We set up dashboards, funnels, and A/B testing workflows.',
    features: ['GA4 & Mixpanel', 'Conversion Funnels', 'A/B Testing', 'Weekly Reports'],
    gradient: 'from-emerald-500 to-cyan-500',
    glow: 'group-hover:shadow-emerald-500/20',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#0a0a0f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            What We Do
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-4">
            Services Built for the
            <span className="gradient-text"> AI Era</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            We combine cutting-edge AI tooling with expert engineering to deliver
            digital products that would take a traditional agency months — in weeks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-6 rounded-2xl glass border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${service.glow}`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}
              >
                <service.icon size={22} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-slate-400"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
