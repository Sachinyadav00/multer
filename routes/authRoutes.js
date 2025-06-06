const express = require("express");
const User = require("../models/User");
const router = express.Router();
const login = require("../controller/loginController");
const register = require("../controller/registerController");
const logout = require("../controller/logoutController");  // import logout controller

const {
  signupValidatior,
  loginValidatior,
} = require("../middleware/JOIValidator");

router.post("/register", signupValidatior, register);

router.post("/login", loginValidatior, login);
router.post("/logout", logout);

module.exports = router;
