import React, { useState } from "react";
import postData from "./postData";

const MealsForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [when, setWhen] = useState("");
  const [max_reservations, setMax_reservations] = useState(0);
  const [price, setPrice] = useState(0);
  const [created_date, setCreated_date] = useState("");

  const handleAdd = () => {
    if (!title) {
      return alert("add title");
    }
    if (!description) {
      return alert("add description");
    }

    if (!location) {
      return alert("add location");
    }
    if (!max_reservations) {
      return alert("add maximun reservation");
    }
    if (!price) {
      return alert("add price");
    }

    const newMeal = {
      title: title,
      description: description,
      location: location,
      when: when,
      max_reservations: max_reservations,
      price: price,
      created_date: created_date,
    };
    console.log(newMeal);
    const response = postData("/api/meals", newMeal).then((data) => {
      console.log(data);
      if (response) {
        return alert("data sent");
      }
      return alert("there is an error");
    });
  };

  return (
    <div className="form">
      <form>
        <h2>Share your own food </h2>
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
          <label>Ingredients</label>
          <input
            type="text"
            placeholder="Add description .."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Where</label>
          <input
            type="text"
            placeholder="Add location .."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>When</label>
          <input
            type="date"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
          />
        </div>
        <div>
          <label>Max-reservation</label>
          <input
            type="number"
            value={max_reservations}
            onChange={(e) => setMax_reservations(e.target.value)}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
        <br />
        <div className="warp">
          <button onClick={handleAdd} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default MealsForm;
