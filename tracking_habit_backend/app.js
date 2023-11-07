const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

// Middleware pour gérer les CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '* ');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

// Importez vos fichiers de routage
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const mailRouter = require('./routes/mail');
const habitsRouter = require('./routes/habits')
const habitsRecordsRouter = require('./routes/habitRecord');
const RewardRouter = require('./routes/reward');
const ReminderRouter= require('./routes/reminder')

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/mail', mailRouter);
app.use('/api/habits', habitsRouter);
app.use('/api/habitsRecords',habitsRecordsRouter);
app.use('/api/Reminder',ReminderRouter)
app.use('/api/Reward',RewardRouter)

module.exports = app;
