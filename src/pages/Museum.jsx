import { Link } from 'react-router-dom'
import '../styles/Museum.css'

const Museum = () => {
  return (
    <div className="museum-page">

      {/* HERO */}
      <div className="museum-hero">
        <img src="/src/assets/museum-hero.jpg" alt="Museum" className="museum-hero-img" />
        <div className="museum-hero-overlay"></div>
        <div className="museum-breadcrumb">
          <Link to="/">HOME</Link>
          <span>|</span>
          <span>MUSEUM</span>
        </div>
        <div className="museum-hero-content">
          <p className="museum-hero-sub">AUTOMOBILI LAMBORGHINI</p>
          <h1 className="museum-hero-title">MUSEUM</h1>
        </div>
      </div>

      {/* OVERVIEW SECTION */}
      <div className="museum-overview">
        <div className="museum-overview-left">
          <h2 className="museum-overview-title">AUTOMOBILI LAMBORGHINI MUSEUM</h2>
          <p className="museum-overview-desc">
            The fascinating history, iconic models and tours of the production lines
            inside the Automobili Lamborghini Museum reveal 60 years of innovation
            that are projecting Lamborghini into the future.
          </p>
          <p className="museum-overview-desc">
            From the first visionary creations of the genius of Ferruccio Lamborghini,
            such as the Miura and the Countach, followed by the more recent and
            exclusive super sports cars like the Huracán Performante, the Aventador
            SVJ, and the few-offs Centenario, Sesto Elemento and Veneno, to arrive
            today with the first Lamborghinis with hybrid technology, the Sian and
            Countach LPI 800-4.
          </p>
          <p className="museum-overview-desc">
            The Automobili Lamborghini Museum offers an interactive experience,
            also provided by the new driving simulator that amplifies the emotions
            and discovery of the vehicles on display.
          </p>
          <p className="museum-overview-highlight">
            Discover the <em>"Born Incomparable"</em> exhibit dedicated to the Miura's 60<sup>th</sup>
            anniversary, and the artwork entitled <em>"Disintegrating X – Miura"</em> by the
            artist Fabian Oefner.
          </p>
          <p className="museum-open">Open every day</p>
          <p className="museum-hours">
            From October 1 to April 30, from 9:30 a.m. to 6 p.m. (last entrance at 5 p.m.)
          </p>
          <p className="museum-hours">
            From May 2 to September 30, from 9:30 a.m. to 7 p.m. (last entrance at 6 p.m.)
          </p>
        </div>
        <div className="museum-overview-right">
          <img src="/src/assets/museum1.jpg" alt="Museum interior" />
        </div>
      </div>

      {/* BOOKING SECTION */}
      <div className="museum-booking">
        <div className="museum-booking-left">
          <img src="/src/assets/museum2.jpg" alt="Museum cars" />
        </div>
        <div className="museum-booking-right">
          <p className="museum-closed-title">DAYS CLOSED IN 2026 (last entry one hour before closing time)</p>
          <p className="museum-closed-date">July 2 (early closing at 4 p.m.)</p>
          <Link to="#" className="museum-booking-btn">INFO AND BOOKING →</Link>
        </div>
      </div>

    </div>
  )
}

export default Museum