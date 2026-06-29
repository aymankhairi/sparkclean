import React from "react";
import {
  FaBroom,
  FaBuilding,
  FaHome,
  FaCheckCircle,
  FaShieldAlt,
  FaLeaf,
  FaClock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../css/services.css";
import homeCleaningImg from "../../img/homeCleaningImg.webp";
import officeCleaningImg from "../../img/officeCleaningImg.webp";
import cleaninghero from "../../img/cleaning-hero.webp";
import PageTransition from "../../components/PageTransition";

function Services() {
  const navigate = useNavigate();
  const services = [
    {
      icon: <FaHome />,
      title: "Standard Home Cleaning",
      image: homeCleaningImg,
      price: "From €65",
      description:
        "Routine cleaning designed to keep your home fresh, hygienic, and comfortable.",
      includes: [
        "Dusting all surfaces",
        "Vacuuming carpets & rugs",
        "Floor mopping",
        "Kitchen cleaning",
        "Bathroom sanitizing",
      ],
    },
    {
      icon: <FaBuilding />,
      title: "Office Cleaning",
      image: officeCleaningImg,
      price: "From €90",
      description:
        "Professional office cleaning services that create a healthier and more productive workplace.",
      includes: [
        "Desk cleaning",
        "Reception cleaning",
        "Restroom sanitization",
        "Trash removal",
        "Glass partition cleaning",
      ],
    },
    {
      icon: <FaBroom />,
      title: "Move-In / Move-Out Cleaning",
      image: cleaninghero,
      price: "From €150",
      description:
        "Detailed property cleaning for tenants, landlords, and homeowners before or after moving.",
      includes: [
        "Inside cabinets",
        "Kitchen deep clean",
        "Bathroom deep sanitizing",
        "Doors & frames",
        "Interior windows",
      ],
    },
  ];
  const pricingPlans = [
    {
      size: "Studio / 1 Bedroom",
      price: "€65 - €90",
    },
    {
      size: "2 Bedrooms",
      price: "€90 - €130",
    },
    {
      size: "3 Bedrooms",
      price: "€130 - €180",
    },
    {
      size: "4+ Bedrooms",
      price: "€180 - €250",
    },
  ];
  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: "Fully Insured",
      text: "Your property is protected during every visit.",
    },
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly Products",
      text: "Safe for families, children, and pets.",
    },
    {
      icon: <FaClock />,
      title: "Flexible Scheduling",
      text: "Book cleaning services around your schedule.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Satisfaction Guarantee",
      text: "We don't leave until you're satisfied.",
    },
  ];
  return (
    <PageTransition>
      <div className="services-page">
        {/* SERVICES */}
        <section className="services-section">
          <div className="service-titleback">
            <span className="about-tag">Our Cleaning Services</span>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <img src={service.image} alt={service.title} />
                <div className="service-content">
                  <span className="service-price">
                    {service.icon}
                    {service.price}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.includes.map((item, idx) => (
                      <li key={idx}>
                        <FaCheckCircle />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="service-btn"
                    onClick={() => navigate("/book#book_section")}
                  >
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* PRICING */}
        <section className="pricing-section">
          <div className="service-titleback">
            <span className="about-tag">Estimated Home Cleaning Pricing</span>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div className="pricing-card" key={index}>
                <h3>{plan.size}</h3>
                <span>{plan.price}</span>
              </div>
            ))}
          </div>
        </section>
        {/* BENEFITS */}
        <section className="benefits-section">
          <div className="service-titleback">
            <span className="about-tag">Why Choose Us</span>
          </div>
          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
        {/* CTA */}
        <section className="services-cta">
          <h2>Ready For A Cleaner Space?</h2>
          <p>
            Book your cleaning service today and let us take care of the rest.
          </p>
          <button
            className="btn-primary"
            onClick={() => navigate("/book#book_section")}
          >
            Book Now
          </button>
        </section>
      </div>
    </PageTransition>
  );
}
export default Services;
