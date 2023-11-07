const express = require('express');
const router = express.Router();
const RewardController = require('../controllers/RewardController');

router.post('/', RewardController.createReward);
router.get('/all', RewardController.getAllReward);
router.get('/one', RewardController.getOneReward);
router.put('/Update', RewardController.updateOneReward);
router.delete('/delete', RewardController.deleteOneReward);


module.exports = router;
