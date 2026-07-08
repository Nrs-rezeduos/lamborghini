import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok, FaLinkedin, FaWeibo, FaWeixin } from 'react-icons/fa'
import { FaXTwitter, FaThreads } from 'react-icons/fa6'
import { MdOutlineSmartDisplay } from 'react-icons/md'
import '../styles/Footer.css'

const Footer = () => {
  return (
  <div className="footer-wrapper">
    <footer className="footer">
     {/* Main links grid */}
      <div className="footer-links">
        <div className="footer-col">
          <Link to="#">COMPANY</Link>
          <Link to="#">SUSTAINABILITY</Link>
          <Link to="#">COOKIE SETTINGS</Link>
        </div>
        <div className="footer-col">
          <Link to="#">FINANCIALS</Link>
          <Link to="#">MEDIA CENTER</Link>
          <Link to="#">SITEMAP</Link>
        </div>
        <div className="footer-col">
          <Link to="#">CAREERS</Link>
          <Link to="#">RECALL CAMPAIGN</Link>
          <Link to="#">PRIVACY & LEGAL</Link>
        </div>
        <div className="footer-col">
          <Link to="#">NEWSLETTER</Link>
          <Link to="#">CONTACT US</Link>
          <Link to="#">ACCESSIBILITY</Link>
        </div>
        <div className="footer-social">
          <p className="social-label">Follow us on:</p>
          <div className="social-row">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaThreads /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaTiktok /></a>
          </div>
                  <div className="social-row">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaWeibo /></a>
          <a href="#" style={{fontSize: '12px', fontWeight: 'bold'}}>优</a>
          <a href="#"><FaWeixin /></a>
          <a href="#"><MdOutlineSmartDisplay /></a>
        </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <p className="footer-disclaimer">
        * The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you believe you are incorrectly geolocalized, contact your dealer to get valid consumption and emissions information in your area.
      </p>

      <div className="footer-divider"></div>

      <p className="footer-legal">
        This site is protected by reCAPTCHA and the <Link to="#">Privacy Policy</Link> and <Link to="#">Terms of Service</Link> of Google apply.
      </p>
      <p className="footer-copyright">
        Copyright © 2026 Automobili Lamborghini S.p.A. a company with sole shareholder subject to the management and coordination of AUDI AG.<br />
        All rights reserved. VAT no. IT 00591801204
      </p>
      <p className="footer-warning">
        WARNING ABOUT ILLEGAL OFFERS OF ALLEGED SHARES OF AUTOMOBILI LAMBORGHINI S.P.A.<br />
        Automobili Lamborghini S.p.A. got the notice that several third parties across different countries are allegedly offering shares in Automobili Lamborghini S.p.A. These offers are unlawful and originate neither from Volkswagen Aktiengesellschaft nor from any of its subsidiaries.
      </p>

      <div className="footer-logo">
        <img src="/src/assets/logo.png" alt="Lamborghini" />
      </div>

    </footer>
    </div>
  )
}

export default Footer