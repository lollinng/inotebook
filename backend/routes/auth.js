const express = require("express");
const router = express.Router();

// Create a User using : POST "/api/auth/". Doesnt require Auth
router.post("/", (req, res) => {
	// basic api
	obj = {
		a: "coming from auth",
		number: 34,
	};
	res.json(obj);
});

module.exports = router;
