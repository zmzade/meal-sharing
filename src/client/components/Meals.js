import React from "react";
import MealsForm from "./MealsForm";
import MealsChildren from "./MealsChildren";
import { Link } from "react-router-dom";
import foodPics from "./photos";

const Meals = ({ meals }) => {
  const foodImgs = foodPics;

  return (
    <div className="add-meal">
      <div className="mealsLi">
        <h2 style={{ paddingLeft: "10px" }}> food mania </h2>
        <ul>
          {meals.map((meal, index) => {
            const image = foodImgs[index];
            return (
              <li key={meal.title}>
                <div className="mealTitle">
                  <Link to={`/meals/${meal.id}`} className="main-links">
                    <img src={image} alt="food image" />
                    <h3 style={{ color: "navy" }}>{meal.title}</h3>
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
