import { useState } from 'react'
import { Send, Mail, MessageSquare, CheckCircle2 } from 'lucide-react'

const budgetOptions = [
  'Under $5k',
  '$5k – $15k',
  '$15k – $30k',
  '$30k – $60k',
  '$60k+',
]

const projectTypes = [
  'Website',
  'Mobile App',
  'Web App',
  'AI Chatbot',
  'Other',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, wire this to a form backend (Formspree, EmailJS, etc.)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-[#0a0a0f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
              Get in Touch
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-4">
              Ready to Build
              <span className="gradient-text"> Something Great?</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Tell us about your project and we'll get back to you within 24 hours
              with a tailored proposal.
            </p>
          </div>

          {/* Quick contact badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="mailto:hello@deoliveiraconsulting.com"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all text-sm"
            >
              <Mail size={16} className="text-primary-400" />
              hello@deoliveiraconsulting.com
            </a>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all text-sm"
            >
              <MessageSquare size={16} className="text-emerald-400" />
              WhatsApp Us
            </a>
          </div>

          {/* Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl glass border border-white/10 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary-500/50 focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary-500/50 focus:bg-white/8 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Company / Project Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Acme Inc."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary-500/50 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-500/50 transition-all appearance-none cursor-pointer"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <option value="" disabled className="bg-[#0a0a0f]">
                      Select type...
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#0a0a0f]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Budget Range *
                  </label>
                  <select
                    name="budget"
                    required
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-500/50 transition-all appearance-none cursor-pointer"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <option value="" disabled className="bg-[#0a0a0f]">
                      Select budget...
                    </option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b} className="bg-[#0a0a0f]">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe what you're building, the problem it solves, and any key requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary-500/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-violet-600 text-white font-semibold text-base hover:opacity-90 transition-all cursor-pointer border-none shadow-lg shadow-primary-500/20 glow-hover"
              >
                Send Message
                <Send size={17} />
              </button>

              <p className="text-center text-xs text-slate-600">
                We respond to all inquiries within 24 hours.
              </p>
            </form>
          ) : (
            <div className="p-12 rounded-2xl glass border border-emerald-500/20 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={32} className="text-emerald-400" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Message Received!
              </h3>
              <p className="text-slate-400">
                Thanks for reaching out. We'll review your project details and
                get back to you within 24 hours with a tailored proposal.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
