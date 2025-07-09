// src/Components/Header.js
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleDropdownSelect = (path) => {
    setSelectedDropdown(path);
    setIsDropdownOpen(false);
    navigate(path);
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="/Images/Home/10002.png"
          alt="Laundry Logo"
          className="logo-img"
        />
      </div>
      <div className="menu">
        <button className="menu-toggle" onClick={toggleMenu}>
          MENU ☰
        </button>
      </div>

      <nav className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/Aboutpage"
          className={location.pathname === "/Aboutpage" ? "active" : ""}
        >
          About
        </Link>
        <Link
          to="/Services"
          className={location.pathname === "/Services" ? "active" : ""}
        >
          Services
        </Link>

        {/* Dropdown on Hover */}
        <div className="dropdown">
          <Link
            to="/Blogpage"
            className={`dropdown-toggle ${
              location.pathname.includes("Blog") ? "active" : ""
            }`}
          >
            Blog
          </Link>
          <div className="dropdown-menu">
            <Link
              to="/Blogpage"
              className={`dropdown-item ${
                location.pathname === "/Blogpage" ? "selected" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              to="/BlogDetails"
              className={`dropdown-item ${
                location.pathname === "/BlogDetails" ? "selected" : ""
              }`}
            >
              Blog Details
            </Link>
            <Link
              to="/Element"
              className={`dropdown-item ${
                location.pathname === "/Element" ? "selected" : ""
              }`}
            >
              Element
            </Link>
          </div>
        </div>

        <Link
          to="/Contact"
          className={location.pathname === "/Contact" ? "active" : ""}
        >
          Contact
        </Link>
      </nav>
      <div className="contact-section">
        <div className="contact">
          <img
            src="/Images/Home/10018.png"
            alt="Contact"
            className="contact-icon"
          />
          <span className="grey-line">|</span>
          <span className="blue-number">(08) 728 256 266</span>
        </div>
        <div className="appointment">
          <img
            src="/Images/Home/10023.webp"
            alt="Appointment"
            className="appointment-img"
          />
          <span className="appointment-text">Make an Appointment</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
