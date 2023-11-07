const express = require('express');
const router = express.Router();
const habitsRecords = require('../models/habitsRecords');
const Mail = require("../facades/mail");
const bcrypt = require('bcrypt'); 


async function createHabitRecord(req, res) {
    try {
        const habitId =req.body.habitId ;
        
        if (!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const NewHabits = await habitsRecords.findOne({habitId})
        console.log(NewHabits);
        
        if (NewHabits){
            return res.status(400).json({error: "HabitReward already exists"})
        }
     if(!NewHabits) {
            console.log('toto');
            const newReward = new habitsRecords({       
                habitId:habitId,
                completed:false,  
                date: new Date
            });
            await newReward.save();
            res.status(201).json(newReward);
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};

async function getAllHabitRecord(req, res) {
    try {
        const AllHabits = await habitsRecords.find()
        console.log(NewHabits);
        
        if (NewHabits){
            return res.status(201).json({Habits:AllHabits})
        }
     if(!NewHabits) {

            res.status(400).json({message:"habits table are empty"});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
async function getOneHabitRecord(req, res) {
    try {
        const habitId =req.body.habitId ;
        
        if (!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const OneHabits = await habitsRecords.findOne({habitId:habitId})
        console.log(OneHabits);
        
        if (NewHabits){
            return res.status(201).json({Habits:OneHabits})
        }
     if(!NewHabits) {

            res.status(400).json({message:"habits table are empty"});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
async function updateOneHabitRecord(req, res) {
    try {
        const habitId =req.body.habitId ;
        
        if (!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const OneHabits = await habitsRecords.findOneAndUpdate({habitId:habitId})
        console.log(OneHabitsHabits);
        
        if (NewHabits){
            return res.status(201).json({Update:`Habit are Update${OneHabits}`})
        }
     if(!NewHabits) {

            res.status(400).json({message:"habits does not exist"});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
async function deleteOneHabitRecord(req, res) {
    try {
        const habitId =req.body.habitId ;
        
        if (!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const OneHabits = await habitsRecords.findOneAndDelete({habitId:habitId})
        console.log(OneHabitsHabits);
        
        if (NewHabits){
            return res.status(201).json({Delete:`Habit are delete${OneHabits}`})
        }
     if(!NewHabits) {

            res.status(400).json({message:"habits Does not exist "});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
module.exports = {createHabitRecord,getAllHabitRecord,getOneHabitRecord,updateOneHabitRecord,deleteOneHabitRecord}