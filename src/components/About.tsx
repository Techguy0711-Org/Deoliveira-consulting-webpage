import { CheckCircle2, Brain, Users, Rocket } from 'lucide-react'
import founderImg from '../assets/founder.jpg'

const values = [
  {
    icon: Brain,
    title: 'AI-First Approach',
    description:
      'We leverage the latest AI tools — from code generation to design — to deliver higher quality, faster.',
  },
  {
    icon: Rocket,
    title: 'Speed Without Compromise',
    description:
      'Our AI-augmented workflow means you get production-ready products in weeks, not months.',
  },
  {
    icon: Users,
    title: 'Partner, Not Vendor',
    description:
      'We embed with your team, understand your goals, and deliver results you genuinely care about.',
  },
]

const whyPoints = [
  'Full-stack development with modern frameworks (React, Next.js, React Native)',
  'AI-accelerated delivery — 3x faster than traditional agencies',
  'Transparent pricing with no hidden fees',
  'Dedicated project manager from kickoff to launch',
  'Post-launch support included in every package',
  'Clients keep 100% ownership of source code and assets',
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#0a0a0f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
              About Us
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
              A Team Obsessed with
              <span className="gradient-text"> AI-Powered</span> Delivery
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              DeOliveira Consulting was founded with a single belief: AI is not replacing
              developers — it's supercharging them. We're a boutique consultancy of senior
              engineers and designers who use AI tools to deliver enterprise-quality digital
              products at startup speed.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              We work with startups, scale-ups, and established businesses who need a
              trusted partner to bring their digital vision to life — quickly, beautifully,
              and on budget.
            </p>

            {/* Why points */}
            <ul className="space-y-3">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Values cards */}
          <div className="space-y-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="flex gap-5 p-5 rounded-2xl glass border border-white/5 hover:border-white/10 transition-all"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center shrink-0">
                  <v.icon size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white mb-1">{v.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}

            {/* Founder card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-950/60 to-violet-950/60 border border-primary-500/20">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={founderImg}
                  alt="Kristhian De Oliveira"
                  className="w-12 h-12 rounded-full object-cover object-top border-2 border-primary-500/40"
                />
                <div>
                  <div className="text-white font-semibold">Kristhian De Oliveira</div>
                  <div className="text-slate-400 text-sm">Founder & Lead Engineer</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm italic leading-relaxed">
                "I started De Oliveira Consulting because I saw how AI was transforming what's
                possible in software development. Our clients get world-class digital products
                delivered at a pace they never thought possible."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
