import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'LegalEdge AI',
    content:
      "DeOliveira Consulting built our entire SaaS platform in under 6 weeks. The quality was exceptional — it looked like it took months. I genuinely don't know how they work so fast.",
    rating: 5,
    gradient: 'from-primary-500 to-violet-500',
  },
  {
    name: 'James Park',
    role: 'Co-Founder',
    company: 'FitFlow App',
    content:
      'We went from idea to App Store approval in 8 weeks. Our app has a 4.9 star rating and users constantly compliment the design. Carlos and his team are absolute pros.',
    rating: 5,
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    name: 'Maria Fernandez',
    role: 'Head of Digital',
    company: 'RealtyGenius',
    content:
      "Our lead conversion tripled after the new website launched. The AI-generated property descriptions save our agents hours every week. Couldn't be happier with the outcome.",
    rating: 5,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Tom Bradley',
    role: 'Product Manager',
    company: 'TalentScope',
    content:
      'The team integrated an AI screening tool directly into our HR platform seamlessly. It saved our hiring team 80% of their time. The ROI was visible within the first month.',
    rating: 5,
    gradient: 'from-pink-500 to-violet-500',
  },
  {
    name: 'Kenji Watanabe',
    role: 'Operations Director',
    company: 'MenuAI',
    content:
      'Deploying across 30 restaurant locations seemed daunting. DeOliveira handled everything — the dashboard, the app, the payment integrations. Flawless execution.',
    rating: 5,
    gradient: 'from-cyan-500 to-primary-500',
  },
  {
    name: 'Alicia Torres',
    role: 'Founder',
    company: 'CreatorHub',
    content:
      'From design mockups to a live platform with 10k users — this team moved mountains. They understand AI, they understand product, and they deliver. Simply the best.',
    rating: 5,
    gradient: 'from-violet-500 to-pink-500',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-[#07070c] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            Client Stories
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-4">
            What Our Clients
            <span className="gradient-text"> Say</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            Don't just take our word for it — here's what the teams we've worked
            with have to say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group p-6 rounded-2xl glass border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-primary-500/40 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
