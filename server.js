require('dotenv').config();

const express = require('express');
const workoutsRoutes = require('./routes/workouts');

const app = express();

// Middleware to log requests
app.use(express.json());

app.use((req, res, next) => {
   console.log(req.path, req.method);
   next();
});

// Routes
app.use('/api/workouts', workoutsRoutes);

// Listen for requests on the correct port
const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set
app.listen(PORT, () => {
    console.log("Server is listening on port", PORT);
});
