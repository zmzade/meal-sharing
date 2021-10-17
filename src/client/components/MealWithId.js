import React from "react";
import MealsChildren from "./MealsChildren";
import ReservForm from "./ReservForm";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const MealWithId = ({ meals }) => {
  const [availbleReserv, setAvailableReserv] = React.useState([]);
  const [showForm, setShowForm] = React.useState(false);
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
      return setShowForm(!showForm);
    }
  };

  const mealsWithId = meals.filter((meal) => meal.id === parseInt(params.id));
  if (mealsWithId.length === 0) {
    return (
      <div className="add-meal">
        <div>
          <ReservForm />
        </div>
      </div>
    );
  }
  const meal = mealsWithId[0];

  return (
    <div>
      <div className="add-meal">
        <div>
          <div
            style={{
              fontSize: "20px",
              backgroundColor: "peru",
              paddingLeft: "4px",
              paddingRight: "4px",
              color: "grey",
              borderRadius: "8px",
              height: "30px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "whitesmoke" }}>{meal.title}</h3>
          </div>

          <br />
          <MealsChildren>
            <div className="text-mealId">
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
            </div>
          </MealsChildren>

          <br />
          <div>
            <button
              type="submit"
              onClick={showReservForm}
              style={{
                width: "100%",
                marginLeft: "0px",
              }}
            >
              reserve
            </button>
          </div>
          <br />
          <div>
            <Link to={`/reviews/${meal.id}`}>
              <button
                style={{
                  width: "100%",
                  marginLeft: "0px",
                }}
              >
                leave a review
              </button>
            </Link>
          </div>
        </div>
        <div className="reserv-form">
          {showForm ? (
            <ReservForm />
          ) : (
            <div className="show-form">
              <h4>Unfortunately, no available reservation</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MealWithId;
