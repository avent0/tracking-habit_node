const mongoose = require('mongoose');
const Habits = require('./habits');

const habitRecordSchema = new mongoose.Schema({    
    habitId:{type: String,
     ref: Habits,
    required: true },
    date: {type: Date, required: true},
    completed: {type: Boolean, required: true}  
  
});

const HabitRecord = mongoose.model('habitRecord', habitRecordSchema);

module.exports = HabitRecord;
