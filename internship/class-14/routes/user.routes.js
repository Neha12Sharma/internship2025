const express= require("express");
const User = require("../models/user.model");
const { createUser, getAllUsers } = require("../controllers/user.controllers");

const router = express.Router();

router.post("/create",createUser);
router.get("/all",getAllUsers);
// router.post()




module.exports = router