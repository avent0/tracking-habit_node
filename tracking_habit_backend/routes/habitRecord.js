const express = require('express');
const router = express.Router();
const HabitsRecordController = require('../controllers/HabitsRecordController');

router.post('/create', HabitsRecordController.createHabitRecord);
router.get('/getAll', HabitsRecordController.getAllHabitRecord);
router.get('/getOne', HabitsRecordController.getOneHabitRecord);
router.put('/Update', HabitsRecordController.updateOneHabitRecord);
router.delete('/delete', HabitsRecordController.deleteOneHabitRecord);

module.exports = router;
