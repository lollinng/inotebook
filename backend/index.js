const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const app = express();
const port = 3001;

// app.get("/", (req, res) => {
// 	res.send("Hello Bro!");
// });

// app.get("/login", (req, res) => {
// 	res.send("Hello Login!");
// });

// Available Routes (intialised in other pages to save space)
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use(function (req, res, next) {
	res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
