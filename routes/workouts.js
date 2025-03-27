const express = require('express');

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
});

// GET one workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET one workout'})
});

// POST a workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a workout'})
});

//Delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
});

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
});

module.exports = router;