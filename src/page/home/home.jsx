import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaBuilding,
  FaBroom,
  FaStar,
  FaCheckCircle,
  FaHeadset,
  FaRegClock,
  FaUsers,
} from "react-icons/fa";
import "../../css/home.css";
import homeCleaningImg from "../../img/homeCleaningImg.webp";
import cleaninghero from "../../img/cleaning-hero.webp";
import officeCleaningImg from "../../img/officeCleaningImg.webp";

export default function Home() {
  const navigate = useNavigate();
  const [quickForm, setQuickForm] = useState({
    name: "",
    phone: "",
    service: "Home Cleaning",
  });
  const validateQuickForm = () => {
    const errors = {};
    if (!quickForm.name.trim()) {
      errors.name = "Name is required";
    }
    if (!quickForm.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\+?[0-9]+$/.test(quickForm.phone)) {
      errors.phone = "Only numbers allowed";
    }
    return errors;
  };
  const [quickErrors, setQuickErrors] = useState({});
  const [quickSuccess, setQuickSuccess] = useState(false);
  const [billing, setBilling] = useState("monthly");
  const handleChoosePlan = (plan) => {
    navigate("/checkout", { state: { plan, billing } });
  };
  const plans = [
    {
      name: "Basic Clean",
      monthly: 79,
      yearly: 790,
      desc: "Essential home cleaning",
      features: [
        "1–2 bedroom home cleaning",
        "Dusting & vacuuming",
        "Kitchen surface cleaning",
        "Bathroom sanitation",
        "Trash removal",
      ],
    },
    {
      name: "Premium Deep Clean",
      monthly: 149,
      yearly: 1490,
      featured: true,
      desc: "Deep cleaning for homes & small offices",
      features: [
        "Full home / office cleaning",
        "Deep kitchen & bathroom cleaning",
        "Inside appliance cleaning",
        "Window cleaning (inside)",
        "Eco-friendly products",
      ],
    },
    {
      name: "Move In/Out Clean",
      monthly: 299,
      yearly: 2990,
      desc: "Complete cleaning for moving situations",
      features: [
        "Full property deep clean",
        "Inside cabinets & drawers",
        "Wall spot cleaning",
        "Floor deep wash",
        "Ready-to-move handover clean",
      ],
    },
  ];
  const services = [
    {
      icon: <FaHome />,
      title: "Home Cleaning",
      image: homeCleaningImg,
      slug: "home-cleaning",
      desc: "Regular and one-time cleaning services to keep your home fresh, tidy, and comfortable.",
    },
    {
      icon: <FaBuilding />,
      title: "Office Cleaning",
      image: officeCleaningImg,
      slug: "office-cleaning",
      desc: "Professional cleaning solutions designed to create a productive and welcoming work environment.",
    },
    {
      icon: <FaHome />,
      title: "Move-In / Move-Out Cleaning",
      image: cleaninghero,
      slug: "move-cleaning",
      desc: "Thorough cleaning services for tenants, landlords, and homeowners before or after moving.",
    },
  ];
  const floatingIcons = [
    FaStar,
    FaHeadset,
    FaRegClock,
    FaBroom,
    FaHome,
    FaUsers,
  ];
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Premium Cleaning <span>Made Effortless</span>
          </h1>
          <p>Professional home, office and commercial cleaning services.</p>
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => navigate("/book#book_section")}
            >
              Book Service
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate("/services")}
            >
              View Services
            </button>
          </div>
        </div>
        <div className="booking-card">
          <h3>Quick Booking</h3>
          <div className="input-group">
            <input
              placeholder="Full Name"
              value={quickForm.name}
              onChange={(e) =>
                setQuickForm({ ...quickForm, name: e.target.value })
              }
            />
            {quickErrors.name && (
              <small className="error_text">{quickErrors.name}</small>
            )}
          </div>
          <div className="input-group">
            <input
              type="tel"
              inputMode="tel"
              placeholder="Phone Number"
              value={quickForm.phone}
              onChange={(e) => {
                let value = e.target.value;
                value = value.replace(/[^0-9+]/g, "");
                if (value.indexOf("+") > 0) {
                  value = value.replace(/\+/g, "");
                }
                if ((value.match(/\+/g) || []).length > 1) {
                  value = "+" + value.replace(/\+/g, "");
                }
                setQuickForm({
                  ...quickForm,
                  phone: value,
                });
              }}
            />
            {quickErrors.phone && (
              <small className="error_text">{quickErrors.phone}</small>
            )}
          </div>
          <div className="input-group">
            <select
              value={quickForm.service}
              onChange={(e) =>
                setQuickForm({ ...quickForm, service: e.target.value })
              }
            >
              <option>Home Cleaning</option>
              <option>Office Cleaning</option>
              <option>Deep Cleaning</option>
            </select>
          </div>
          <button
            className="btn-primary"
            onClick={() => {
              const validation = validateQuickForm();
              if (Object.keys(validation).length > 0) {
                setQuickErrors(validation);
                setQuickSuccess(false);
                return;
              }
              setQuickErrors({});
              setQuickSuccess(true);
              setTimeout(() => {
                setQuickSuccess(false);
                setQuickForm({
                  name: "",
                  phone: "",
                  service: "Home Cleaning",
                });
              }, 2000);
            }}
          >
            Book
          </button>
          {quickSuccess && <div className="quick_success">Booking sent ✓</div>}
        </div>
      </section>
      <section className="trust-section">
        <span className="about-tag">Why Choose Us</span>
        <div className="trust-floating-icons">
          {Array.from({ length: 25 }).map((_, i) => {
            const Icon = floatingIcons[i % floatingIcons.length];
            return (
              <Icon
                key={i}
                className={`t-icon i${(i % 5) + 1}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  fontSize: `${20 + Math.random() * 20}px`,
                }}
              />
            );
          })}
        </div>
        <div className="trust-grid">
          <div className="trust-card">
            <FaUsers className="trust-icon" />
            <h3>5000+</h3>
            <span>Customers</span>
          </div>
          <div className="trust-card">
            <FaStar className="trust-icon" />
            <h3>98%</h3>
            <span>Satisfaction</span>
          </div>
          <div className="trust-card">
            <FaHeadset className="trust-icon" />
            <h3>24/7</h3>
            <span>Support</span>
          </div>
          <div className="trust-card">
            <FaRegClock className="trust-icon" />
            <h3>10+</h3>
            <span>Years</span>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="service-titleback">
          <span className="about-tag">Our Cleaning Services</span>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div
              className="service-card"
              key={i}
              onClick={() => navigate("/services")}
            >
              <img src={s.image} alt={s.title} />
              <div className="service-content">
                <div className="service-header">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                </div>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="services-btn-wrapper">
          <button
            className="btn-primary services-read-more"
            onClick={() => navigate("/services")}
          >
            Read More
          </button>
        </div>
      </section>
      <section className="about-section">
        <span className="about-tag">ABOUT OUR COMPANY</span>
        <h2>
          Professional Cleaning Services
          <span> You Can Trust</span>
        </h2>
        <p className="about-description">
          We deliver premium residential and commercial cleaning solutions,
          helping clients maintain spotless, healthy, and welcoming spaces. Our
          experienced team combines modern equipment with eco-friendly practices
          to ensure exceptional results every time.
        </p>
        <div className="about-features">
          <div className="feature">
            <span>✓</span>
            <p>Certified Cleaning Professionals</p>
          </div>
          <div className="feature">
            <span>✓</span>
            <p>Eco-Friendly Cleaning Products</p>
          </div>
          <div className="feature">
            <span>✓</span>
            <p>Flexible Scheduling & Fast Service</p>
          </div>
          <div className="feature">
            <span>✓</span>
            <p>100% Satisfaction Guarantee</p>
          </div>
        </div>
        <div className="about-actions">
          <button
            className="about-btn btn-primary"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>
        </div>
      </section>
      <section className="pricing">
        <div className="service-titleback">
          <h2 className="about-tag">Cleaning Plans</h2>
        </div>
        {/* TOGGLE */}
        <div className="toggleup">
          <div className="toggle">
            <button
              className={billing === "monthly" ? "active" : ""}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={billing === "yearly" ? "active" : ""}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>
        {/* GRID */}
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card`}>
              {plan.featured && (
                <div className="badge centered">Most Popular</div>
              )}
              <h3>{plan.name}</h3>
              <h1>${billing === "monthly" ? plan.monthly : plan.yearly}</h1>
              <p>{plan.desc}</p>
              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>✓ {f}</li>
                ))}
              </ul>
              <button onClick={() => handleChoosePlan(plan)}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="cta">
        <div className="cta-icon">
          <FaCheckCircle />
        </div>
        <h2>
          Ready For A <span>Spotless Space?</span>
        </h2>
        <p>
          Book professional cleaning services in minutes and enjoy a fresh,
          healthy home today.
        </p>
        <button
          className="cta-btn"
          onClick={() => navigate("/book#book_section")}
        >
          Book Now
        </button>
      </section>
    </div>
  );
}
