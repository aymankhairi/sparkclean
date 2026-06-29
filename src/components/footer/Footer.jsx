import React from "react";
import { Link } from "react-router-dom";
import "../../css/footer.css";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_brand">
          <h2>SPARK CLEAN</h2>
          <p>
            Professional cleaning services for homes and workplaces, delivering
            spotless results with trusted experts, modern equipment, and
            eco-friendly solutions.
          </p>
        </div>
        <div className="footer_links">
          <h3>Navigation</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div className="footer_links">
          <h3>Services</h3>
          <Link to="/book">Schedule Cleaning</Link>
          <Link to="/services">Residential Cleaning</Link>
          <Link to="/services">Commercial Cleaning</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer_contact">
          <h3>Contact</h3>
          <a href="mailto:support@sparkclean.com">
            <FaEnvelope />
            <span>support@sparkclean.com</span>
          </a>
          <a
            href="https://wa.me/31123456789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            <span>+31 123 456 789</span>
          </a>
          <a
            href="https://www.google.com/maps?q=Rotterdam,Netherlands"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt />
            <span>Rotterdam, Netherlands</span>
          </a>
        </div>
      </div>
      <div className="footer_bottom">
        <p>© {new Date().getFullYear()} Spark Clean. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
