import React, { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, ArrowRight, Clock, Sparkles } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX Design',
    budget: '$500 - $1,500',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF5B26] tracking-wide mb-2">
            <span className="w-4 h-0.5 bg-[#FF5B26]"></span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Let's Build Something Great
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Have a project in mind or want to discuss a potential freelance collaboration? Drop me a line below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#111111] text-white shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-green-400 text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span>Open For Freelance Work</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4">
                Let's turn your vision into an intuitive experience.
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                Currently open for freelance design projects, design system architecture, and UX consultations.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:ketakiharidas@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors no-underline text-white group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF5B26] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 font-medium">Direct Email</div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF5B26] transition-colors">
                      ketakiharidas@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#FF5B26]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 font-medium">Location</div>
                    <div className="text-xs sm:text-sm font-bold text-neutral-200">
                      Symbiosis Institute of Design · Pune, India
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#FF5B26]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 font-medium">Response Time</div>
                    <div className="text-xs sm:text-sm font-bold text-neutral-200">
                      Within 24 Hours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 text-xs text-neutral-500">
              ⚡ Available across all international time zones (IST / EST / GMT).
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-neutral-50 p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  Thank You, Message Sent!
                </h3>
                <p className="text-neutral-600 text-sm max-w-md mx-auto mb-6">
                  Thanks for reaching out! I've received your inquiry and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      name: '',
                      email: '',
                      service: 'UI/UX Design',
                      budget: '$500 - $1,500',
                      message: '',
                    })
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-[#262626] transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200/90 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5B26] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200/90 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5B26] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200/90 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5B26] focus:border-transparent transition-all"
                    >
                      <option>UI/UX Design</option>
                      <option>Mobile App Design</option>
                      <option>Website Design</option>
                      <option>Design System</option>
                      <option>Wireframing & Prototype</option>
                      <option>General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                      Project Scope / Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200/90 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5B26] focus:border-transparent transition-all"
                    >
                      <option>&lt; $500 (Quick Audit / Wireframe)</option>
                      <option>$500 - $1,500 (Small Project / Landing Page)</option>
                      <option>$1,500 - $3,000 (Complete Mobile App UI/UX)</option>
                      <option>$3,000+ (Full Product & Design System)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                    Project Details & Goals *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell me a bit about your product, timeline, and key requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200/90 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5B26] focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#FF5B26] hover:bg-[#E44816] shadow-[0_4px_16px_rgba(255,91,38,0.3)] hover:shadow-[0_8px_24px_rgba(255,91,38,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
