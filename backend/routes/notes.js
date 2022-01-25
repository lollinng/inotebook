const express = require("express");
const router = express.Router();

// called for get
router.get("/", (req, res) => {
	obj = {
		a: "coming from notes",
		number: 34,
	};
	res.json(obj);
});

module.exports = router;
