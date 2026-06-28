import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const mainLinks = [
  { label: 'MODELS', path: '/models' },
  { label: 'OWNERSHIP', path: '/ownership' },
  { label: 'DEALERSHIPS', path: '/dealerships' },
  { label: 'BEYOND', path: '/beyond' },
  { label: 'COMPANY', path: '/company' },
  { label: 'MOTORSPORT', path: '/motorsport' },
  { label: 'MUSEUM', path: '/museum' },
  { label: 'STORE', path: '/store' },
  { label: 'NEWS', path: '/news' },
]

const subLinks = [
  { label: 'Design', path: '/design' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'History', path: '/history' },
  { label: 'Financial services', path: '/financial' },
  { label: 'Warranty extension', path: '/warranty' },
  { label: 'Driving Programs', path: '/driving' },
  { label: 'Lounge', path: '/lounge' },
  { label: 'Club', path: '/club' },
  { label: 'Podcast', path: '/podcast' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'} <span>{menuOpen ? 'MENU' : 'MENU'}</span>
          </button>
        </div>
        <div className="nav-center">
          <Link to="/">
            <img src="/src/assets/logo.png" alt="Lamborghini" className="bull-logo" />
          </Link>
        </div>
        <div className="nav-right">
          <button className="icon-btn">⊡</button>
          <button className="icon-btn">⌕</button>
        </div>
      </nav>

      {/* Full screen menu */}
      <div className={`fullscreen-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-main-links">
          {mainLinks.map((link, i) => (
            <Link key={i} to={link.path} className="main-link" onClick={() => setMenuOpen(false)}>
              {link.label} <span>›</span>
            </Link>
          ))}
        </div>

        <div className="menu-divider"></div>

        <div className="menu-sub-links">
          {subLinks.map((link, i) => (
            <Link key={i} to={link.path} className="sub-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="menu-footer">
          <span className="languages">LANGUAGES ∨</span>
        </div>
      </div>
    </>
  )
}

export default Navbar