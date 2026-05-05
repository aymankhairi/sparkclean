import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./page/home/home";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import Contact from "./page/contact/Contact";
import About from "./page/about/About";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrolToTop";
import Menu from "./page/menu/Menu";
import Book from "./page/book/Book";
import Gallery from "./page/gallery/Gallery";
import Experience from "./page/experience/Experience";
function App() {
  return (
    <>
      <header>
        <TopHeader></TopHeader>
        <BtmHeader></BtmHeader>
      </header>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />
      <AnimatePresence mode="wait">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/book" element={<Book />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
