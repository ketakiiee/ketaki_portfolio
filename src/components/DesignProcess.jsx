import React from 'react'
import { Sparkles, Search, Compass, PenTool, Layout, CheckCircle2 } from 'lucide-react'

export default function DesignProcess() {
  const steps = [
    {
      num: '01',
      title: 'Discover & Empathize',
      icon: <Search className="w-5 h-5 text-[#FF5B26]" />,
      desc: 'Deep-diving into user pain points, conducting qualitative interviews, surveys, and competitive bench-marking to identify true core opportunities.',
    },
    {
      num: '02',
      title: 'Define & Strategy',
      icon: <Compass className="w-5 h-5 text-[#FF5B26]" />,
      desc: 'Synthesizing research into clear user personas, empathy maps, user stories, and streamlined information architecture diagrams.',
    },
    {
      num: '03',
      title: 'Wireframe & Flow',
      icon: <PenTool className="w-5 h-5 text-[#FF5B26]" />,
      desc: 'Rapidly iterating low-fidelity layouts and structural user flows to validate information hierarchy and reduce interaction friction early.',
    },
    {
      num: '04',
      title: 'UI & Interactive Prototype',
      icon: <Layout className="w-5 h-5 text-[#FF5B26]" />,
      desc: 'Crafting high-fidelity, polished visual interfaces with purposeful typography, cohesive design systems, and responsive Figma prototypes.',
    },
    {
      num: '05',
      title: 'Test & Developer Handoff',
      icon: <CheckCircle2 className="w-5 h-5 text-[#FF5B26]" />,
      desc: 'Conducting usability tests, refining micro-interactions, and organizing meticulous design token documentation for seamless front-end implementation.',
    },
  ]

  return (
    <section id="process" className="py-20 sm:py-28 bg-white relative border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF5B26] tracking-wide mb-2">
            <span className="w-4 h-0.5 bg-[#FF5B26]"></span>
            <span>How I Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            My UI/UX Design Process
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
            A structured, human-centric methodology rooted in design thinking taught at Symbiosis Institute of Design and battle-tested across client deliverables.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="group p-6 rounded-3xl bg-neutral-50 hover:bg-white border border-neutral-200/70 hover:border-[#FF5B26]/30 shadow-sm hover:shadow-[0_12px_30px_rgba(255,91,38,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-neutral-300 group-hover:text-[#FF5B26] transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#FF5B26] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Phase {step.num}</span>
                <span>• Complete</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
