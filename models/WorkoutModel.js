const mongoose = require('mongoose');

// Reference the Schema class correctly
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true });

// Create and export the model
module.exports = mongoose.model('Workout', workoutSchema);
