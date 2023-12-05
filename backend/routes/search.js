const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const { name, color, catalogNumber } = req.query;

		let searchCriteria = {};

		if (name) {
			searchCriteria.name = { $regex: new RegExp(name, 'i') };
		}

		if (color) {
			searchCriteria.color = color;
		}

		if (catalogNumber) {
			searchCriteria.catalogNumber = catalogNumber;
		}

		const searchResults = await Product.find(searchCriteria);

		res.json(searchResults);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

module.exports = router;
