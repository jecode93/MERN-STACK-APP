require("dotenv").config();
const express = require("express");

//Express app
const app = express()

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// Routes
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the app."
    });
})

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log(`App listen on port ${process.env.PORT}`);
});