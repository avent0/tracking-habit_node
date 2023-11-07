const express = require('express');
const router = express.Router();
const Habits = require('../models/habits');
const Mail = require("../facades/mail");
const bcrypt = require('bcrypt'); 


async function createHabit(req, res) {
    try {
        const user_id =req.body.user_id ;
        const name =req.body.name ;
        const description =req.body.description ;
        const frequency =req.body.frequency ;
        const custom_frequency =req.body.custom_frequency ;
        if (!user_id ||!name ||!description ||!frequency ||!custom_frequency) {
            return res.status(400).json({error: "All fields are required"});
        }
        const NewHabits = await Habits.findOne({name})
        console.log(NewHabits);
        
        if (NewHabits){
            return res.status(400).json({error: "Habit already exists"})
        }
       
     if(!NewHabits) {
            console.log('toto');
            const newHabit = new Habits({       
                user_id,
                name,
                description,
                frequency,
                custom_frequency,
                completed: false ,
                create_at: new Date
            });
            await newHabit.save();
            res.status(201).json(newHabit);
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};

async function updateHabitCompleted(req, res) {
    try {
        const habitId =req.body.habitId;
        const complete =req.body.completed
       
        if (!habitId||!complete) {
            return res.status(400).json({error: "All fields are required"});
        }
        else{
        const UpdateData = req.body.completed
        console.log(UpdateData);
        const completed = await Habits.findOneAndUpdate({_id:habitId},
            {completed : UpdateData},
            {new:true})
        console.log(completed);  
            res.status(201).json(completed);
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};  
async function getAllHabit(req, res) {
    try {
        const user_id = req.body.user_id
        const ALAL = await Habits.find({user_id:user_id})
        console.log(ALAL);
        
        if (ALAL){
            return res.status(201).json(ALAL)
        }
     if(!ALAL) {

            res.status(400).json({message:"habits table are empty"});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
async function getOneHabit(req, res) {
    try {
        const habitId =req.body.habitId ;
        
        if (!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const OneHabits = await Habits.findOne({habitId:habitId})
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
async function updateOneHabit(req, res) {
    try {
        const habitId =req.body.habitId ;
        
        if (!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const OneHabits = await Habits.findOneAndUpdate({habitId:habitId})
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
async function deleteOneHabit(req, res) {
    try {
        const habitId =req.body.habitId ;
        
        if (!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const OneHabits = await Habits.findOneAndDelete({_id:habitId})
        console.log(OneHabits);
        
        if (OneHabits){
            return res.status(201).json({Delete:`Habit are delete${OneHabits}`})
        }
     if(!NewHabits) {

            res.status(400).json({message:"habits Does not exist "});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
module.exports = {createHabit,getAllHabit,getOneHabit,updateOneHabit,deleteOneHabit,updateHabitCompleted}