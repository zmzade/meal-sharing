const { query } = require("express");
const express = require("express");
const { sum } = require("../database");
const router = express.Router();
const knex = require("../database");
//------------------------------------------------------------
// -----------Returns all reviews	-----------------
router.get("/", async (request, response) => {
  try {
    const allReviews = await knex("review");
    return response.json(allReviews);
  } catch (error) {
    throw error;
  }
});

//---------Adds a new review--------------
router.post("/", async (request, response) => {
  const checkMealid = await knex("meal").where("id", request.body.meal_id);

  if (checkMealid.length > 0) {
    const addReview = await knex("review").insert(request.body);
    return response.json(addReview);
  }
  return response.status(400).json("there is no such a meal.");
});

// ---Returns review by id	----------------
router.get("/:id", async (request, response) => {
  const reviewId = await knex("review").where("id", request.params.id);
  if (reviewId.length > 0) {
    return response.json(reviewId[0]);
  }
  return response.status(400).json("Unvalid ID");
});

// ------Updates the review by id	-----
router.put("/:id", async (request, response) => {
  const checkMealId = await knex("meal").where("id", request.body.meal_id);
  const checkReviewId = await knex("review").where("id", request.params.id);
  if (checkMealId.length > 0 && checkReviewId.length > 0) {
    const reviewUpdate = await knex("review")
      .where("id", request.params.id)
      .update(request.body);
    return response.json(reviewUpdate[0]);
  }
  return response.status(400).json("unvalid review Id or meal Id");
});

// ----Deletes the review by id	----------
router.delete("/:id", async (request, response) => {
  const checkReviewId = await knex("review").where("id", request.params.id);
  if (checkReviewId.length > 0) {
    const reviewDelete = await knex("review")
      .where("id", request.params.id)
      .delete();
    return response.json(reviewDelete[0]);
  }
  return response.status(400).json("unvalid review Id");
});

module.exports = router;
