import { Link } from 'react-router-dom'
import '../styles/Beyond.css'

const Beyond = () => {
  return (
    <div className="beyond-page">

      {/* HERO SECTION */}
      <div className="beyond-hero">
        <img src="/src/assets/beyond-hero.jpg" alt="Beyond" className="beyond-hero-img" />
        <div className="beyond-hero-overlay"></div>
        <div className="beyond-breadcrumb">
          <Link to="/">HOME</Link>
          <span>|</span>
          <span>BEYOND</span>
        </div>
        <div className="beyond-hero-content">
          <p className="beyond-hero-sub">DRIVING HUMANS</p>
          <h1 className="beyond-hero-title">BEYOND</h1>
        </div>
      </div>

      {/* OVERVIEW SECTION */}
      <div className="beyond-overview">
        <div className="beyond-overview-img">
          <img src="/src/assets/beyond1.jpg" alt="Overview" />
        </div>
        <div className="beyond-overview-text">
          <h2 className="beyond-overview-title">OVERVIEW</h2>
          <p className="beyond-overview-desc">
            The greatest challenge ever: moving forward and always raising the bar,
            going beyond the status quo to build a brand new limitless world.
          </p>
          <Link to="#" className="beyond-btn-dark">BRAND MANIFESTO →</Link>
        </div>
      </div>

      {/* FAST FORWORLD SECTION */}
      <div className="beyond-forworld">
        <div className="beyond-forworld-text">
          <p className="beyond-forworld-desc">
            Discover Fast ForWorld, Automobili Lamborghini's revolutionary digital
            platform where fans, gamers, and collectors can experience digital super
            sports cars like never before. Unlock digital collectibles, engage in
            immersive gameplay, and enjoy exclusive rewards in this cutting-edge
            interoperable ecosystem.
          </p>
          <Link to="#" className="beyond-btn-dark">ENTER NOW →</Link>
        </div>
        <div className="beyond-forworld-img">
          <img src="/src/assets/beyond2.jpg" alt="Fast ForWorld" />
        </div>
      </div>

    </div>
  )
}

export default Beyond