import React from 'react'
import { Sparkles, GraduationCap, Briefcase, Award, Download, ArrowRight, User, CheckCircle, Flame } from 'lucide-react'

export default function AboutSection() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#FF5B26]" />,
      title: 'Symbiosis Institute of Design',
      subtitle: 'Specializing in UI/UX & Interaction Design',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#FF5B26]" />,
      title: 'Active Freelance Designer',
      subtitle: 'Working with startups, founders & global agencies',
    },
    {
      icon: <Award className="w-5 h-5 text-[#FF5B26]" />,
      title: '30+ Design Deliverables',
      subtitle: 'End-to-end mobile apps, SaaS & design systems',
    },
    {
      icon: <Flame className="w-5 h-5 text-[#FF5B26]" />,
      title: 'Human-Centered Focus',
      subtitle: 'Data-driven research with high visual polish',
    },
  ]

  const toolchain = [
    'Figma',
    'FigJam',
    'Adobe Illustrator',
    'Photoshop',
    'Framer',
    'Webflow',
    'Protopie',
    'Miro',
    'Tailwind CSS',
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual with Orange Backdrop + EMPTY Photo Placeholder + Stat Badge */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[400px] sm:h-[450px] flex items-end justify-center">
              
              {/* Vibrant Coral Orange Contoured Backdrop */}
              <div className="absolute inset-0 bg-[#FF5B26] rounded-t-[180px] rounded-b-[40px] shadow-[0_20px_50px_rgba(255,91,38,0.25)] overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full opacity-30"
                  viewBox="0 0 400 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-30 110 C 70 60, 170 150, 270 90 C 370 30, 430 130, 490 100"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M-30 180 C 90 130, 190 220, 290 160 C 390 100, 450 200, 490 170"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M-30 250 C 110 200, 210 290, 310 230 C 410 170, 470 270, 490 240"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M-30 320 C 130 270, 230 360, 330 300 C 430 240, 490 340, 510 310"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* EMPTY Photo Frame Placeholder */}
              <div className="relative z-10 w-[86%] h-[82%] mb-5 rounded-3xl border-2 border-dashed border-white/60 bg-white/20 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center shadow-inner group">
                <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white mb-3 shadow">
                  <User className="w-8 h-8 text-white/90" />
                </div>
                <p className="text-white text-sm font-bold tracking-wide">
                  Ketaki Haridas
                </p>
                <p className="text-white/80 text-xs mt-0.5">
                  Symbiosis Institute of Design
                </p>
                <span className="mt-3 px-3 py-1 rounded-full bg-white/30 text-white text-[10px] font-medium uppercase tracking-wider">
                  Photo Space (Empty)
                </span>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute top-10 -left-4 sm:-left-6 z-20 bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-neutral-100 flex items-center gap-3 animate-float">
                <div className="w-11 h-11 rounded-xl bg-[#FFEEE8] flex items-center justify-center text-[#FF5B26] font-extrabold text-lg">
                  🎓
                </div>
                <div>
                  <div className="text-lg font-black text-neutral-900 leading-tight">SID Pune</div>
                  <div className="text-[11px] text-neutral-500 font-medium">UI/UX Design Student</div>
                </div>
              </div>

              {/* Floating Stat Badge Right */}
              <div className="absolute bottom-12 -right-4 sm:-right-6 z-20 bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-neutral-100 flex items-center gap-3 animate-float-delayed">
                <div className="w-11 h-11 rounded-xl bg-[#111111] flex items-center justify-center text-white font-extrabold text-sm">
                  450+
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900 leading-tight">Design Hours</div>
                  <div className="text-[11px] text-neutral-500 font-medium">& Freelance Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF5B26] tracking-wide mb-3">
              <span className="w-4 h-0.5 bg-[#FF5B26]"></span>
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-6">
              Who is <span className="text-[#FF5B26]">Ketaki Haridas</span>?
            </h2>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-4">
              I am an aspiring UI/UX Designer currently honing my craft at the prestigious{' '}
              <strong className="text-neutral-950 font-semibold">Symbiosis Institute of Design (SID)</strong>.
              Alongside my formal design education, I actively work as an independent{' '}
              <strong className="text-neutral-950 font-semibold">freelance designer</strong>, helping early-stage founders and established brands bring their digital product visions to life.
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
              My design philosophy merges thorough empathetic user research with meticulous, high-fidelity visual craft. I believe great products aren't just easy to use—they feel intuitive, delight the senses, and convert business metrics into real value.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70 flex items-start gap-3.5 hover:bg-neutral-100/60 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-white shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools & Software Pills */}
            <div className="mb-8">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-3">
                Tools & Design Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {toolchain.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200/80 hover:border-[#FF5B26] hover:text-[#FF5B26] transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#111111] hover:bg-[#222222] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all no-underline"
              >
                <span>Let's Discuss A Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:ketakiharidas@gmail.com?subject=Resume%20Request%20-%20Ketaki%20Haridas"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200/80 transition-all no-underline"
              >
                <Download className="w-4 h-4 text-[#FF5B26]" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
