import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Úvod' },
  { to: '/sluzby', label: 'Služby' },
  { to: '/o-nas', label: 'O nás' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="Svatební salón Afrodita" />
        </NavLink>

        <button
          className="nav-toggle"
          aria-label="Otevřít menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`main-nav${open ? ' open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
