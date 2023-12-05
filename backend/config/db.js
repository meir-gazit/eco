const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/eco', {});
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error.message);
		process.exit(1);
	}
};

module.exports = connectDB;
