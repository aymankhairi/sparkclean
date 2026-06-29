import React, { useState } from "react";
import "../../css/gallery.css";
import PageTransition from "../../components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import deep1 from "../../img/deep/deep1.jpg";
import deep2 from "../../img/deep/deep2.jpg";
import deep3 from "../../img/deep/deep3.jpg";
import deep4 from "../../img/deep/deep4.jpg";
import deep5 from "../../img/deep/deep5.jpg";
import deep6 from "../../img/deep/deep6.jpg";
import deep7 from "../../img/deep/deep7.jpg";
import house1 from "../../img/house/house1.jpg";
import house2 from "../../img/house/house2.jpg";
import house3 from "../../img/house/house3.jpg";
import house4 from "../../img/house/house4.jpg";
import office1 from "../../img/office/office1.jpg";
import office2 from "../../img/office/office2.jpg";
import office3 from "../../img/office/office3.jpg";
import office4 from "../../img/office/office4.jpg";
import office5 from "../../img/office/office5.jpg";

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const images = [
    { src: house1, category: "HomeCleaning" },
    { src: house2, category: "HomeCleaning" },
    { src: house3, category: "HomeCleaning" },
    { src: house4, category: "HomeCleaning" },
    { src: office1, category: "OfficeCleaning" },
    { src: office2, category: "OfficeCleaning" },
    { src: office3, category: "OfficeCleaning" },
    { src: office4, category: "OfficeCleaning" },
    { src: office5, category: "OfficeCleaning" },
    { src: deep1, category: "DeepCleaning" },
    { src: deep2, category: "DeepCleaning" },
    { src: deep3, category: "DeepCleaning" },
    { src: deep4, category: "MoveOut" },
    { src: deep5, category: "MoveOut" },
    { src: deep6, category: "MoveOut" },
    { src: deep7, category: "MoveOut" },
  ];
  const handleFilter = (value) => {
    if (value === filter) return;
    setLoading(true);
    setTimeout(() => {
      setFilter(value);
      setLoading(false);
    }, 500);
  };
  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);
  return (
    <PageTransition>
      <div className="gallery_page">
        <section className="gallery_section">
          <div className="service-titleback">
            <span className="about-tag">OUR Gallery Services</span>
          </div>
          <div className="gallery_filters">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => handleFilter("all")}
            >
              All
            </button>
            <button
              className={filter === "HomeCleaning" ? "active" : ""}
              onClick={() => handleFilter("HomeCleaning")}
            >
              Home Cleaning
            </button>
            <button
              className={filter === "OfficeCleaning" ? "active" : ""}
              onClick={() => handleFilter("OfficeCleaning")}
            >
              Office Cleaning
            </button>
            <button
              className={filter === "DeepCleaning" ? "active" : ""}
              onClick={() => handleFilter("DeepCleaning")}
            >
              Deep Cleaning
            </button>
            <button
              className={filter === "MoveOut" ? "active" : ""}
              onClick={() => handleFilter("MoveOut")}
            >
              Move In / Out
            </button>
          </div>
          <div className="gallery_grid">
            <AnimatePresence>
              {selectedImg && (
                <motion.div
                  className="lightbox"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedImg(null)}
                >
                  <motion.img
                    src={selectedImg}
                    className="lightbox_img"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {loading ? (
                <motion.div
                  key="loader"
                  className="gallery_loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="loader_ring"></div>
                </motion.div>
              ) : (
                <>
                  {filteredImages.map((img, i) => (
                    <motion.div
                      key={i}
                      layout
                      initial={{ opacity: 0, scale: 0.9, y: 40 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      whileHover={{ scale: 1.04, y: -10 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      exit={{ opacity: 0 }}
                      className="gallery_item"
                      onClick={() => setSelectedImg(img.src)}
                    >
                      <img src={img.src} alt={`gallery-${i}`} />
                      <div className="gallery_overlay_card" />
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default Gallery;
