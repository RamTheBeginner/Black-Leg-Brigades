const express = require('express');
const cors = require('cors');


const app = express();
const port = 5000;

app.use(cors());


app.use('/api',require('./middleware/signup'));

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});