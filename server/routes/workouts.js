const express = require("express");
const Workout = require("../models/workoutModel");
const router = express.Router();

// GET ALL WORKOUT
router.get("/", (req, res) => {
    res.json({
        message: "Get all workout."
    })
})

// GET A SINGLE WORKOUT
router.get("/:id", (req, res) => {
    res.json({
        message: "Get a single workout."
    })
})

// POST A NEW WORKOUT
router.post("/", async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
})

// DELETE A  WORKOUT
router.delete("/:id", (req, res) => {
    res.json({
        message: "Delete a workout."
    })
})

// UPDATE A WORKOUT
router.patch("/:id", (req, res) => {
    res.json({
        message: "Update a workout."
    })
})

module.exports = router;