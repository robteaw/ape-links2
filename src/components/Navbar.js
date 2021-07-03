import React, { useState } from "react";
// styling and animations
import styled from "styled-components";
import { Link } from "react-router-dom";
// images
import logo from "../images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Container>
        <img src={logo} alt={logo} className="logo" />
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Menu isOpen={isOpen}>
          <LinkWrapper>
            <MenuLink to="">Home</MenuLink>
            <MenuLink to="/seo">Services</MenuLink>
            <MenuLink to="">About</MenuLink>
            <MenuLink to="">Portfolio</MenuLink>
            <MenuLink to="">Contact</MenuLink>
            {/* <Button>Contact</Button> */}
          </LinkWrapper>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;

// styling
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute; // navbar on hero
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Container = styled.div`
  // max-width and margin will center link
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  padding: 2rem;

  .logo {
    height: 2.8rem;
    cursor: pointer;
  }

  a {
    color: var(--linkColor);
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    padding: 0.7rem 1.5rem;
    transition: all 0.25s ease-in;
    border-radius: 0.5rem;
  }

  &:hover {
    color: var(--navHover);
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 900px) {
    background-color: rgba(255, 255, 255, 0.9);
    flex-direction: column;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: -4px 8px 15px 1 rgba(0, 0, 0, 0.07);
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")}; // links appears
    width: 100%;
    transition: max-height 0.3s ease-in-out;
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(15px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const LinkWrapper = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const MenuLink = styled.a`
  color: #858586;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: var(--navHover);
  }
`;

const Button = styled.button`
  color: var(--navColor);
  background-color: var(--btnColor);
  font-size: 0.8rem;
  border: none;
  border-radius: 1rem;
  margin-left: 0.5rem;
  padding: 0.8rem 1.1rem;
  box-shadow: 0px 13px 24px -7px rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    box-shadow: 0px 17px 16px -11px #ffd700;
    transform: translateY(-5px);
  }

  @media (max-width: 670px) {
    /* padding: 0.3rem; */
  }
`;

const Hamburger = styled.div`
  display: none; // hamburger appears
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: var(--linkColor);
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;
