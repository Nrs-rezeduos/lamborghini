import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const models = [
  { 
    name: 'TEMERARIO', 
    tagline: "YOU CAN'T HIDE WHO YOU ARE", 
    image: '/src/assets/temerario.png',      // carousel image
    configImage: '/src/assets/Temerario2.png', // configure image
    color: '#e8e8e8' 
  },
  { 
    name: 'REVUELTO', 
    tagline: 'THE ICON REBORN', 
    image: '/src/assets/revuelto.png', 
    configImage: '/src/assets/Revuelto2.png',
    color: '#f0f0f0' 
  },
  { 
    name: 'URUS SE', 
    tagline: 'EXPECT THE UNEXPECTED', 
    image: '/src/assets/urus.png', 
    configImage: '/src/assets/Urus2.png',
    color: '#ececec' 
  },
]

const Home = () => {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(current === 0 ? models.length - 1 : current - 1)
  const next = () => setCurrent(current === models.length - 1 ? 0 : current + 1)
  const model = models[current]

  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero-section">
        <video src="/src/assets/Lamborghini Revuelto.mp4" autoPlay muted loop playsInline className="bg-video" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-sub">The Icon of Italy</p>
          <h1 className="hero-title">EXPECT THE<br />UNEXPECTED</h1>
          <p className="hero-desc">Uncompromising performance. Unmistakable design.</p>
          <div className="hero-btns">
            <Link to="/models" className="btn-primary">EXPLORE MODELS</Link>
            <Link to="/about" className="btn-secondary">OUR STORY</Link>
          </div>
        </div>
      </div>

      {/* MODELS SECTION */}
      <div className="models-section">
        <div className="models-header">
          <h2 className="models-title">MODELS</h2>
          <Link to="/models" className="discover-all">DISCOVER ALL MODELS →</Link>
        </div>
        <div className="model-slide" style={{ background: model.color }}>
          <button className="arrow arrow-left" onClick={prev}>‹</button>
          <div className="model-center">
            <h2 className="model-name">{model.name}</h2>
            <h1 className="model-tagline">{model.tagline}</h1>
            <img src={model.image} alt={model.name} className="model-img" />
            <div className="model-btns">
              <Link to={`/models/${model.name.toLowerCase()}`} className="btn-explore">EXPLORE THE MODEL →</Link>
              <button className="btn-config">START CONFIGURATION ⊡</button>
              <button className="btn-enquire">ENQUIRE ✉</button>
            </div>
          </div>
          <button className="arrow arrow-right" onClick={next}>›</button>
          <div className="next-peek">
            <img src={models[(current + 1) % models.length].image} alt="next" />
          </div>
        </div>
      </div>


                <div className="dealer-section">
            <div className="dealer-overlay"></div>
            <div className="dealer-content">
                <h2 className="dealer-title">DEALER LOCATOR</h2>
                <Link to="/dealerships" className="dealer-btn">FIND YOUR DEALER →</Link>
            </div>
            </div>

            {/* CONFIGURE SECTION */}
<div className="configure-section">
  <div className="configure-tabs">
    {models.map((m, i) => (
      <button
        key={i}
        className={`config-tab ${current === i ? 'active' : ''}`}
        onClick={() => setCurrent(i)}
      >
        {m.name}
      </button>
    ))}
  </div>

  <div className="configure-content">
    <div className="configure-left">
      <p className="config-label">CONFIGURE YOUR</p>
      <h2 className="config-name">{model.name}</h2>
      <div className="config-btns">
        <button className="config-start">START CONFIGURATION ⊡</button>
        <button className="config-enquire">ENQUIRE ✉</button>
      </div>
    </div>
    <div className="configure-right">
      <img src={model.configImage} alt={model.name} className="config-img" />
    </div>
  </div>

  <p className="config-disclaimer">
    Energy consumption (weighted combined): 4,3 kWh/100 Km plus 11,2 l/100km; CO2 emissions (weighted combined): 272 g/km; CO2 class (weighted combined): G; CO2 class with discharged battery: G; Fuel consumption with discharged battery (combined): 14 l/100km
    </p>
    </div>



 </div>
  )
}

export default Home