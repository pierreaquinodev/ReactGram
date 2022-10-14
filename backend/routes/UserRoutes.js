//Imports
const express = require("express");
const router = express.Router();

//Controller
const { register } = require("../controllers/UserController");

//Midllewares
const validate = require("../middlewares/handleValidation");
const { userCreateValidation } = require("../middlewares/userValidation");

//Routes
router.post("/register", userCreateValidation(), validate, register);

//Export module
module.exports = router;
