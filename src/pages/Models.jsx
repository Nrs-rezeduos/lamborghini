import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Models.css'

const models = [
  { name: 'TEMERARIO', image: '/src/assets/temerario.png' },
  { name: 'REVUELTO', image: '/src/assets/revuelto.png' },
  { name: 'URUS', image: '/src/assets/urus.png' },
  { name: 'PRE-OWNED', image: '/src/assets/temerario.png' },
  { name: 'FEW-OFF', image: '/src/assets/revuelto.png' },
  { name: 'CONCEPT', image: '/src/assets/urus.png' },
  { name: 'CUSTOMIZATION', image: '/src/assets/temerario.png' },
  { name: 'ACCESSORIES', image: '/src/assets/revuelto.png' },
]

const Models = () => {
  const [active, setActive] = useState(0)
  const model = models[active]

  return (
    <div className="models-page">

      {/* Header */}
      <div className="models-page-header">
        <Link to="/" className="models-back">‹ MODELS</Link>
        <Link to="/models/all" className="models-overview">OVERVIEW →</Link>
      </div>

      <div className="models-page-content">

        {/* Left — model list */}
        <div className="models-list">
          {models.map((m, i) => (
            <div
              key={i}
              className={`models-list-item ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {m.name}
              {active === i && <div className="models-list-underline"></div>}
            </div>
          ))}
        </div>

        {/* Right — car image + buttons */}
        <div className="models-display">
          <div className="models-car-img">
            <img src={model.image} alt={model.name} />
          </div>
          <div className="models-actions">
            <Link to={`/models/${model.name.toLowerCase()}`} className="models-explore-btn">
              EXPLORE THE MODEL →
            </Link>
            <button className="models-config-btn">START CONFIGURATION ⊡</button>
            <button className="models-enquire-btn">ENQUIRE ✉</button>
          </div>
        </div>

      </div>

      {/* Disclaimer */}
      <p className="models-disclaimer">
        Energy consumption (weighted combined): 4,3 kWh/100 Km plus 11,2 l/100km; CO2 emissions (weighted combined): 272 g/km; CO2 class (weighted combined): G; CO2 class with discharged battery: G; Fuel consumption with discharged battery (combined): 14 l/100km
      </p>

    </div>
  )
}

export default Models