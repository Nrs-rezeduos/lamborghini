import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Motorsport.css'

const categories = [
  { name: 'GTP', image: '/src/assets/GTP.jpg' },
  { name: 'SUPER TROFEO', image: '/src/assets/SuperTrofeo.jpg' },
  { name: 'GT3', image: '/src/assets/GT3.jpg' },
  { name: 'MOTORSPORT MODELS', image: '/src/assets/TemarioGT3.jpg' },
  { name: 'DRIVERS', image: '/src/assets/Drivers.jpg' },
  { name: 'MOTORSPORT NEWS', image: '/src/assets/Motorsportnews.jpg' },
  { name: 'ESPORTS', image: '/src/assets/Esports.jpg' },
]

const Motorsport = () => {
  const [active, setActive] = useState(0)
  const category = categories[active]

  return (
    <div className="motorsport-page">

      {/* Header */}
      <div className="motorsport-header">
        <Link to="/" className="motorsport-back">‹ MOTORSPORT</Link>
        <Link to="/motorsport/overview" className="motorsport-overview">OVERVIEW →</Link>
      </div>

      <div className="motorsport-content">

        {/* Left list */}
        <div className="motorsport-list">
          {categories.map((c, i) => (
            <div
              key={i}
              className={`motorsport-list-item ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {c.name}
              {active === i && <div className="motorsport-underline"></div>}
            </div>
          ))}
        </div>

        {/* Right display */}
        <div className="motorsport-display">
          {category.image ? (
            <>
              <div className="motorsport-car-img">
                <img src={category.image} alt={category.name} />
              </div>
              <div className="motorsport-actions">
                <Link to={`/motorsport/${category.name.toLowerCase()}`} className="motorsport-explore-btn">
                  EXPLORE →
                </Link>
                <button className="motorsport-config-btn">START CONFIGURATION ⊡</button>
                <button className="motorsport-enquire-btn">ENQUIRE ✉</button>
              </div>
            </>
          ) : (
            <div className="motorsport-placeholder"></div>
          )}
        </div>

      </div>

      {/* Disclaimer */}
      <p className="motorsport-disclaimer">
        Energy consumption (weighted combined): 4,3 kWh/100 Km plus 11,2 l/100km; CO2 emissions (weighted combined): 272 g/km; CO2 class (weighted combined): G; CO2 class with discharged battery: G; Fuel consumption with discharged battery (combined): 14 l/100km
      </p>

    </div>
  )
}

export default Motorsport