import React from "react";
import MealsChildren from "./MealsChildren";
import ReservForm from "./ReservForm";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const MealWithId = ({ meals }) => {
  const [availbleReserv, setAvailableReserv] = React.useState([]);
  const [isAvailable, setIsAvailable] = React.useState(true);
  const params = useParams();

  React.useEffect(() => {
    fetch(`/api/meals?availableReservations=true`)
      .then((res) => res.json())
      .then((data) => {
        setAvailableReserv(data);
      });
  }, []);

  const showReservForm = () => {
    const availableIdArr = availbleReserv.map((food) => food.id);
    if (availableIdArr.includes(parseInt(params.id))) {
      console.log(isAvailable);
      return setIsAvailable(isAvailable);
    }
    return console.log(!isAvailable);
  };

  const mealsWithId = meals.filter((meal) => meal.id === parseInt(params.id));
  if (mealsWithId.length === 0) {
    return (
      <div className="add-meal">
        {/* <div>
          <ReservForm />
        </div> */}
      </div>
    );
  }
  const meal = mealsWithId[0];

  return (
    <div className="add-meal">
      <div>
        <div style={{ fontSize: "20px" }}>
          <h3>{meal.title}</h3>
        </div>
        <br />
        <MealsChildren>
          Id: {params.id}
          <br />
          Ingredients: {meal.description}
          <br />
          Price: {meal.price} Kr.
          <br />
          Max-reservation: {meal.max_reservations}
          <br />
          Where: {meal.location}
          <br />
          when: {new Date(meal.created_date).toLocaleDateString()}
        </MealsChildren>

        <br />
        <div>
          {" "}
          <input type="button" onClick={showReservForm} value="reserve"></input>
        </div>
        <br />
        <div>
          <Link to={`/reviews/${meal.id}`}>
            <button
              style={{
                backgroundColor: "whitesmoke",
                width: "100%",
                marginLeft: "0px",
              }}
            >
              leave a review for this meal
            </button>
          </Link>
        </div>
      </div>

      <div>
        {isAvailable ? (
          <ReservForm />
        ) : (
          <div>
            <h4>Unfortunately, no available reservation</h4>
          </div>
        )}
      </div>
    </div>
  );
};
export default MealWithId;
