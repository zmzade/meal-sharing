import React from "react";
import { MdOutlineFoodBank } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        {/* <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/ec/Yogurt_Mountain_logo.png"
            alt="fruits"
            width="40"
            height="30"
          />
        </div> */}
        <div>
          <ul>
            <li className="logo">
              <MdOutlineFoodBank size={50} />
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="navbar-active"
                className="main-nav"
              >
                {" "}
                home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/meals"
                activeClassName="navbar-active"
                className="main-nav"
              >
                {" "}
                share meal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/meals/:id"
                activeClassName="navbar-active"
                className="main-nav"
              >
                reservation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="navbar-active"
                className="main-nav"
              >
                about
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
