import React, { useState } from "react";
import postData from "./postData";

const ReservForm = (props) => {
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(0);
  const [createdDate, setCreatedDate] = useState("");

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
      number_of_guests: guests,
      created_date: createdDate,
      meal_id: props.mealId,
      contact_phonenumber: tel,
      contact_name: name,
      contact_email: email,
    };
    console.log(reserv);

    const response = postData("/api/reservations", reserv)
      .then((data) => {
        alert("data sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form">
      <form>
        <h3>reservation form</h3>
        <div>
          <label>Number of guests</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={createdDate}
            onChange={(e) => setCreatedDate(e.target.value)}
          />
        </div>
        <div>
          <label>Phone No.</label>
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
          <input
            onClick={handleReserv}
            type="button"
            value="  book seat"
          ></input>
        </div>
      </form>
    </div>
  );
};
export default ReservForm;
