import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="/about">About Us</a>
    </p>
    <p>
      <a href="/Programs">Programs</a>
    </p>
    <p>
      <a href="/Resources">Resources</a>
    </p>
    <p>
      <a href="/Volunteering">Volunteering</a>
    </p>
    <p>
      <a href="/Contacts">Contacts</a>
    </p>
    <p>
      <a href="/News">News</a>
    </p>
    <p>
      <a href="/Rules">Rules</a>
    </p>
    
    
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-links_container">
          <div className="navbar-links_container-inner">
            <Menu />
          </div>
        </div>
        <div className="menu-icon">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </div>

      <div className={`navbar-menu div-transition ${toggleMenu ? "open" : ""}`}>
        <Menu />
      </div>

      {/* <div className="navbar-menu">
        {toggleMenu ? 
        <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false) }/> :
        <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true) }/>
        }
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu/>
            </div>
          </div>
        )}
      </div>*/}
    </div>
  );
};

export default Navbar;
