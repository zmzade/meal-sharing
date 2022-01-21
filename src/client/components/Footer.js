import React from "react";
import { Link } from "react-router-dom";
export default function Footer(props) {
  return (
    <div>
      <div className="footer">
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
  );
}
