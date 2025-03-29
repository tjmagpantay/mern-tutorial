const express = require('express');
const {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
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
router.delete('/:id', async (req, res) => {
    try {
        const workout = await Workout.findByIdAndDelete(req.params.id);
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        res.status(200).json({ message: 'Workout deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// UPDATE a workout
router.patch('/:id', async (req, res) => {
    try {
        const workout = await Workout.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
