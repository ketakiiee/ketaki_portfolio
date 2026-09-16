import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ]

  const handleNavClick = (e, href) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-3.5 border-b border-neutral-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group no-underline select-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#FF5B26] text-white flex items-center justify-center font-extrabold text-lg shadow-sm group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
            K
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#FF5B26] transition-colors">
              Ketaki<span className="text-[#FF5B26]">.</span>
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 bg-white/90 backdrop-blur-md border border-neutral-200/60 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/80 rounded-full transition-all duration-150 no-underline"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right: Contact Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#111111] hover:bg-[#262626] hover:shadow-md active:scale-95 transition-all duration-200 no-underline"
          >
            Contact Me
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200 px-6 py-5 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 hover:text-[#FF5B26] rounded-xl transition-all no-underline"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-100">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white bg-[#111111] hover:bg-[#262626] transition-all no-underline"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
