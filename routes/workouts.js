const express = require('express');
const {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutControllers');

const Workout = require('../models/WorkoutModel'); // Ensure this is correctly required

const router = express.Router();

// GET all workouts
router.get('/', getAllWorkouts);

// GET a single workout
router.get('/:id', getSingleWorkout); // ✅ Fixed `this.getSingleWorkout`

// POST a workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout); // ✅ Fixed `this.deleteWorkout`

// UPDATE a workout
router.patch('/:id', updateWorkout); // ✅ Fixed `this.updateWorkout`

module.exports = router;
