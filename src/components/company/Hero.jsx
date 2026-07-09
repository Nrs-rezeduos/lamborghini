import "./Hero.css";

export default function Hero() {
  return (
    <section className="company-hero">

      <div className="hero-overlay"></div>

      <img
        src="/src/assets/company/company-hero.jpeg"
        alt="Company"
        className="hero-image"
      />

      <div className="hero-content">

        <div className="breadcrumb">
          <span>HOME</span>
          <span className="divider">|</span>
          <span className="active">COMPANY</span>
        </div>

        <p className="hero-subtitle">
          AUTOMOBILI LAMBORGHINI
        </p>

        <h1>
          COMPANY
        </h1>

      </div>

    </section>
  );
}