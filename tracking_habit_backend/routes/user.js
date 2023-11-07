const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authMiddleware');

const userController = require('../controllers/userController')

router.get('/getUsers', authenticateToken, userController.getUsers);

router.post('/signup', userController.createUser);

router.get('/logout', userController.logout)


module.exports = router;
