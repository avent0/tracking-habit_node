const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authMiddleware');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); 
const bcrypt = require('bcrypt'); 

router.post('/login', async (req, res) => {
  const { email, password, verificationCode } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Adresse e-mail ou mot de passe incorrect' });
    }

    // Vérifiez le mot de passe avec bcrypt.compare
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Mot de passe incorrect' });
    }

    // Vérifiez le code de vérification
    if (verificationCode !== user.verificationCode) {
      return res.status(401).json({ error: 'Code de vérification incorrect' });
    }

    // Si l'utilisateur est authentifié, générez un token d'accès
    const accessToken = jwt.sign({ userId: user._id, email: user.email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '15m',
    });

    // Générez un token de rafraîchissement
    const refreshToken = jwt.sign({ userId: user._id, email: user.email }, process.env.REFRESH_TOKEN_SECRET);

    res.json({ accessToken, refreshToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
});

router.post('/refreshToken', (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.sendStatus(401);
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    // Si le token de rafraîchissement est valide, générez un nouveau token d'accès
    const accessToken = jwt.sign({ userId: user.userId, email: user.email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '15m',
    });

    res.json({ accessToken });
  });
});

module.exports = router;
