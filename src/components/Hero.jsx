import React from 'react'
import { ArrowUpRight, ArrowRight, Star, Sparkles, User, Palette, Layers, Smartphone, Layout, Compass, ShieldCheck } from 'lucide-react'
import { LinkedInIcon, DribbbleIcon, InstagramIcon, GithubIcon } from './SocialIcons'

export default function Hero() {
  const floatingTags = [
    { label: 'Prototype', color: 'bg-[#18181B] text-white', pos: 'top-4 right-2 sm:right-6' },
    { label: 'Dashboard', color: 'bg-[#FF5B26] text-white', pos: 'top-4 right-32 sm:right-36' },
    { label: 'Mobile App Design', color: 'bg-[#18181B] text-white', icon: true, pos: 'top-16 right-0 sm:right-2' },
    { label: 'Design System', color: 'bg-[#FF5B26] text-white', pos: 'top-28 right-24 sm:right-28' },
    { label: 'Website Design', color: 'bg-[#18181B] text-white', pos: 'top-28 right-0' },
  ]

  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#FF5B26]/10 via-[#FF5B26]/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Content: Sub-badge, Main Heading & Rotating Hire Me Badge */}
        <div className="relative text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          
          {/* Subtitle / Greeting */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEEE8] text-[#FF5B26] text-xs sm:text-sm font-semibold mb-4 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B26] animate-pulse"></span>
            <span>— Hello There!</span>
          </div>

          {/* Main Hero Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#111111] tracking-tight leading-[1.1] relative">
            I'm{' '}
            <span className="text-[#FF5B26] font-serif italic font-normal tracking-normal relative inline-block">
              Ketaki Haridas
              <Sparkles className="w-6 h-6 text-[#FF5B26] absolute -top-3 -right-6 animate-pulse hidden sm:inline-block" />
            </span>
          </h1>

          {/* Tagline / Institution */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-600 font-medium max-w-2xl mx-auto">
            UI/UX Designer & Freelancer · Studying at{' '}
            <span className="text-neutral-900 font-semibold underline decoration-[#FF5B26]/40 decoration-2 underline-offset-4">
              Symbiosis Institute of Design
            </span>
          </p>

          {/* Rotating "HIRE ME" Circular Badge (Positioned top-right) */}
          <div className="hidden lg:block absolute -top-2 right-4 sm:right-8 group">
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Rotating Circular Text */}
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-[10.5px] font-bold tracking-[0.2em] fill-neutral-900 uppercase">
                  <textPath href="#circlePath" startOffset="0%">
                    • HIRE ME • HIRE ME • HIRE ME
                  </textPath>
                </text>
              </svg>

              {/* Center Orange Dot with Arrow */}
              <a
                href="#contact"
                className="absolute w-12 h-12 rounded-full bg-[#FF5B26] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
                aria-label="Hire Me Contact"
              >
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Center Grid: Left Testimonial Card | Center Empty Photo Space with Orange Shape | Right Floating Pills & Socials */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Testimonial & Rating Card */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <div className="bg-white/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-neutral-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] max-w-xs animate-float">
              <div className="text-3xl text-[#FF5B26] font-serif font-bold leading-none mb-2">
                “
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                Ketaki's remarkable UI/UX thinking transformed our user journey — Highly recommended!
              </p>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-3">
                {/* Avatar Circles */}
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-neutral-800 text-white text-[10px] font-bold flex items-center justify-center">
                    JD
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#FF5B26] text-white text-[10px] font-bold flex items-center justify-center">
                    SK
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center">
                    AM
                  </div>
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-neutral-900">150+ Reviews</span>
                    <span className="text-[11px] text-amber-500 font-semibold flex items-center">
                      <Star className="w-3 h-3 fill-amber-500 inline" /> 4.9
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-500">From Valued Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Orange Organic Backdrop + EMPTY Photo Section + CTA Buttons */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative order-1 lg:order-2">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[380px] sm:h-[430px] flex items-end justify-center">
              
              {/* Vibrant Coral Orange Contoured Backdrop Shape */}
              <div className="absolute inset-0 bottom-0 bg-[#FF5B26] rounded-t-[180px] sm:rounded-t-[200px] rounded-b-[40px] shadow-[0_20px_50px_rgba(255,91,38,0.3)] overflow-hidden">
                {/* Contoured / Topographic Graphic SVG Lines */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-35"
                  viewBox="0 0 400 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-40 100 C 60 50, 160 140, 260 80 C 360 20, 420 120, 480 90"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M-40 160 C 80 110, 180 200, 280 140 C 380 80, 440 180, 480 150"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M-40 220 C 100 170, 200 260, 300 200 C 400 140, 460 240, 480 210"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M-40 280 C 120 230, 220 320, 320 260 C 420 200, 480 300, 500 270"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M-40 340 C 140 290, 240 380, 340 320 C 440 260, 500 360, 520 330"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>

                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
              </div>

              {/* Photo Area: KEPT CLEAN & EMPTY AS REQUESTED */}
              <div className="relative z-10 w-[84%] h-[82%] mb-4 rounded-3xl border-2 border-dashed border-white/50 bg-white/15 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center shadow-inner group hover:border-white/80 transition-all">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-3 shadow-md">
                  <User className="w-8 h-8 text-white/90" />
                </div>
                <p className="text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow-sm">
                  Photo Section
                </p>
                <p className="text-white/80 text-[11px] mt-1 max-w-[180px] leading-tight">
                  (Kept empty for your photo or avatar)
                </p>
              </div>

              {/* Floating Status Pill over the Photo Frame */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1 rounded-full bg-white/95 text-neutral-900 text-[11px] font-bold shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Open for Freelance Projects</span>
              </div>
            </div>

            {/* Centered Action Buttons (Overlapping bottom edge) */}
            <div className="relative z-30 mt-6 flex items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#111111] hover:bg-[#222222] shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 no-underline"
              >
                <span>Portfolio</span>
                <span className="w-6 h-6 rounded-full bg-[#FF5B26] flex items-center justify-center text-white">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-neutral-900 bg-white border border-neutral-300/80 hover:bg-neutral-50 hover:border-neutral-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 no-underline"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Right Column: Floating Skill Pills & Social Links */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end order-3">
            {/* Floating Tag Badges */}
            <div className="relative w-full max-w-xs h-[180px] hidden sm:block">
              {floatingTags.map((tag, idx) => (
                <div
                  key={tag.label}
                  className={`absolute ${tag.pos} ${tag.color} px-4 py-1.5 rounded-full text-xs font-semibold shadow-md transition-transform hover:scale-105 cursor-default flex items-center gap-1.5 ${
                    idx % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
                  }`}
                >
                  {tag.icon && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B26]"></span>}
                  {tag.label}
                </div>
              ))}
            </div>

            {/* Mobile Tags Fallback */}
            <div className="flex sm:hidden flex-wrap justify-center gap-2 mb-6">
              {['Prototype', 'Dashboard', 'Mobile App', 'Design System', 'Website Design', 'User Research'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-neutral-900 text-white rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {/* "Follow Me On" Social Icons */}
            <div className="mt-4 flex flex-col items-center lg:items-end">
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2.5">
                Follow Me On
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-neutral-200/80 text-neutral-700 hover:text-[#FF5B26] hover:border-[#FF5B26] hover:scale-110 flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-neutral-200/80 text-neutral-700 hover:text-[#FF5B26] hover:border-[#FF5B26] hover:scale-110 flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="Dribbble"
                >
                  <DribbbleIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-neutral-200/80 text-neutral-700 hover:text-[#FF5B26] hover:border-[#FF5B26] hover:scale-110 flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-neutral-200/80 text-neutral-700 hover:text-[#FF5B26] hover:border-[#FF5B26] hover:scale-110 flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
