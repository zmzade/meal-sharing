import React from "react";
import { MdOutlineFoodBank } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Autocomplete from "./Autocomplete";
const Navbar = ({ meals }) => {
  return (
    <header className="navbar">
      <div className="navContainer">
        <div className="lego" style={{ color: "white" }}>
          <MdOutlineFoodBank size={50} />
        </div>
        <div>
          <Autocomplete meals={meals} />
        </div>
        <nav className="nav">
          <div className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="navbar-active"
              className="main-nav"
            >
              home
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              exact
              to="/meals"
              activeClassName="navbar-active"
              className="main-nav"
            >
              meals
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="navbar-active"
              className="main-nav"
            >
              about
            </NavLink>
          </div>
        </nav>
        <div className="nav-item">
          <NavLink
            exact
            to="/contact"
            activeClassName="navbar-active"
            className="main-nav"
          >
            Contact Me
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
