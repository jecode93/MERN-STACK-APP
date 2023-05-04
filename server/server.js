require("dotenv").config();
const express = require("express");
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

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log(`App listen on port ${process.env.PORT}`);
});