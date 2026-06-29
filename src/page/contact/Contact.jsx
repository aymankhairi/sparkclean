import React, { useState } from "react";
import "../../css/contact.css";
import PageTransition from "../../components/PageTransition";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const emailRegex = /\S+@\S+\.\S+/;
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.subject) newErrors.subject = "Subject is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };
  return (
    <PageTransition>
      <div className="contact_page">
        {/* HERO (Book style) */}
        <section className="contact_hero">
          <span className="about-tag">GET IN TOUCH</span>
          <h1>We’re Here to Help</h1>
          <p>
            Questions, bookings, or support — our team is ready to assist you
            anytime.
          </p>
        </section>
        {/* INFO GRID (Book benefits style) */}
        <section className="contact_info_section">
          <div className="contact_grid">
            <div className="contact_card">
              <div className="icon_badge">
                <FaMapMarkerAlt />
              </div>
              <h3>Location</h3>
              <a
                href="https://www.google.com/maps?q=Rotterdam,Netherlands"
                target="_blank"
                rel="noopener noreferrer"
                className="contact_link_block"
              >
                123 Luxury Avenue
                <br />
                Los Angeles, CA
              </a>
            </div>
            <div className="contact_card">
              <div className="icon_badge">
                <FaClock />
              </div>
              <h3>Opening Hours</h3>
              <p>
                Mon - Fri: 3PM - 1AM
                <br />
                Sat - Sun: 4PM - 1AM
              </p>
            </div>
            <div className="contact_card">
              <div className="icon_badge">
                <FaPhoneAlt />
              </div>
              <h3>Contact</h3>
              <a
                href="https://wa.me/31123456789"
                className="email-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                +31 123 456 789
              </a>
              <br />
              <a href="mailto:support@sparkclean.com" className="email-link">
                <FaEnvelope />
                support@sparkclean.com
              </a>
            </div>
          </div>
        </section>
        <section className="contact_form_section">
          <div className="modern_contact_card">
            <span className="book_tag">SEND MESSAGE</span>
            <h2>Contact Our Team</h2>
            <p>Fill out the form and we’ll get back to you shortly.</p>
            <form onSubmit={handleSubmit}>
              <div className="form_grid two">
                <div className="field">
                  <label>Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <small className="error">{errors.name}</small>
                  )}
                </div>
                <div className="field">
                  <label>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="john@email.com"
                  />
                  {errors.email && (
                    <small className="error">{errors.email}</small>
                  )}
                </div>
              </div>
              <div className="field">
                <label>Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <small className="error">{errors.subject}</small>
                )}
              </div>
              <div className="field">
                <label>Message</label>
                <textarea
                  rows="5"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Write your message..."
                />
              </div>
              <button type="submit" className="booking_submit_btn btn-primary">
                {sent ? "Message Sent ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </section>
        <section className="contact_map_section">
          <div className="contact_map_container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default Contact;
