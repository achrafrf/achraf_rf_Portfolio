import React ,{useRef, useState} from "react";
import { Link,BrowserRouter } from "react-router-dom";
import DarklightMode from "../components/Dark&lightMode";
import { FaTimes , FaBars } from "react-icons/fa";

const Navbar = () => {

const showNavbar = () => {
	navRef.current.classList.toggle(
		"responsive_nav"
	);
};

  return <div className="navbar_list">
  <header>
		<a href="#" className="logo">Ach<span>DEV</span>Web</a>
		<nav>
			<a href="/#">Home</a>
			<a href="/About">About Me</a>
            <a href="/Services">Services</a>
			<a href="/Project">Portfolio</a>
			<a href="/Contact">Contact</a>
			<div className="DarklightMode"><DarklightMode /></div>
			<button className="nav-btn nav-close-btn"><FaTimes onClick={showNavbar}/></button>
		</nav>
		<button className="nav-btn"><FaBars onClick={showNavbar}/></button>
	</header>

  </div>;
};

export default Navbar;