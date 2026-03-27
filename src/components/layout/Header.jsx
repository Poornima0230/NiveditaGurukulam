import React, { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom"; // if using react-router-dom
import "../../styles/navbar.css";
import logo from "../../assets/images/logo.jpg";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("click", closeMenu);

      // disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // enable scroll
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Nivedita Gurukulam" className="logo-img" />
            <span className="logo-heading">Nivedita Gurukulam</span>
          </NavLink>
        </div>

        <nav className={menuOpen ? "menu-mobile" : "menu-web"}>
          <ul className="nav-list">
            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="about">About Us</NavLink>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="admissions">Admissions</NavLink>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="academics">Academics</NavLink>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="activities">Activities</NavLink>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="gallery">Gallery</NavLink>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="contact" className="btn-contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* <button
          //   className="hamburger"
          className="menu-icon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button> */}

        <div
          className="menu-icon"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
