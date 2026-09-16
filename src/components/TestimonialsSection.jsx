import React from 'react'
import { Star, Sparkles, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Ketaki is one of the sharpest UI/UX minds we've worked with. Her ability to translate ambiguous product requirements into clean, user-friendly Figma screens saved us weeks of dev iterations.",
      author: 'Aarav Sharma',
      role: 'Founder, NextWave Labs',
      rating: 5,
      avatar: 'AS',
      accent: 'bg-[#FF5B26]',
    },
    {
      id: 2,
      quote:
        'The design system Ketaki built for our mobile app was thorough, scalable, and completely compliant with modern accessibility standards. Her Symbiosis training clearly shines through.',
      author: 'Priya Deshmukh',
      role: 'Product Lead, FinSync SaaS',
      rating: 5,
      avatar: 'PD',
      accent: 'bg-blue-600',
    },
    {
      id: 3,
      quote:
        'Working with Ketaki on freelance projects is always seamless. Punctual, proactive with feedback, and possesses a remarkable eye for modern aesthetics and micro-interactions.',
      author: 'Rohit Mehta',
      role: 'Design Director, Studio Vertex',
      rating: 5,
      avatar: 'RM',
      accent: 'bg-emerald-600',
    },
  ]

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FBFBFB] relative border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF5B26] tracking-wide mb-2">
            <span className="w-4 h-0.5 bg-[#FF5B26]"></span>
            <span>Client & Mentor Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            What People Say
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Endorsements from startup founders, mentors, and product teams on my design deliverables.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed font-medium">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${item.accent} text-white font-bold text-xs flex items-center justify-center shadow-sm shrink-0`}
                >
                  {item.avatar}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 leading-tight">
                    {item.author}
                  </h3>
                  <p className="text-[11px] text-neutral-500 leading-tight mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
