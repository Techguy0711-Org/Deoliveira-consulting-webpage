import { Zap, ExternalLink } from 'lucide-react'

const footerLinks = {
  Services: [
    'AI Websites',
    'Mobile Apps',
    'AI Chatbots',
    'UI/UX Design',
    'Performance Optimization',
  ],
  Company: ['About', 'Our Work', 'Testimonials', 'Blog', 'Careers'],
  Contact: [
    'hello@deoliveiraconsulting.com',
    'WhatsApp',
    'Book a Call',
    'LinkedIn',
  ],
}

const socialLinks = [
  {
    label: 'GH',
    href: '#',
    title: 'GitHub',
  },
  {
    label: 'LI',
    href: '#',
    title: 'LinkedIn',
  },
  {
    label: 'X',
    href: '#',
    title: 'X / Twitter',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#07070c] border-t border-white/5">
      {/* CTA Banner */}
      <div className="border-b border-white/5">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl bg-gradient-to-r from-primary-900/50 to-violet-900/50 border border-primary-500/20 p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px]" />
            </div>
            <div className="relative z-10">
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
                Let's Build Your Next Big Thing
              </h3>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                Get a free consultation and project estimate. No commitment required.
              </p>
              <button
                onClick={() => {
                  const el = document.querySelector('#contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-violet-600 text-white font-semibold hover:opacity-90 transition-all cursor-pointer border-none shadow-lg shadow-primary-500/25"
              >
                Start Your Project Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                De<span className="gradient-text">Oliveira</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              AI-powered consultancy building world-class websites and mobile
              apps — faster, smarter, better.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, title }) => (
                <a
                  key={title}
                  href={href}
                  title={title}
                  className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <span>© {currentYear} DeOliveira Consulting. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors flex items-center gap-1">
              Privacy Policy <ExternalLink size={10} />
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors flex items-center gap-1">
              Terms of Service <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
