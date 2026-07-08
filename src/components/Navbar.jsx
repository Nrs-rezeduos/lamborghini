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

const languages = ['ENGLISH', 'ITALIAN', 'GERMAN', 'FRENCH', 'SPANISH', 'CHINESE', 'JAPANESE', 'KOREAN']

const languageMap = {
  'ENGLISH': 'en',
  'ITALIAN': 'it',
  'GERMAN': 'de',
  'FRENCH': 'fr',
  'SPANISH': 'es',
  'CHINESE': 'zh-CN',
  'JAPANESE': 'ja',
  'KOREAN': 'ko'
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState('ENGLISH')

  const handleLangSelect = (lang) => {
  setSelectedLang(lang)
  setLangOpen(false)
  setTimeout(() => {
    const select = document.querySelector('.goog-te-combo')
    if (select) {
      select.value = languageMap[lang]
      select.dispatchEvent(new Event('change'))
    }
  }, 1500)
}

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'} <span>MENU</span>
          </button>
        </div>
        <div className="nav-center">
          <Link to="/">
            <img src="/src/assets/logo.png" alt="Lamborghini" className="bull-logo" />
          </Link>
        </div>
        <div className="nav-right">
          <button className="icon-btn">⊡</button>
          <button className="icon-btn">🔍</button>
        </div>
      </nav>

      {/* Fullscreen menu */}
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

        {/* Hidden Google Translate widget */}
        <div id="google_translate_element" style={{display:'none'}}></div>

        <div className="menu-footer">
          <div className="lang-selector">
            <button className="lang-toggle" onClick={() => setLangOpen(!langOpen)}>
              LANGUAGES <span>{langOpen ? '∧' : '∨'}</span>
            </button>
            {langOpen && (
              <div className="lang-dropdown">
                {languages.map((lang, i) => (
                  <button
                    key={i}
                    className={`lang-option ${selectedLang === lang ? 'active' : ''}`}
                    onClick={() => handleLangSelect(lang)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar