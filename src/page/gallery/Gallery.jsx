import React, { useState } from "react";
import "../../css/gallery.css";
import PageTransition from "../../components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
// images//
import img1 from "../../img/dish1.webp";
import img2 from "../../img/dish2.webp";
import img3 from "../../img/dish3.webp";
import img4 from "../../img/about.webp";
import img5 from "../../img/reservation.webp";
import TruffleBurrata from "../../img/TruffleBurrata.webp";
import SearedScallops from "../../img/SearedScallops.webp";
import BeefCarpaccio from "../../img/BeefCarpaccio.webp";
import menuImg from "../../img/menu.webp";
import LobsterBisque from "../../img/LobsterBisque.webp";
import FoieGrasToast from "../../img/FoieGrasToast.webp";
import TunaTartare from "../../img/TunaTartare.webp";
import WildMushroomSoup from "../../img/WildMushroomSoup.webp";
import CrispyCalamari from "../../img/CrispyCalamari.webp";
import HerbCrustedSalmon from "../../img/HerbCrustedSalmon.webp";
import WagyuSteak from "../../img/WagyuSteak.webp";
import DuckConfit from "../../img/DuckConfit.webp";
import LobsterThermidor from "../../img/LobsterThermidor.webp";
import FiletMignon from "../../img/FiletMignon.webp";
import RisottoNero from "../../img/RisottoNero.webp";
import ChickenSupreme from "../../img/ChickenSupreme.webp";
import VegetableWellington from "../../img/VegetableWellington.webp";
import ChocolateSymphony from "../../img/ChocolateSymphony.webp";
import CremeBrulee from "../../img/CremeBrulee.webp";
import TiramisuElegance from "../../img/TiramisuElegance.webp";
import RaspberryCheesecake from "../../img/RaspberryCheesecake.webp";
import PannaCotta from "../../img/PannaCotta.webp";
import LavaCake from "../../img/LavaCake.webp";
import MangoSorbet from "../../img/MangoSorbet.webp";
import MacaronSelection from "../../img/MacaronSelection.webp";
import SignatureCocktail from "../../img/SignatureCocktail.webp";
import VintageRedWine from "../../img/VintageRedWine.webp";
import ChampagneRoyale from "../../img/ChampagneRoyale.webp";
import ArtisanEspresso from "../../img/ArtisanEspresso.webp";
import FreshMojito from "../../img/FreshMojito.webp";
import IcedMatchaLatte from "../../img/IcedMatchaLatte.webp";
import CraftBeer from "../../img/CraftBeer.webp";
import AgedWhiskey from "../../img/AgedWhiskey.webp";
import Chef from "../../img/chef.webp";
import StoryHero from "../../img/storyHero.webp";
import foodgallery from "../../img/foodgallery.webp";

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  const images = [
    { src: TruffleBurrata, category: "Starters" },
    { src: SearedScallops, category: "Starters" },
    { src: BeefCarpaccio, category: "Starters" },
    { src: menuImg, category: "Starters" },
    { src: LobsterBisque, category: "Starters" },
    { src: FoieGrasToast, category: "Starters" },
    { src: TunaTartare, category: "Starters" },
    { src: WildMushroomSoup, category: "Starters" },
    { src: CrispyCalamari, category: "Starters" },

    { src: HerbCrustedSalmon, category: "Main Course" },
    { src: WagyuSteak, category: "Main Course" },
    { src: DuckConfit, category: "Main Course" },
    { src: LobsterThermidor, category: "Main Course" },
    { src: FiletMignon, category: "Main Course" },
    { src: RisottoNero, category: "Main Course" },
    { src: ChickenSupreme, category: "Main Course" },
    { src: VegetableWellington, category: "Main Course" },

    { src: img1, category: "Main Course" },
    { src: img2, category: "Main Course" },
    { src: img3, category: "Main Course" },

    { src: ChocolateSymphony, category: "Desserts" },
    { src: CremeBrulee, category: "Desserts" },
    { src: TiramisuElegance, category: "Desserts" },
    { src: RaspberryCheesecake, category: "Desserts" },
    { src: PannaCotta, category: "Desserts" },
    { src: LavaCake, category: "Desserts" },
    { src: MangoSorbet, category: "Desserts" },
    { src: MacaronSelection, category: "Desserts" },

    { src: SignatureCocktail, category: "Drinks" },
    { src: VintageRedWine, category: "Drinks" },
    { src: ChampagneRoyale, category: "Drinks" },
    { src: ArtisanEspresso, category: "Drinks" },
    { src: FreshMojito, category: "Drinks" },
    { src: IcedMatchaLatte, category: "Drinks" },
    { src: CraftBeer, category: "Drinks" },
    { src: AgedWhiskey, category: "Drinks" },
  ];
  const handleFilter = (value) => {
    if (value === filter) return;

    setLoading(true);

    setTimeout(() => {
      setFilter(value);
      setLoading(false);
    }, 500); // sweet spot for luxury feel
  };
  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);
  return (
    <PageTransition>
      <div className="gallery_page">
        {/* HERO */}
        <section className="gallery_hero">
          <div className="gallery_overlay" />

          <div className="gallery_hero_content">
            <span className="gallery_tag">Visual Experience</span>
            <h1>Moments Crafted in Flavor & Light</h1>
            <p>Every frame tells a story of taste, emotion, and elegance.</p>
          </div>
        </section>

        {/* GRID */}
        <section className="gallery_section">
          <div className="gallery_filters">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => handleFilter("all")}
            >
              All
            </button>
            <button
              className={filter === "Starters" ? "active" : ""}
              onClick={() => handleFilter("Starters")}
            >
              Starters
            </button>
            <button
              className={filter === "Main Course" ? "active" : ""}
              onClick={() => handleFilter("Main Course")}
            >
              Main Course
            </button>
            <button
              className={filter === "Desserts" ? "active" : ""}
              onClick={() => handleFilter("Desserts")}
            >
              Desserts
            </button>
            <button
              className={filter === "Drinks" ? "active" : ""}
              onClick={() => handleFilter("Drinks")}
            >
              Drinks
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
                    // <div className="gallery_item" key={i}>
                    <motion.div
                      key={i}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="gallery_item"
                      onClick={() => setSelectedImg(img.src)}
                    >
                      <img src={img.src} alt={`gallery-${i}`} />
                      <div className="gallery_overlay_card" />
                    </motion.div>

                    // </div>
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
