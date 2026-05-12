require('dotenv').config();

const User = require('../models/User')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')



exports.register = async (req, res) => {
  try {
    const {email, password, role} = req.body;
    const existUser = await User.findOne({email});

    if(existUser)
    {
      return res.status(400).json({message: "Utilisateur existe déjà"});
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashPassword,
      role: role || "user"
    });

    res.status(201).json({message: "Utilisateur créé", user});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({email})

    if(!user)
    {
      return res.status(400).json({message: "Identifiants non valides"});
    }
    const isGood = await bcrypt.compare(password, user.password)

    if(!isGood)
    {
      return res.status(400).json({message: "Identifiants non valides"})
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token
    });


  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}


exports.profiler = async (req, res) => {
  res.json({
    message: "Profil utilisateur",
    user: req.user
  })
}