const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
    habitId:{type: Number,
          ref: 'habit',
         required: true },
     time:{type: Date,},
    date: {type: Date, required: true},
    active: {type: Boolean, required: true}  
  
});

const Reminder = mongoose.model('reminder',ReminderSchema);

module.exports = Reminder;
