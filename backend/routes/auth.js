const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Create a User using : POST "/api/auth/". Doesnt require Auth
router.post("/", (req, res) => {
	console.log("hi"); // print something on our console
	console.log(req.body); // prints the req.body given on our console
	const user = User(req.body); //sent our data in to schema file from user.js
	user.save(); // inbuilt function to save the schema file into the mongo db
	res.send(req.body); // prints or sends the body  back to postmon or other ide
});

module.exports = router;
