var express = require('express');
const mongoose = require('mongoose');
const User = require('./user');


const habitSchema = new mongoose.Schema({
    user_id: {
        type:String,
        required: true,
        ref: User
},
    name: {type: String, required: true},
    description: { type: String, required: true},
    frequency: { type: String, required: true },
    custom_frequency: { type: Number, required: true },
    completed: {type: Boolean, required: true},  
    create_at: { type: Date , required: true },
  
});

const Habits = mongoose.model('Habit', habitSchema);

module.exports = Habits;
