import React, { useContext, useEffect, useRef, useState } from "react";
import Logo from "../../img/logos.png";
import { Link } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import "../../css/header.css";
import { useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
const NavLinks = [
  { title: "Home", link: "/" },
  { title: "Services", link: "/services" },
  { title: "About Us", link: "/about" },
  { title: "Gallery", link: "/gallery" },
  { title: "Book", link: "/book" },
  { title: "Contact", link: "/contact" },
];
function TopHeader() {
  const menuRef = useRef();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  return (
    <div className="top_header">
      <div className="container">
        <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
          <img src={Logo} alt="" />
        </Link>
        <div className="header_icons">
          <div
            className="mobile_menu_btn"
            onClick={(e) => {
              {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }
            }}
          >
            <div className="icons">
              <FiMenu />
            </div>
          </div>
          {/* </Link> */}
          {menuOpen && (
            <div className="menu_backdrop" onClick={() => setMenuOpen(false)} />
          )}
          <div
            ref={menuRef}
            className={`nav_links mobile_nav ${menuOpen ? "active" : ""}`}
          >
            <ul>
              {NavLinks.map((item) => (
                <li
                  key={item.link}
                  className={`nav_item ${location.pathname === item.link ? "active" : ""}`}
                >
                  <Link
                    to={item.link}
                    onClick={() => {
                      setMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopHeader;
