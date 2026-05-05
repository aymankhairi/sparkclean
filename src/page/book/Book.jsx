import React, { useRef } from "react";
import "../../css/book.css";
import PageTransition from "../../components/PageTransition";
import bookingHero from "../../img/reservation.webp";
import book from "../../img/book2.webp";
import { WiStars } from "react-icons/wi";

function Book() {
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  return (
    <PageTransition>
      <div className="book_page">
        {/* HERO */}
        <section
          className="book_hero"
          style={{ backgroundImage: `url(${bookingHero})` }}
        >
          <div className="book_overlay" />
          <div className="book_hero_content">
            <span className="book_tag">Reservation</span>
            <h1>Reserve Your Experience</h1>
            <p>
              Every table is a stage for unforgettable moments. Secure yours.
            </p>
          </div>
        </section>

        {/* FORM */}
        <section className="book_section">
          <div className="book_overlay" />
          <div className="book_container">
            <span className="book_tag">Private Dining</span>
            <h2>Where Every Moment Becomes a Memory</h2>
            <p>
              Reserve early and embark on a dining journey where every detail is
              crafted to be remembered.
            </p>
            {/* <h2>Book a Table</h2> */}

            <div className="book_form">
              <div
                className="input_group"
                onClick={() => dateRef.current?.showPicker()}
              >
                <input
                  ref={dateRef}
                  type="date"
                  placeholder="Select Date"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div
                className="input_group"
                onClick={() => timeRef.current?.showPicker()}
              >
                <input ref={timeRef} type="time" placeholder="Select Time" />
              </div>

              <select>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests or more</option>
              </select>

              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />

              <button className="btn_primary full_btn">
                Confirm Reservation
              </button>
            </div>

            <p className="book_note">
              <WiStars />
              Limited seating available. Reservations recommended.
            </p>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default Book;
