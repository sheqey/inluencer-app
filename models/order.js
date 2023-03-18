const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
  products: { type: [productSchema], required: true },
  total: { type: Number, required: true },
  cust:{type: Number, required: false},
  

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
