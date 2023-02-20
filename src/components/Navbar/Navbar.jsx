import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar app__navbar_img">
      <div className="app__navbar-logo">
        <img
          src={logo}
          alt="logo"
          height={64}
          width={64}
          style={{ objectFit: "contain" }}
        />
      </div>
      <ul className="app__navbar-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#clients">Clients</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#insights">Insights</a>
        </li>
        <li>
          <a href="#security">Security</a>
        </li>
      </ul>
      <div className="app__navbar-signUp">
        <button type="button">Sign up</button>
      </div>

      <div className="app__navbar-smallscreen">
        <RiMenu3Line
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <RiCloseLine
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
