import React from "react";
import StarRate from "./StarRate";
import postData from "./postData";
import { useParams } from "react-router";
import Meals from "./Meals";

const ReviewForm = ({ meals }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [created_date, setCreated_date] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [name, setName] = React.useState("");
  const params = useParams();

  React.useEffect(() => {
    const meal = meals.filter((meal) => meal.id === parseInt(params.id));
    if (meal.length === 0) {
      return;
    }
    const mealName = meal[0].title;
    setName(mealName);
  }, [meals]);

  const handleReview = () => {
    if (!title) {
      return alert("add title");
    }
    if (!description) {
      return alert("add description");
    }

    if (!created_date) {
      return alert("add date");
    }
    if (!rating) {
      return alert("give it star");
    }
    const newRiview = {
      title: title,
      description: description,
      meal_id: parseInt(params.id),
      stars: rating,
      created_date: created_date,
    };
    console.log(newRiview);

    const response = postData("/api/reviews", newRiview)
      .then((data) => {
        alert("data sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {}
      <div className="form">
        <form>
          <h2> review form</h2>
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
              marginBottom: "10px",
            }}
          >
            <h4 style={{ color: "whitesmoke" }}>{name}</h4>
          </div>
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Add title .."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              placeholder="Add description .."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label>Date</label>
            <input
              type="date"
              value={created_date}
              onChange={(e) => setCreated_date(e.target.value)}
            />
          </div>
          <div>
            <StarRate rating={rating} setRating={setRating} />
          </div>
          <br />
          <div className="warp">
            <button onClick={handleReview} type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
