import React from "react";
import { Link, Route } from "react-router-dom";
import MealId from "./MealId";

const Meals = (props) => {
  const { meals } = props;
  return (
    <div className="add-meal">
      <div>
        <ul>
          <h2>Food Details </h2>
          {meals.map((meal) => {
            return (
              <li key={meal.title}>
                <Link to={`/meals/${meal.id}`}>{meal.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <form>
          <h2>Add your own food </h2>
          <input type="text" />
        </form>
      </div>
    </div>
  );
};
export default Meals;
