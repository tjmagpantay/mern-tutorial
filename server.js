const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
    res.json({ msg: "Hello World" });
}); 

// Listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
