const express = require('express');
const {
    createWorkout,
} = require('../controllers/workoutControllers');

const router = express.Router();

// GET all workouts
router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// GET one workout
router.get('/:id', async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

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
        const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
