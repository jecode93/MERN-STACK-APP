const express = require("express");
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
router.post("/", (req, res) => {
    res.json({
        message: "Post a new workout."
    })
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