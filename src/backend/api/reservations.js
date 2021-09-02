const { query } = require("express");
const express = require("express");
const { sum } = require("../database");
const router = express.Router();
const knex = require("../database");
//-------------------------------------------------------------
// -----Returns all reservations---
router.get("/", async (request, response) => {
  try {
    const reservations = await knex("reservation");
    return response.json(reservations);
  } catch (error) {
    throw error;
  }
});

// ------------Adds a new reservation---
router.post("/", async (request, response) => {
  const checkMealid = await knex("meal").where("id", request.body.meal_id);

  if (checkMealid.length > 0) {
    const addReservation = await knex("reservation").insert(request.body);
    return response.json(addReservation);
  }
  return response.status(400).json("there is no such a meal.");
});

//----Returns reservation by id--------
router.get("/:id", async (request, response) => {
  const reservationId = await knex("reservation").where(
    "id",
    request.params.id
  );
  console.log(reservationId);
  if (reservationId.length > 0) {
    return response.json(reservationId[0]);
  }
  return response.status(400).json("Unvalid ID");
});
// -------Updates the reservation by id-------------
router.put("/:id", async (request, response) => {
  const checkMealId = await knex("meal").where("id", request.body.meal_id);
  const checkResId = await knex("reservation").where("id", request.params.id);
  if (checkMealId.length > 0 && checkResId.length > 0) {
    const reservationUpdate = await knex("reservation")
      .where("id", request.params.id)
      .update(request.body);
    return response.json(reservationUpdate[0]);
  }
  return response.status(400).json("unvalid reservation Id or meal Id");
});

//-----Deletes the reservation by id	-------------
router.delete("/:id", async (request, response) => {
  const checkResId = await knex("reservation").where("id", request.params.id);
  if (checkResId.length > 0) {
    const reservationDelete = await knex("reservation")
      .where("id", request.params.id)
      .delete();
    return response.json(reservationDelete[0]);
  }
  return response.status(400).json("unvalid reservation Id");
});

module.exports = router;
