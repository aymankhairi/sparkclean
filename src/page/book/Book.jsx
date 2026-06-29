import React, { useRef, useState, useEffect } from "react";
import "../../css/book.css";
import PageTransition from "../../components/PageTransition";
import { WiStars } from "react-icons/wi";
import { FaBroom, FaCheckCircle, FaUsers, FaRegClock } from "react-icons/fa";
import { useLocation } from "react-router-dom";
function Book() {
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    service: "Home Cleaning",
    property: "Apartment",
    date: "",
    time: "",
    number: "",
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        el.classList.add("highlight-section");
        setTimeout(() => {
          el.classList.remove("highlight-section");
        }, 1200);
      }
    }
  }, [location]);
  const validateForm = () => {
    const newErrors = {};
    if (!form.date) newErrors.date = "Please select a date";
    if (!form.time) newErrors.time = "Please select a time";
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.number.trim()) {
      newErrors.number = "Phone Number is required";
    } else if (!/^\+?[0-9]+$/.test(form.number)) {
      newErrors.number = "Only numbers allowed, + only at start";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    return newErrors;
  };
  const handleSubmit = async () => {
    console.log("SUBMIT CLICKED");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log("validation errors:", validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      console.log("MOCK BOOKING:", {
        ...form,
        createdAt: new Date().toISOString(),
      });

      setForm({
        service: "Home Cleaning",
        property: "Apartment",
        date: "",
        time: "",
        number: "",
        name: "",
        email: "",
      });

      setReservationSuccess(true);
      setLoading(false);
    }, 800);
  };
  return (
    <PageTransition>
      <div className="book_page">
        {/* WHY BOOK */}
        <section className="booking_benefits">
          <span className="about-tag">WHY CHOOSE US</span>
          <h2>Cleaning Made Simple</h2>
          <div className="benefits_grid">
            <div className="benefit_card">
              <FaRegClock />
              <h3>Flexible Scheduling</h3>
              <p>Morning, afternoon or evening appointments available.</p>
            </div>
            <div className="benefit_card">
              <FaUsers />
              <h3>Experienced Team</h3>
              <p>Professionally trained cleaners you can trust.</p>
            </div>
            <div className="benefit_card">
              <FaCheckCircle />
              <h3>Satisfaction Guaranteed</h3>
              <p>We aren't finished until you're satisfied.</p>
            </div>
          </div>
        </section>
        {/* PROCESS */}
        <section className="booking_process">
          <span className="about-tag">HOW IT WORKS</span>
          <h2>Book In Three Easy Steps</h2>
          <div className="process_grid">
            <div className="process_card">
              <div className="process_icon">
                <FaBroom />
              </div>
              <h3>Select Service</h3>
              <p>Choose home, office, deep cleaning or move cleaning.</p>
            </div>
            <div className="process_card">
              <div className="process_icon">
                <FaRegClock />
              </div>
              <h3>Choose Time</h3>
              <p>Pick the most convenient date and time.</p>
            </div>
            <div className="process_card">
              <div className="process_icon">
                <FaCheckCircle />
              </div>
              <h3>Enjoy A Spotless Space</h3>
              <p>Our team arrives fully equipped and handles everything.</p>
            </div>
          </div>
        </section>
        {/* BOOKING FORM */}
        <section className="book_section" id="book_section">
          <div className="book_container">
            <span className="book_tag">BOOK YOUR CLEANING</span>
            <h2>Get Started Today</h2>
            <p>Complete the form below and we'll contact you shortly.</p>
            <div className="modern_booking_card">
              <div className="form_section">
                <h3>Service Details</h3>
                <div className="form_grid two">
                  <div className="field">
                    <label>Cleaning Service</label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          service: e.target.value,
                        })
                      }
                    >
                      <option>Home Cleaning</option>
                      <option>Office Cleaning</option>
                      <option>Deep Cleaning</option>
                      <option>Move In / Move Out Cleaning</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Property Type</label>
                    <select
                      value={form.property}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          property: e.target.value,
                        })
                      }
                    >
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Office</option>
                      <option>Commercial Property</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form_section">
                <h3>Schedule</h3>
                <div className="form_grid two">
                  <div className="field">
                    <label>Preferred Date</label>
                    <input
                      ref={dateRef}
                      type="date"
                      value={form.date}
                      min={new Date().toISOString().split("T")[0]}
                      onClick={() => dateRef.current?.showPicker()}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          date: e.target.value,
                        })
                      }
                    />
                    {errors.date && <p className="error_text">{errors.date}</p>}
                  </div>
                  <div className="field">
                    <label>Preferred Time</label>
                    <input
                      ref={timeRef}
                      type="time"
                      value={form.time}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          time: e.target.value,
                        })
                      }
                    />
                    {errors.time && <p className="error_text">{errors.time}</p>}
                  </div>
                </div>
              </div>
              <div className="form_section">
                <h3>Contact Information</h3>
                <div className="field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                  />
                  {errors.name && <p className="error_text">{errors.name}</p>}
                </div>
                <div className="form_grid two">
                  <div className="field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className={errors.email ? "input_error" : ""}
                      placeholder="john@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                    />
                    {errors.email && (
                      <p className="error_text">{errors.email}</p>
                    )}
                  </div>
                  <div className="field">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      inputMode="tel"
                      placeholder="+1 555 123 4567"
                      value={form.number}
                      onChange={(e) => {
                        let value = e.target.value;
                        value = value.replace(/[^0-9+]/g, "");
                        if (value.indexOf("+") > 0) {
                          value = value.replace(/\+/g, "");
                        }
                        if ((value.match(/\+/g) || []).length > 1) {
                          value = "+" + value.replace(/\+/g, "");
                        }
                        setForm({
                          ...form,
                          number: value,
                        });
                      }}
                    />
                    {errors.number && (
                      <p className="error_text">{errors.number}</p>
                    )}
                  </div>
                </div>
              </div>
              <button
                className="booking_submit_btn btn-primary"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Booking..." : "Book Cleaning Service"}
              </button>
              {errors.submit && <p className="error_text">{errors.submit}</p>}
            </div>
          </div>
        </section>
        {/* SUCCESS MODAL */}
        {reservationSuccess && (
          <div
            className="success_modal_overlay"
            onClick={() => setReservationSuccess(false)}
          >
            <div className="success_modal" onClick={(e) => e.stopPropagation()}>
              <div className="success_icon">✓</div>
              <span className="book_tag">Booking Confirmed</span>
              <h2>Cleaning Service Scheduled!</h2>
              <p>
                Thank you for choosing us. We'll contact you shortly to confirm
                the details.
              </p>
              <button
                className="btn-primary"
                onClick={() => setReservationSuccess(false)}
              >
                Great!
              </button>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default Book;
