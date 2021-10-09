import React from "react";
import { useParams } from "react-router";
import MealsChildren from "./MealsChildren";
import ReservForm from "./ReservForm";

const MealWithId = (props) => {
  const { meals } = props;

  const params = useParams();

  return (
    <div className="add-meal">
      <div>
        {meals
          .filter((meal) => meal.id === parseInt(params.id))
          .map((meal) => (
            <div key={meal.id}>
              <div style={{ fontSize: "20px", color: "darkblue" }}>
                {meal.title}
              </div>
              <br />
              <MealsChildren>
                Id: {params.id}
                <br />
                Description: {meal.description}
                <br />
                Price: {meal.price}
                <br />
                Location: {meal.location}
                <br />
                Max-reservation: {meal.max_reservations}
              </MealsChildren>
              <br />
              <MealsChildren>created-date: {meal.created_date}</MealsChildren>
            </div>
          ))}
      </div>
      <div>
        <ReservForm mealId={parseInt(params.id)} />
      </div>
    </div>
  );
};
export default MealWithId;
