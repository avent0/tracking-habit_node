const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Mail = require("../facades/mail");
const bcrypt = require('bcrypt'); 


async function createUser(req, res) {
  try {
    
    const { username,email,password } = req.body;
    
    // Générez un code de vérification unique
    const verificationCode = generateVerificationCode();

    // Hachez le mot de passe avant de le stocker
    const hashedPassword = await bcrypt.hash(password, 10); // Le deuxième argument est le coût du hachage

    const newUser = new User({ username, email, password: hashedPassword, verificationCode });
    await newUser.save();

    

    // Envoyez le code de vérification par e-mail
    Mail.to(email).send('Code de vérification : ' + verificationCode);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
}

function generateVerificationCode() {
  // Générez un code de vérification, par exemple, un code aléatoire à 6 chiffres
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
}

async function logout(req, res) {
  try {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ error: 'Échec de la déconnexion' });
      } else {
        res.json({ message: 'Déconnexion réussie' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la déconnexion' });
  }
}

module.exports = { getUsers, createUser, logout };
