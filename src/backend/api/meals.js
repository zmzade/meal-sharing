const { query } = require("express");
const express = require("express");
const { sum } = require("../database");
const router = express.Router();
const knex = require("../database");

//------------------------------------------------------------------
router.get("/", async (request, response) => {
  // -----Get meals that has a price smaller than maxPrice---
  if (request.query.maxPrice) {
    const cheapMeals = await knex("meal").where(
      "price",
      "<",
      request.query.maxPrice
    );
    return response.json(cheapMeals);
  }
  //---Get meals that still has available reservations--------
  const availableReservations = request.query.availableReservations;
  //console.log(availableReservations);
  if (availableReservations) {
    var coalesceres = knex.raw(
      "coalesce(sum(reservation.number_of_guests), 0) as total_reservation"
    );
    const availableMeals = await knex("meal")
      .select("meal.id", "max_reservations", coalesceres)
      .leftJoin("reservation", "reservation.meal_id", "meal.id")
      .groupBy("meal.id");
    //.having("max_reservations", ">", "total_reservation");
    const result = Object.values(JSON.parse(JSON.stringify(availableMeals)));

    return response.json(result);
  }
  //-----Get meals that has been created after the date------
  if (request.query.createdAfter) {
    const lastlyMeals = await knex("meal").where(
      "created_date",
      ">",
      request.query.createdAfter
    );
    return response.json(lastlyMeals);
  }
  //------Only specific number of meals---------------
  if (request.query.limit) {
    const limitMeals = await knex("meal")
      .select("*")
      .limit(request.query.limit);
    return response.json(limitMeals);
  }

  // ----------Only specific number of meals with a specific max price---
  if (request.query.limit && request.query.maxPrice) {
    const limitMeals = await knex("meal")
      .select("*")
      .where("price", "<", request.query.maxPrice)
      .limit(request.query.limit);
    return response.json(limitMeals);
  }

  //----Returns all meals---
  const allMeals = await knex("meal").select("*");
  return response.json(allMeals);
});
//---------------------------------------------------------------
// ----Adds a new meal----
router.post("/", async (request, response) => {
  try {
    const addMeal = await knex("meal").insert(request.body);
    response.json(addMeal);
  } catch (error) {
    throw error;
  }
});
// -------Returns meal by id----------------------------------
router.get("/:id", async (request, response) => {
  try {
    const mealId = await knex("meal").where("id", request.params.id);
    response.json(mealId[0]);
  } catch (error) {
    throw error;
  }
});

//-----------Updates the meal by id	------------
router.put("/:id", async (request, response) => {
  try {
    const mealId = await knex("meal")
      .where("id", request.params.id)
      .update(request.body);
    response.json("meal updated");
  } catch (error) {
    throw error;
  }
});

//----------------Deletes the meal by id-------
router.delete("/:id", async (request, response) => {
  try {
    const mealId = await knex("meal").where("id", request.params.id).delete();
    response.json("meal has deleted");
  } catch (error) {
    throw error;
  }
});

module.exports = router;
