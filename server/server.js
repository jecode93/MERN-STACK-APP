require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

//Express app
const app = express()

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// Routes
app.use("/api/workouts", workoutRoutes)

// Connect to db
mongoose.connect(process.env.DB)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Connected to db and listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })

