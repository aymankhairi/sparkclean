import React from "react";
import "../../css/experience.css";
import PageTransition from "../../components/PageTransition";
import { useNavigate } from "react-router-dom";
import heroImg from "../../img/reservation.webp";
import chefImg from "../../img/chef.webp";
import { motion } from "framer-motion";
import {
  FaGlassCheers,
  FaUtensils,
  FaFire,
  FaIceCream,
  FaCoffee,
} from "react-icons/fa";
function Experience() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="exp_page">
        {/* HERO */}
        <section
          className="exp_hero"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="exp_overlay" />

          <div className="exp_hero_content">
            <span className="exp_tag">Dining Experience</span>
            <h1>A Journey Beyond Taste</h1>
            <p>
              Every detail is designed to awaken emotion, memory, and elegance.
            </p>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="exp_section">
          <div className="exp_block">
            <h2>The Philosophy</h2>
            <p>
              We believe dining is not just eating — it is a crafted moment of
              emotion, atmosphere, and storytelling. Every dish reflects
              precision and passion.
            </p>
          </div>
        </section>

        {/* CHEF STORY */}
        <section className="exp_split">
          <div className="exp_text">
            <span className="exp_tag">The Chef</span>

            <h2>Crafted With Precision</h2>

            <p>
              Trained in world-class Michelin kitchens, our chef blends
              technique with creativity to create unforgettable dining moments.
            </p>

            <p className="exp_quote">
              “Cooking is not technique — it is emotion served on a plate.”
            </p>
          </div>

          <div className="exp_image">
            <img src={chefImg} alt="Chef" />
          </div>
        </section>

        {/* JOURNEY */}
        <section className="exp_journey">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Your Dining Journey
          </motion.h2>

          <div className="exp_steps">
            <motion.div
              className="step"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaGlassCheers className="step_icon" />
              <span>Welcome & Signature Drink</span>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaUtensils className="step_icon" />
              <span>Curated Starter Course</span>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaFire className="step_icon" />
              <span>Main Culinary Experience</span>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaIceCream className="step_icon" />
              <span>Dessert Finale</span>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaCoffee className="step_icon" />
              <span>Closing Moment</span>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="exp_cta">
          <h2>Experience It Yourself</h2>
          <p>Reserve your table and step into a world of flavor and emotion.</p>

          <button className="btn_primary" onClick={() => navigate("/book")}>
            Reserve Table
          </button>
        </section>
      </div>
    </PageTransition>
  );
}

export default Experience;
