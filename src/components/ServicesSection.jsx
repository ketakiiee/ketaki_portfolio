import React, { useState } from 'react'
import { ArrowUpRight, ArrowRight, Sparkles, Layers, Smartphone, Globe, Layout, Palette, CheckCircle2 } from 'lucide-react'

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(1) // Default to 02 (index 1) as in reference

  const services = [
    {
      id: 0,
      num: '01.',
      title: 'UI/UX Design',
      tags: [
        'User Research',
        'User Flow & Personas',
        'Information Architecture',
        'Wireframing',
        'Usability Testing',
      ],
      description:
        'Conducting comprehensive user discovery, behavioral mapping, and rapid wireframing to construct intuitive digital products that minimize friction and maximize user delight.',
      previewType: 'uiux',
    },
    {
      id: 1,
      num: '02.',
      title: 'Application Design',
      tags: [
        'Cross-Platform App Design',
        'Progressive Web App',
        'Wireframing and Prototyping',
        'Custom App Theme Design',
      ],
      description:
        'Designing end-to-end mobile and desktop applications tailored for iOS and Android, focusing on intuitive gestures, fluid navigation, and responsive ergonomics.',
      previewType: 'app',
    },
    {
      id: 2,
      num: '03.',
      title: 'Website Design',
      tags: [
        'Responsive Web Design',
        'High-Converting Landing Pages',
        'SaaS Web Portals',
        'Webflow / Framer Ready',
      ],
      description:
        'Crafting bespoke, high-performance websites and landing pages that captivate visitors, elevate brand positioning, and drive measurable conversions.',
      previewType: 'web',
    },
    {
      id: 3,
      num: '04.',
      title: 'UI Design & Interaction',
      tags: [
        'Micro-Interactions',
        'Visual Hierarchy',
        'Interactive Prototyping',
        'Motion Design in Figma',
      ],
      description:
        'Elevating user interfaces with polished aesthetics, deliberate typography, harmonious color palettes, and micro-interactions that make every tap feel alive.',
      previewType: 'interaction',
    },
    {
      id: 4,
      num: '05.',
      title: 'Design System',
      tags: [
        'Figma Component Libraries',
        'Design Tokens',
        'Atomic Design Architecture',
        'Developer Handoff Specs',
      ],
      description:
        'Building scalable, maintainable multi-brand design systems with comprehensive documentation, tokenized variables, and reusable Figma components for development teams.',
      previewType: 'system',
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FBFBFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF5B26] tracking-wide mb-2">
              <span className="w-4 h-0.5 bg-[#FF5B26]"></span>
              <span>My Specialization</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight flex items-center gap-3">
              Services I Provide
              <Sparkles className="w-6 h-6 text-[#FF5B26] animate-pulse hidden sm:inline" />
            </h2>
          </div>

          <p className="text-neutral-600 text-sm sm:text-base max-w-lg leading-relaxed">
            Translating complex user problems into intuitive, pixel-perfect, and business-driven digital solutions from conceptualization to final prototype.
          </p>
        </div>

        {/* Interactive Services List */}
        <div className="space-y-4">
          {services.map((service) => {
            const isExpanded = activeService === service.id

            if (isExpanded) {
              return (
                <div
                  key={service.num}
                  className="bg-[#111111] text-white rounded-3xl p-6 sm:p-10 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-neutral-800 animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="flex flex-col lg:flex-row justify-between gap-8">
                    {/* Left Info */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-baseline gap-4 sm:gap-6">
                          <span className="text-2xl sm:text-3xl font-extrabold text-neutral-400 font-mono">
                            {service.num}
                          </span>
                          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                            {service.title}
                          </h3>
                        </div>

                        {/* Top Right Orange Circle Icon */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF5B26] flex items-center justify-center text-white shadow-lg">
                          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                      </div>

                      {/* Pill Tags */}
                      <div className="flex flex-wrap gap-2 sm:gap-2.5 my-6">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-800/90 text-neutral-200 border border-neutral-700/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                    </div>

                    {/* Right Visual Preview Mockup Box */}
                    <div className="lg:w-[380px] h-[200px] sm:h-[220px] rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden relative group">
                      {/* UI Showcase Graphic based on category */}
                      <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-neutral-800 to-neutral-950">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                          </div>
                          <span className="text-[10px] font-mono text-[#FF5B26] uppercase tracking-wider">
                            {service.title} Wireframe
                          </span>
                        </div>

                        {/* Wireframe Mockup Sketch */}
                        <div className="grid grid-cols-3 gap-2 my-auto">
                          <div className="bg-neutral-800/80 rounded-lg p-2.5 border border-neutral-700/50 flex flex-col gap-1.5">
                            <div className="w-6 h-6 rounded-md bg-[#FF5B26]/20 flex items-center justify-center">
                              <Smartphone className="w-3.5 h-3.5 text-[#FF5B26]" />
                            </div>
                            <div className="w-full h-2 bg-neutral-700 rounded"></div>
                            <div className="w-2/3 h-1.5 bg-neutral-800 rounded"></div>
                          </div>
                          <div className="bg-neutral-800/80 rounded-lg p-2.5 border border-neutral-700/50 flex flex-col gap-1.5">
                            <div className="w-6 h-6 rounded-md bg-amber-500/20 flex items-center justify-center">
                              <Layout className="w-3.5 h-3.5 text-amber-500" />
                            </div>
                            <div className="w-full h-2 bg-neutral-700 rounded"></div>
                            <div className="w-2/3 h-1.5 bg-neutral-800 rounded"></div>
                          </div>
                          <div className="bg-neutral-800/80 rounded-lg p-2.5 border border-neutral-700/50 flex flex-col gap-1.5">
                            <div className="w-6 h-6 rounded-md bg-blue-500/20 flex items-center justify-center">
                              <Layers className="w-3.5 h-3.5 text-blue-500" />
                            </div>
                            <div className="w-full h-2 bg-neutral-700 rounded"></div>
                            <div className="w-2/3 h-1.5 bg-neutral-800 rounded"></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-neutral-800 text-[11px] text-neutral-400">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Tested with 20+ SID users
                          </span>
                          <span className="text-[#FF5B26] font-semibold">Figma Prototype</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <button
                key={service.num}
                onClick={() => setActiveService(service.id)}
                className="w-full text-left bg-white hover:bg-neutral-50/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-neutral-200/70 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-4 sm:gap-8">
                  <span className="text-lg sm:text-2xl font-bold text-neutral-400 font-mono group-hover:text-[#FF5B26] transition-colors">
                    {service.num}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-neutral-900 group-hover:text-neutral-950 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-neutral-100 group-hover:bg-[#FF5B26] flex items-center justify-center text-neutral-700 group-hover:text-white transition-all duration-200 shadow-sm">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            )
          })}
        </div>

        {/* Bottom CTA: View All Services */}
        <div className="mt-12 flex justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#FF5B26] hover:bg-[#E44816] shadow-[0_8px_25px_rgba(255,91,38,0.3)] hover:shadow-[0_12px_30px_rgba(255,91,38,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 no-underline"
          >
            <span>View All Case Studies</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
