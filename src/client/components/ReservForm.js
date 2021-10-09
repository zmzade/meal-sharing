import React, { useState } from "react";
import postData from "./postData";

const ReservForm = (props) => {
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(props.mealId);
  const handleReserv = () => {
    if (!tel) {
      return alert("add phone number");
    }
    if (!name) {
      return alert("add name");
    }

    if (!email) {
      return alert("add email");
    }
    const reserv = {
      meal_id: props.mealId,
      tel: tel,
      name: name,
      email: email,
    };

    const response = postData("/api/reservations", reserv)
      .then((data) => {
        alert("data sent");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="reservForm">
      <form>
        <div>
          <label>Phone</label>
          <input
            type="tel"
            placeholder="Add phonenumber .."
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>

        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Add name .."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Add email .."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <button onClick={handleReserv} type="submit">
            book seat
          </button>
        </div>
      </form>
    </div>
  );
};
export default ReservForm;
