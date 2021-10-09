import React from "react";
import MealsForm from "./MealsForm";
import MealsChildren from "./MealsChildren";
import { Link } from "react-router-dom";

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
                <div className="mealTitle">
                  <Link to={`/meals/${meal.id}`}>{meal.title}</Link>
                </div>
                <br />
                <MealsChildren>Description:{meal.description}</MealsChildren>
                <MealsChildren>Location:{meal.location}</MealsChildren>
                <MealsChildren>Price:{meal.price}</MealsChildren>
              </li>
            );
          })}
        </ul>
      </div>
      <MealsForm />
    </div>
  );
};
export default Meals;
