import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Meals from "./Meals";

const Home = (props) => {
  const { meals } = props;
  return (
    <div className="meals">
      <h1> Meals</h1>
      <h3>Various foods from around the world</h3>
      <ul>
        {meals.map((meal) => {
          return (
            <li key={meal.title}>
              <Link to="/meals">{meal.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
