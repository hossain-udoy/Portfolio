import React from "react";
import { NavLink } from "react-router-dom";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">UDOY</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <Link to="services" activeClass="active" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="projects" activeClass="active" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <Link to="about" activeClass="active" spy={true} smooth={true}>
                About Me
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" activeClass="active" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
