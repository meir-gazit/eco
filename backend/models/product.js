const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  color: String,
  catalogNumber: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
