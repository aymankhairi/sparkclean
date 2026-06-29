import React, { useEffect, useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { FaArrowDownLong } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";
import { CiCircleChevDown } from "react-icons/ci";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "Services", link: "/services" },
  { title: "About Us", link: "/about" },
  { title: "Gallery", link: "/gallery" },
  { title: "Book", link: "/book" },
  { title: "Contact", link: "/contact" },
];
function BtmHeader() {
  const menuRef = useRef();
  const categoryRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setIsCategoryOpen(false);
  }, [location]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="btm_header">
        <div className="container">
          <nav className="nav">
            <div ref={categoryRef} className="category_nav"></div>
            <div
              ref={menuRef}
              className={`nav_links ${menuOpen ? "active" : ""}`}
            >
              {NavLinks.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setMenuOpen(false);
                  }}
                >
                  <li
                    className={`nav_item ${location.pathname === item.link ? "active" : ""}`}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default BtmHeader;
