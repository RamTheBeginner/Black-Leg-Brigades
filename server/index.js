const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
mongoose.connect("mongodb+srv://polisettys3:1z4yeRhZFOsaTyCV@black-leg-brigades.tulsbpi.mongodb.net/?retryWrites=true&w=majority&appName=Black-Leg-Brigades");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
mongoose.connect("mongodb+srv://polisettys3:1z4yeRhZFOsaTyCV@black-leg-brigades.tulsbpi.mongodb.net/?retryWrites=true&w=majority&appName=Black-Leg-Brigades");
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use('/api/investment',require('./middleware/investment'));
app.use('/api',require('./middleware/signup'));


app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});