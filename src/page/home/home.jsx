import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/home.css";
import PageTransition from "../../components/PageTransition";
import dish1 from "../../img/dish1.webp";
import dish2 from "../../img/dish2.webp";
import dish3 from "../../img/dish3.webp";
import { WiStars } from "react-icons/wi";

import about from "../../img/about.webp";
import reservationImg from "../../img/reservation.webp";
function Home() {
  const navigate = useNavigate();
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const dishes = [
    {
      img: dish1,
      title: "Fried Shrimp Delight",
      desc: "Crispy fried shrimp with signature house sauce",
    },
    {
      img: dish2,
      title: "Herb Grilled Fish",
      desc: "Fresh fish with seasonal vegetables & lemon glaze",
    },
    {
      img: dish3,
      title: "Royal Caviar Plate",
      desc: "Premium caviar served with artisan greens",
    },
  ];
  return (
    <PageTransition>
      <div className="home">
        {/* HERO */}
        <section className="hero">
          <div className="hero_overlay" />

          <div className="hero_content">
            <span className="hero_tag">Fine Dining Experience</span>

            <h1>
              Where Taste <br /> Meets Luxury
            </h1>

            <p>
              An unforgettable culinary journey crafted with passion, elegance,
              and the finest ingredients.
            </p>

            <div className="hero_actions">
              <button className="btn_primary" onClick={() => navigate("/book")}>
                Reserve Table
              </button>
              <button
                className="btn_secondary"
                onClick={() => navigate("/menu")}
              >
                View Menu
              </button>
            </div>
          </div>
        </section>

        {/* SIGNATURE */}
        <section className="section">
          <h2 className="section_title">Signature Creations</h2>

          <div className="dish_grid">
            {dishes.map((dish, i) => (
              <div className="dish_card" key={i}>
                <img src={dish.img} alt={dish.title} />

                <div className="dish_overlay">
                  <h3>{dish.title}</h3>
                  <p>{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STORY */}
        <section className="section story">
          <div className="story_container">
            <div className="story_visual">
              <div className="story_image_wrapper">
                <img src={about} alt="" />
              </div>
            </div>

            <div className="story_text">
              <span className="section_tag">Our Heritage</span>

              <h2>
                A Journey Crafted <br /> With Passion
              </h2>

              <p>
                Rooted in timeless culinary traditions, our kitchen blends
                artistry and precision to create an experience that transcends
                dining. Every plate tells a story of craftsmanship, culture, and
                emotion.
              </p>

              <p className="story_quote">
                “We don’t just serve food — we create memories that linger.”
              </p>
              <br />

              <button
                className="btn_secondary"
                onClick={() => navigate("/about")}
              >
                Discover More
              </button>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="experience">
          <div className="experience_overlay" />

          <div className="experience_container">
            <span className="experience_tag">The Atmosphere</span>

            <h2>
              An Evening <br /> Beyond Dining
            </h2>

            <p>
              Step into a world of soft candlelight, curated soundscapes, and
              unforgettable culinary artistry designed to awaken every sense.
            </p>

            <div className="experience_stats">
              <div>
                <h3>20+</h3>
                <p>Signature Dishes</p>
              </div>
              <div>
                <h3>5★</h3>
                <p>Guest Experience</p>
              </div>
              <div>
                <h3>10+</h3>
                <p>Years Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESERVATION */}

        <section
          className="reservation"
          style={{ backgroundImage: `url(${reservationImg})` }}
        >
          <div className="reservation_overlay" />

          <div className="reservation_container">
            <span className="reservation_tag">Private Dining</span>

            <h2>
              Reserve Your <br /> Luxury Experience
            </h2>

            <p>
              Secure your table in advance and enjoy a curated fine dining
              journey designed for unforgettable moments.
            </p>

            {/* FORM */}
            <div className="reservation_form">
              <div
                className="input_group"
                onClick={() => dateRef.current?.showPicker()}
              >
                <input ref={dateRef} type="date" placeholder="Select Date" />
              </div>
              <div
                className="input_group"
                onClick={() => timeRef.current?.showPicker()}
              >
                <input type="time" ref={timeRef} placeholder="Select Time" />
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

            <div className="reservation_note">
              <WiStars />
              Limited seats available every evening
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default Home;
