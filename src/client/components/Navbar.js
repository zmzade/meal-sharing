import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/ec/Yogurt_Mountain_logo.png"
            alt="fruits"
            width="40"
            height="30"
          />
        </div>
        <div>
          <ul>
            <li className="nav-item">
              <Link to="/"> home</Link>
            </li>
            <li className="nav-item">
              <Link to="/meals"> add meal</Link>
            </li>
            <li className="nav-item">
              <Link to="/meals/:id">reservation</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">about</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
