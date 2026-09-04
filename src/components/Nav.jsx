import { NavLink } from 'react-router-dom'

export default function Nav() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="inline-flex items-center gap-1.5 p-1.5 bg-white rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === '/'}
          className={({ isActive }) =>
            `px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 no-underline inline-flex items-center justify-center ${
              isActive
                ? 'bg-[#bbf77b] text-neutral-950 shadow-sm'
                : 'text-neutral-700 hover:bg-neutral-100/80 hover:text-neutral-950'
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}
