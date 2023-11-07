const mongoose = require('mongoose');
const Habits = require('./habits');

const RewardSchema = new mongoose.Schema({
    user_id:{type: Number,
          ref: Habits,
         required: true },
    descrption: {type: 'string'},
    targetHabit: {type: 'Number', required: true},
   name: {type: 'string', required: true}
  
});

const Reward = mongoose.model('reward',RewardSchema);

module.exports = Reward;
