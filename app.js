const express = require('express');
const app = express();

const cors = require('cors');
const meals = require('./meals.js');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	cors({
		origin: 'http://localhost:3001',
	})
);
app.use(meals);

app.listen(3000);
