const express = require('express');
const router = express.Router();
const Reward = require('../models/Reward');
const Mail = require("../facades/mail");
const bcrypt = require('bcrypt'); 


async function createReward(req, res) {
    try {
        const name =req.body.name ;
        const description = req.body.description;
        const targetHabit = req.body.targetHabit;
        const user_id =req.body.user_id;
        
        if (!name||!description ||!targetHabit ||!user_id) {
            return res.status(400).json({error: "All fields are required"});
        }
        const NewReward = await Reward.findOne({name})
        console.log(NewReward);
        
        if (NewReward){
            return res.status(400).json({error: "HabitReward already exists"})
        }
     if(!NewReward) {
            console.log('toto');
            const newReward = new Reward({       
                user_id:user_id,
                descrption: description,
                targetHabit:targetHabit,
                name :name
            });
            await newReward.save();
            res.status(201).json(newReward);
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};

async function getAllReward(req, res) {
    try {
        const AllReward = await Reward.find()
        console.log(AllReward);
        
        if (AllReward){
            return res.status(201).json({Reward:AllReward})
        }
     if(!AllReward) {

            res.status(400).json({message:"habits table are empty"});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
async function getOneReward(req, res) {
    try {
        const habitId =req.body.habitId ;
        
        if (!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const OneReward = await Reward.findOne({habitId:habitId})
        console.log(OneReward);
        
        if (OneReward){
            return res.status(201).json({Habits:OneReward})
        }
     if(!OneReward) {

            res.status(400).json({message:"habits table are empty"});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
async function updateOneReward(req, res) {
    try {
        const habitId =req.body.habitId ;
        
        if (!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const OneReward = await Reward.findOneAndUpdate({habitId:habitId})
        console.log(OneReward);
        
        if (OneReward){
            return res.status(201).json({Update:`Habit are Update${OneReward}`})
        }
     if(!OneReward) {

            res.status(400).json({message:"habits does not exist"});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
async function deleteOneReward(req, res) {
    try {
        const habitId =req.body.habitId ;
        
        if (!habitId) {
            return res.status(400).json({error: "All fields are required"});
        }
        const OneReward = await Reward.findOneAndDelete({habitId:habitId})
        console.log(OneReward);
        
        if (OneReward){
            return res.status(201).json({Delete:`Habit are delete${OneReward}`})
        }
     if(!OneReward) {

            res.status(400).json({message:"habits Does not exist "});
        }

    } catch(err) {

        res.status(400).send('something went wrong')
    }
};
module.exports = {createReward,getAllReward,getOneReward,updateOneReward,deleteOneReward}