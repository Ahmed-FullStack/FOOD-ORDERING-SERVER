const router = require('express').Router();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meals');

const mealsType = { type: String, required: true };

const mealsSchema = new mongoose.Schema({
	name: mealsType,
	description: mealsType,
	price: { type: Number, required: true },
});
const Meal = new mongoose.model('Meal', mealsSchema);
const mealOne = new Meal({
	name: 'Sushi',
	description: 'Finest fish and veggies',
	price: 22.99,
});
const mealTwo = new Meal({
	name: 'Schnitzel',
	description: 'A german specialty!',
	price: 16.5,
});
const mealThree = new Meal({
	name: 'Barbecue Burger',
	description: 'American, raw, meaty',
	price: 12.99,
});
const mealFour = new Meal({
	name: 'Green Bowl',
	description: 'Healthy...and green...',
	price: 18.99,
});
const mealFive = new Meal({
	name: 'Biryani',
	description: 'Spicy and Tasty',
	price: 49.99,
});

const mealData = [mealOne, mealTwo, mealThree, mealFour, mealFive];
router.get('/meals', (req, res) => {
	Meal.find({}, (err, foundMeals) => {
		if (foundMeals.length === 0) {
			Meal.insertMany(mealData, (err, foundMeals) => {
				if (!err) {
					res.json(foundMeals);
				}
			});
		} else {
			res.json(foundMeals);
		}
	});
});

module.exports = router;
