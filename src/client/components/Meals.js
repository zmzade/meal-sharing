import React from "react";
import MealsForm from "./MealsForm";
import MealsChildren from "./MealsChildren";
import { Link } from "react-router-dom";

const Meals = ({ meals }) => {
  return (
    <div className="add-meal">
      <div>
        <ul>
          <h2 style={{ paddingLeft: "10px" }}> food mania </h2>
          {meals.map((meal) => {
            return (
              <li key={meal.title}>
                <div className="mealTitle">
                  <Link to={`/meals/${meal.id}`} className="main-links">
                    <h3>{meal.title}</h3>
                  </Link>
                </div>
                <br />
                <MealsChildren>Ingredients: {meal.description}</MealsChildren>
                <MealsChildren>Where: {meal.location}</MealsChildren>
                <MealsChildren>Price: {meal.price} Kr.</MealsChildren>
                <br />
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <MealsForm />
      </div>
    </div>
  );
};
export default Meals;
