import { ArrowRight, Sparkles, Play } from 'lucide-react'

export default function Hero() {
  const handleCTAClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-violet-600/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-max section-padding relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 text-primary-400 text-sm font-medium mb-8 animate-fade-in">
          <Sparkles size={14} />
          <span>AI-Powered Digital Experiences</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight mb-6 animate-fade-in-up">
          We Build
          <span className="block gradient-text">AI-Crafted</span>
          Websites & Apps
        </h1>

        {/* Sub headline */}
        <p className="max-w-2xl mx-auto text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 animate-fade-in-up">
          DeOliveira Consulting creates stunning, high-performance websites and
          mobile apps powered by AI — delivered faster, smarter, and built to
          scale your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up">
          <button
            onClick={() => handleCTAClick('#contact')}
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-violet-600 text-white font-semibold text-base hover:opacity-90 transition-all glow-hover cursor-pointer border-none shadow-lg shadow-primary-500/25"
          >
            Start Your Project
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => handleCTAClick('#work')}
            className="flex items-center gap-2 px-8 py-4 rounded-xl glass text-slate-300 hover:text-white font-semibold text-base transition-all cursor-pointer border border-white/10 hover:border-white/20"
          >
            <Play size={16} className="text-primary-400" />
            See Our Work
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 max-w-xl mx-auto gap-6 animate-fade-in">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '3x', label: 'Faster Development' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center pt-2">
            <div className="w-1 h-3 rounded-full bg-primary-500 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
