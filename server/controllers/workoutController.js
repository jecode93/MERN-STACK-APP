const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");


// Get all workouts
const getWorkouts = async (req, res) => {
    const workout = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workout);
}

// Get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No suck workout" })
    }
    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(400).json({ error: "No suck workout" })
    }
    res.status(200).json(workout)
}

// Create new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    // Add document to db
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No suck workout" })
    }

    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
        return res.status(400).json({ error: "No suck workout" })
    }
    res.status(200).json(workout)

}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No suck workout" })
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!workout) {
        return res.status(400).json({ error: "No suck workout" })
    }
    res.status(200).json(workout)

}



module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}