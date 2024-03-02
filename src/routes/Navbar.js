import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import DarklightMode from "../components/Dark&lightMode";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav>
      <Link to="/" className="title">
        ACHRAF<span>DEV</span>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li onClick={() => handleClickScroll("/")}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={() => handleClickScroll("about")}>
          <NavLink to="/About">About</NavLink>
        </li>
        <li onClick={() => handleClickScroll("services")}>
          <NavLink to="/Services">Services</NavLink>
        </li>
		<li onClick={() => handleClickScroll("portfolio")}>
          <NavLink to="/Project">Portfolio</NavLink>
        </li>
		<li onClick={() => handleClickScroll("contact")}>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
		<li>
		<DarklightMode />
		</li>
      </ul>
    </nav>
  );
};
export default Navbar;