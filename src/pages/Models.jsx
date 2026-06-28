// Models.jsx, About.jsx, Contact.jsx — temporary placeholder
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Models.css'

const models = [
  {
    name: 'TEMERARIO',
    tagline: "YOU CAN'T HIDE WHO YOU ARE",
    image: '/src/assets/temerario.png',
    color: '#1a1a2e'
  },
  {
    name: 'REVUELTO',
    tagline: 'THE ICON REBORN',
    image: '/src/assets/revuelto.png',
    color: '#1a0a0a'
  },
  {
    name: 'URUS SE',
    tagline: 'EXPECT THE UNEXPECTED',
    image: '/src/assets/urus.png',
    color: '#0a1a0a'
  },
]

const Models = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(current === 0 ? models.length - 1 : current - 1)
  const next = () => setCurrent(current === models.length - 1 ? 0 : current + 1)

  const model = models[current]

  return (
    <div className="models-page">
      <div className="model-slide" style={{ background: model.color }}>

        {/* Prev arrow */}
        <button className="arrow arrow-left" onClick={prev}>‹</button>

        {/* Center content */}
        <div className="model-center">
          <h2 className="model-name">{model.name}</h2>
          <h1 className="model-tagline">{model.tagline}</h1>
          <img src={model.image} alt={model.name} className="model-img" />
          <div className="model-btns">
            <Link to={`/models/${model.name.toLowerCase()}`} className="btn-explore">
              EXPLORE THE MODEL →
            </Link>
            <button className="btn-config">START CONFIGURATION ⊡</button>
            <button className="btn-enquire">ENQUIRE ✉</button>
          </div>
        </div>

        {/* Next arrow */}
        <button className="arrow arrow-right" onClick={next}>›</button>

        {/* Peek of next car */}
        <div className="next-peek">
          <img src={models[(current + 1) % models.length].image} alt="next" />
        </div>

      </div>
    </div>
  )
}

export default Models