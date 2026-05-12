const express = require("express")

const router = express.Router();

const {register, login, profile, profiler} = require("../controllers/authController")

const auth = require("../middlewares/auth");

const {body} = require("express-validator");

const validator = require('../middlewares/validate');


router.post("/register",
  [
    body("email").isEmail().withMessage("Email invalide"),
    body('password').isLength({min: 6}).withMessage("Le password doit contenir minimum 6 caractères")
  ],validator, register);


router.post("/login",[
  body("email").isEmail(),
  body("password").notEmpty()
],validator, login);
router.get("/profiler", auth, profiler)

module.exports = router;