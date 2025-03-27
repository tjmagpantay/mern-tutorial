require('dotenv').config();

const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
    res.json({ msg: "Hello World" });
}); 

// Listen for requests
app.listen(process.env, () => {
    console.log("Server is listening on port", process.env.PORT);
});

