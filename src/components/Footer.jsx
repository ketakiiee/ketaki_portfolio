import React from 'react'
import { ArrowUp, Heart } from 'lucide-react'
import { LinkedInIcon, DribbbleIcon, InstagramIcon, GithubIcon } from './SocialIcons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-neutral-800">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#FF5B26] text-white flex items-center justify-center font-bold text-sm">
                K
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Ketaki Haridas<span className="text-[#FF5B26]">.</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm">
              UI/UX Designer & Freelancer · Symbiosis Institute of Design (SID), Pune.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#FF5B26] hover:bg-[#FF5B26] flex items-center justify-center transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#FF5B26] hover:bg-[#FF5B26] flex items-center justify-center transition-all duration-200"
              aria-label="Dribbble"
            >
              <DribbbleIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#FF5B26] hover:bg-[#FF5B26] flex items-center justify-center transition-all duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#FF5B26] hover:bg-[#FF5B26] flex items-center justify-center transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-semibold transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF5B26]" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Ketaki Haridas. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#FF5B26] fill-[#FF5B26] inline" />
            <span>for UI/UX excellence · Symbiosis Institute of Design</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
