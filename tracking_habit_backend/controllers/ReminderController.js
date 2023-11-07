const express = require('express');
const router = express.Router();
const Reminder = require('../models/reminder');
const Mail = require("../facades/mail");
const bcrypt = require('bcrypt'); 


async function createReminder(req, res) {
    try { 
        const time =req.body.time ;
        const habitId = req.body.habitId;
        
        if (!time||!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const NewReminder= await Reward.findOne({habitId})
        console.log(NewReminder);
        
        if (NewReminder){
            return res.status(400).json({error: "Reminder already exists"})
        }
     if(!NewReminder) {
            console.log('toto');
            const newReminder = new Reminder({       
                habitId:habitId,
                time: time,
                date:new Date,
               active :false
            });
            await newReminder.save();
            res.status(201).json(newReminder);
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};

async function getAllReminder(req, res) {
    try {
        const AllReminder = await Reminder.find()
        console.log(AllReminder);
        
        if (AllReminder){
            return res.status(201).json({Reward:AllReminder})
        }
     if(!AllReminder) {

            res.status(400).json({message:"Reminder table are empty"});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
async function getOneReminder(req, res) {
    try {
        const habitId =req.body.habitId ;
        
        if (!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const OneReminder = await Reminder.findOne({habitId:habitId})
        console.log(OneReminder);
        
        if (OneReminder){
            return res.status(201).json({Habits:OneReminder})
        }
     if(!OneReminder) {

            res.status(400).json({message:"Remindertable doesn't exist"});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
async function updateOneReminder(req, res) {
    try {
        const habitId =req.body.habitId ;
        
        if (!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const OneReminder = await Reminder.findOneAndUpdate({habitId:habitId})
        console.log(OneReminder);
        
        if (OneReminder){
            return res.status(201).json({Update:`Habit are Update${OneReminder}`})
        }
     if(!OneReminder) {

            res.status(400).json({message:"Reminder does not exist"});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
async function deleteOneReminder(req, res) {
    try {
        const habitId =req.body.habitId ;
        
        if (!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const OneReminder = await Reminder.findOneAndDelete({habitId:habitId})
        console.log(OneReminder);
        
        if (OneReminder){
            return res.status(201).json({Delete:`Habit are delete${OneReminder}`})
        }
     if(!OneReminder) {

            res.status(400).json({message:"Reminder Does not exist "});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
module.exports = {createReminder,getAllReminder,getOneReminder,updateOneReminder,deleteOneReminder}