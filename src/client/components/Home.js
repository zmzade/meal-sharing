import React from "react";
import { Link } from "react-router-dom";

const Home = ({ meals }) => {
  return (
    <div className="meals">
      <h1> Meals</h1>
      <h3>Various foods from around the world</h3>
      <ul>
        {meals.map((meal) => {
          return (
            <li key={meal.title}>
              <div className="mealTitle">
                <Link to="/meals" className="main-links">
                  {meal.title}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
