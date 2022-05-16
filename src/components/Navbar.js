import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { linkAnim, logoAnim } from "../animations";
// images
import logo from "../images/logo.png";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const extendElement = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <Nav>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <motion.img
            variants={logoAnim}
            className="logo"
            src={logo}
            alt={logo}
          ></motion.img>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <motion.li variants={linkAnim} className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </motion.li>
          <motion.li
            variants={linkAnim}
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={extendElement}
          >
            <Link to="/" className="nav-links">
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu} />}
          </motion.li>
          <motion.li variants={linkAnim} className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </motion.li>
          <motion.li variants={linkAnim} className="nav-item">
            <Link
              to="/portfolio"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
          </motion.li>
          <motion.li variants={linkAnim} className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </motion.li>
        </ul>
      </Nav>
    </>
  );
}

// styling
const Nav = styled.div`
  background: var(--navColor);
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 99;

  .navbar-logo {
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
  }

  .logo {
    height: 2.8rem;
  }

  .fa-firstdraft {
    margin-left: 0.5rem;
    font-size: 1.6rem;
  }

  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
  }

  .nav-item {
    display: flex;
    align-items: center;
    height: 80px;
  }

  .nav-links {
    color: var(--linkColor);
    text-decoration: none;
    padding: 0.5rem 1rem;
  }

  .nav-links:hover {
    color: var(--navHover);
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  .fa-bars {
    color: var(--linkColor);
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: #242222;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }

    .nav-links {
      text-align: center;
      padding: 2rem;
      top: 0;
      width: 100%;
      display: table;
    }

    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25%, 50%);
    }

    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }

    .fa-times {
      color: var(--linkColor);
      font-size: 2rem;
    }

    .nav-links-mobile {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 100%;
      text-decoration: none;
      color: var(--linkColor);
      font-size: 1.5rem;
    }

    .nav-item:nth-child(1) {
      margin-top: 3.5rem;
    }

    .nav-item:nth-child(5) {
      margin-bottom: 100%;
    }
  }
`;
