import React from 'react'
import { Sparkle } from 'lucide-react'

export default function MarqueeTicker() {
  const tickerItems = [
    'Website Design',
    'Dashboard',
    'Wireframe',
    'User Research',
    'UI/UX Design',
    'Design System',
    'Mobile App',
    'Prototyping',
    'Interaction Design',
    'Usability Testing',
  ]

  return (
    <div className="w-full bg-[#111111] text-white py-4 overflow-hidden border-y border-neutral-800 relative select-none">
      <div className="animate-marquee flex items-center">
        {/* Repeat list twice for seamless infinite scrolling */}
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center gap-6 sm:gap-8 mx-3 sm:mx-4">
            <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider uppercase whitespace-nowrap text-neutral-100">
              {item}
            </span>
            {/* Orange 4-pointed star separator */}
            <span className="text-[#FF5B26] flex items-center justify-center">
              <svg
                className="w-4 h-4 fill-current text-[#FF5B26]"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
