const express = require('express');
const router = express.Router();
const HabitController = require('../controllers/HabitsController');


router.post('/create', HabitController.createHabit);
router.post('/getAll', HabitController.getAllHabit);
router.get('/getOne', HabitController.getOneHabit);
router.post('/updateHabitCompleted',HabitController.updateHabitCompleted)
router.put('/Update', HabitController.updateOneHabit);
router.delete('/delete', HabitController.deleteOneHabit);



module.exports = router;
