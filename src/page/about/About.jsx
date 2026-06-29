import React from "react";
import "../../css/about.css";
import PageTransition from "../../components/PageTransition";
import { useNavigate } from "react-router-dom";
import { FaBroom, FaSprayCan, FaCheckCircle, FaThumbsUp } from "react-icons/fa";
function Story() {
  const navigate = useNavigate();
  const faqs = [
    {
      question: "Do I need to provide cleaning supplies?",
      answer:
        "No. Our team arrives fully equipped with professional cleaning products and equipment.",
    },
    {
      question: "Are your cleaners insured?",
      answer: "Yes. All staff members are insured and professionally trained.",
    },
    {
      question: "Can I reschedule my booking?",
      answer:
        "Yes. You can reschedule with advance notice at no additional charge.",
    },
  ];
  return (
    <PageTransition>
      <div className="story_page">
        {/* ABOUT SECTION (REPLACED CONTENT) */}
        <section className="about-section">
          <span className="about-tag">ABOUT OUR COMPANY</span>
          <h2>
            Professional Cleaning Services <span>You Can Trust</span>
          </h2>
          <p className="about-description">
            We deliver premium residential and commercial cleaning solutions,
            helping clients maintain spotless, healthy, and welcoming spaces.
            Our experienced team combines modern equipment with eco-friendly
            practices to ensure exceptional results every time.
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
        </section>
        {/* IMPACT / STATS SECTION */}
        <section className="about-impact">
          <div className="impact-header">
            <span className="about-tag">OUR IMPACT</span>
            <h2>Cleaning That Makes a Real Difference</h2>
            <p>
              We don’t just clean spaces — we improve health, comfort, and
              productivity for hundreds of families and businesses every week.
            </p>
          </div>
          <div className="impact-grid">
            <div className="impact-card">
              <h3>5000+</h3>
              <p>Homes Cleaned</p>
            </div>
            <div className="impact-card">
              <h3>1200+</h3>
              <p>Commercial Spaces</p>
            </div>
            <div className="impact-card">
              <h3>98%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="impact-card">
              <h3>24/7</h3>
              <p>Support Availability</p>
            </div>
          </div>
        </section>
        {/* HOW WE WORK */}
        <section className="about-process">
          <div className="process-header">
            <span className="about-tag">HOW IT WORKS</span>
            <h2>Simple 3-Step Cleaning Process</h2>
            <p>
              We make booking and cleaning effortless — just choose a service,
              and we handle the rest.
            </p>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-icon">
                <FaBroom />
              </div>
              <h3>Book a Service</h3>
              <p>
                Select your cleaning type and schedule a time that fits your
                routine. Our system confirms instantly.
              </p>
            </div>
            <div className="process-card">
              <div className="process-icon">
                <FaSprayCan />
              </div>
              <h3>We Clean</h3>
              <p>
                Our trained professionals arrive on time with eco-friendly
                equipment and handle everything with care.
              </p>
            </div>
            <div className="process-card">
              <div className="process-icon">
                <FaThumbsUp />
              </div>
              <h3>Enjoy Clean Space</h3>
              <p>
                Relax and enjoy a fresh, spotless environment with guaranteed
                satisfaction.
              </p>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="faq-section">
          <div className="service-titleback">
            <span className="about-tag">Frequently Asked Questions</span>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
export default Story;
