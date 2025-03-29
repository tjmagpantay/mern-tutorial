const WorkoutModel = require('../models/WorkoutModel');

// get all workouts

// get a single workouts

//create new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    // add doc to db
    try {
        const workout = await WorkoutModel.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a workout

// update a workout

module.exports = {
    createWorkout,
};