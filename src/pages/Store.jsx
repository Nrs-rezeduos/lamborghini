import { Link } from 'react-router-dom'
import '../styles/Store.css'

const Store = () => {
  return (
    <div className="store-page">

      {/* HERO */}
      <div className="store-hero">
        <img src="/src/assets/store-hero.jpg" alt="Store" className="store-hero-img" />
        <div className="store-hero-overlay"></div>
        <div className="store-breadcrumb">
          <Link to="/">HOME</Link>
          <span>|</span>
          <span>STORE</span>
        </div>
        <div className="store-hero-content">
          <p className="store-hero-sub">LAMBORGHINI</p>
          <h1 className="store-hero-title">STORE</h1>
        </div>
      </div>

      {/* ORLEBAR BROWN SECTION */}
      <div className="store-section store-section-reverse">
        <div className="store-section-img">
          <img src="/src/assets/store1.jpg" alt="Orlebar Brown" />
        </div>
        <div className="store-section-text">
          <h2 className="store-section-title">ORLEBAR BROWN FOR AUTOMOBILI LAMBORGHINI</h2>
          <p className="store-section-desc">
            Take a look at the swimwear, beachwear and towels capsule designed by
            Orlebar Brown and inspired by Automobili Lamborghini's beauty and design.
          </p>
          <Link to="#" className="store-btn-dark">EXPLORE THE PRODUCTS →</Link>
        </div>
      </div>

      {/* KIDSWEAR SECTION */}
      <div className="store-section">
        <div className="store-section-text">
          <h2 className="store-section-title">KIDSWEAR COLLECTION</h2>
          <p className="store-section-desc">
            The Automobili Lamborghini kidswear collection never ceases to amaze
            us. Check out the items with the Racing Team Squadra Corse colors and
            official sponsors and the new colourful Iconic line designed for youngsters.
          </p>
          <Link to="#" className="store-btn-dark">FIND OUT MORE →</Link>
        </div>
        <div className="store-section-img">
          <img src="/src/assets/store2.jpg" alt="Kidswear" />
        </div>
      </div>

      {/* FLAGSHIP STORE SECTION */}
      <div className="store-section store-section-reverse">
        <div className="store-section-img">
          <img src="/src/assets/store3.jpg" alt="Flagship Store" />
        </div>
        <div className="store-section-text">
          <h2 className="store-section-title">FLAGSHIP STORE SANT'AGATA BOLOGNESE</h2>
          <p className="store-address">Via Modena 12</p>
          <p className="store-address">40019 Sant'Agata Bolognese</p>
          <p className="store-address">Bologna – Italy</p>
          <p className="store-address">+39 051 9597611</p>
          <p className="store-hours-title">Hours</p>
          <p className="store-hours">Open every day, all day.</p>
          <p className="store-hours">From October 1 to April 30 9:30 a.m. to 6:30 p.m. (last admittance at 6 p.m.)</p>
          <p className="store-hours">From May 2 to September 30 10 a.m. to 7 p.m. (last admittance at 6:30 p.m.)</p>
          <p className="store-hours-title">Days Closed in 2026</p>
          <p className="store-hours">January 1, February 15-16, February 22-23, March 1, May 1, December 25</p>
          <p className="store-hours">Early closing at 2:30 p.m. (last admittance at 2 p.m.)</p>
          <p className="store-hours">December 24, December 31.</p>
        </div>
      </div>

    </div>
  )
}

export default Store