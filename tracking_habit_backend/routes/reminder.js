const express = require('express');
const router = express.Router();
const ReminderController = require('../controllers/ReminderController');

router.post('/', ReminderController.createReminder);
router.get('/all', ReminderController.getAllReminder);
router.get('/one', ReminderController.getOneReminder);
router.put('/Update', ReminderController.updateOneReminder);
router.delete('/delete', ReminderController.deleteOneReminder);


module.exports = router;
