const WorkoutModel = require('../models/WorkoutModel');
const mongoose = require('mongoose');

// get all workouts
const getAllWorkouts = async (req, res) => {
    const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
};

// get a single workouts
const getSingleWorkout = async (req, res) => {
    const { id } = req.params;

    // check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' });
    }

    try {
        const workout = await WorkoutModel.findById(id);
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

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
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
};