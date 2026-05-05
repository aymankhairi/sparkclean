import React from "react";
import { Link } from "react-router-dom";
import "../../css/footer.css";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        {/* BRAND */}
        <div className="footer_box">
          <h2>Reverie</h2>
          <p>
            Your one-stop shop for fashion,
            <br /> accessories, and lifestyle products. Fast delivery, best
            prices and trusted quality.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer_box">
          <h3>Quick Links</h3>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
          <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
            About
          </Link>
          {/* <Link to="/accessories" onClick={() => window.scrollTo(0, 0)}>Shop</Link> */}
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            Contact
          </Link>
        </div>

        {/* SUPPORT */}
        <div className="footer_box">
          <h3>Discover</h3>

          <Link to="/menu" onClick={() => window.scrollTo(0, 0)}>
            Our Menu
          </Link>

          {/* <Link to="/chef" onClick={() => window.scrollTo(0, 0)}>
            The Chef
          </Link> */}

          <Link to="/experience" onClick={() => window.scrollTo(0, 0)}>
            Dining Experience
          </Link>

          <Link to="/book" onClick={() => window.scrollTo(0, 0)}>
            Book a Table
          </Link>
        </div>

        {/* CONTACT */}
        <div className="footer_box">
          <h3>Contact</h3>
          <a className="contact_item" href="mailto:support@vive.com">
            <span className="icon_wrap">
              <FaEnvelope />
            </span>
            support@Reverie.com
          </a>

          <a
            className="contact_item"
            href="https://wa.me/31123456789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon_wrap">
              <FaWhatsapp />
            </span>
            +31 123 456 789
          </a>

          <a
            className="contact_item"
            href="https://www.google.com/maps?q=Rotterdam,Netherlands"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon_wrap">
              <FaMapMarkerAlt />
            </span>
            Rotterdam, Netherlands
          </a>
        </div>
      </div>

      <div className="footer_bottom">
        <p>© {new Date().getFullYear()} Reverie. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
