import { ExternalLink, Globe, Smartphone } from 'lucide-react'

const projects = [
  {
    type: 'Web App',
    icon: Globe,
    title: 'LegalEdge AI',
    description:
      'A SaaS platform for law firms featuring AI contract analysis, document generation, and client management — built in 6 weeks.',
    tags: ['React', 'AI Integration', 'SaaS', 'TypeScript'],
    gradient: 'from-primary-600 to-violet-600',
    metric: '6 weeks',
    metricLabel: 'delivery time',
    bgClass: 'bg-gradient-to-br from-primary-950/50 to-violet-950/50',
  },
  {
    type: 'Mobile App',
    icon: Smartphone,
    title: 'FitFlow',
    description:
      'AI-powered fitness coaching app for iOS & Android. Personalized workout plans generated in real time based on user biometrics.',
    tags: ['React Native', 'AI Coach', 'iOS', 'Android'],
    gradient: 'from-emerald-500 to-cyan-500',
    metric: '4.9★',
    metricLabel: 'App Store rating',
    bgClass: 'bg-gradient-to-br from-emerald-950/50 to-cyan-950/50',
  },
  {
    type: 'Web App',
    icon: Globe,
    title: 'RealtyGenius',
    description:
      'Real estate listing platform with AI-generated property descriptions, virtual staging, and lead capture automation.',
    tags: ['Next.js', 'AI Content', 'Real Estate', 'SEO'],
    gradient: 'from-amber-500 to-orange-500',
    metric: '3x',
    metricLabel: 'lead increase',
    bgClass: 'bg-gradient-to-br from-amber-950/50 to-orange-950/50',
  },
  {
    type: 'Mobile App',
    icon: Smartphone,
    title: 'MenuAI',
    description:
      'Restaurant ordering app with AI-powered menu recommendations and smart upsell flows. Deployed across 30+ locations.',
    tags: ['React Native', 'Payments', 'AI Recs', 'Dashboard'],
    gradient: 'from-pink-500 to-violet-500',
    metric: '30+',
    metricLabel: 'locations live',
    bgClass: 'bg-gradient-to-br from-pink-950/50 to-violet-950/50',
  },
  {
    type: 'Web App',
    icon: Globe,
    title: 'TalentScope',
    description:
      'HR platform with AI-assisted candidate screening, job description generation, and automated interview scheduling.',
    tags: ['Vue.js', 'AI Screening', 'HR Tech', 'Automation'],
    gradient: 'from-cyan-500 to-primary-500',
    metric: '80%',
    metricLabel: 'time saved in hiring',
    bgClass: 'bg-gradient-to-br from-cyan-950/50 to-primary-950/50',
  },
  {
    type: 'Web App',
    icon: Globe,
    title: 'CreatorHub',
    description:
      'Content creator monetization platform with AI-generated social media captions, thumbnails, and analytics dashboard.',
    tags: ['React', 'AI Content', 'Monetization', 'Analytics'],
    gradient: 'from-violet-500 to-pink-500',
    metric: '10k+',
    metricLabel: 'active creators',
    bgClass: 'bg-gradient-to-br from-violet-950/50 to-pink-950/50',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="section-padding bg-[#07070c] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            Our Work
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-4">
            Products We've
            <span className="gradient-text"> Shipped</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Real projects, real results. Here's a selection of websites and apps
            we've delivered for clients across industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative ${project.bgClass} rounded-2xl border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Top bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                    >
                      <project.icon size={13} className="text-white" />
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                      {project.type}
                    </span>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-slate-600 group-hover:text-slate-400 transition-colors"
                  />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-white/10 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metric */}
                <div className="pt-4 border-t border-white/5 flex items-baseline gap-2">
                  <span
                    className={`text-2xl font-display font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                  >
                    {project.metric}
                  </span>
                  <span className="text-xs text-slate-500">{project.metricLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
