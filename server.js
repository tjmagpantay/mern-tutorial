require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
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

//Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //app listen to request
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log("connected to db and is listening on port", PORT);
        });
    })
    .catch((error) => {
        console.log(error)
    });


