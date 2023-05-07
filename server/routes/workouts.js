const express = require("express");
const { createWorkout, getWorkouts, getWorkout, updateWorkout, deleteWorkout } = require("../controllers/workoutController");
const router = express.Router();

// GET ALL WORKOUT
router.get("/", getWorkouts)

// GET A SINGLE WORKOUT
router.get("/:id", getWorkout)

// POST A NEW WORKOUT
router.post("/", createWorkout)

// DELETE A  WORKOUT
router.delete("/:id", deleteWorkout)

// UPDATE A WORKOUT
router.patch("/:id", updateWorkout)

module.exports = router;