const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: String,
  type: String,
  desc: String,
  price: String
});

const platformSchema = new mongoose.Schema({
  name: String,
  link: String
});



const port2 = new mongoose.Schema({
  uid: String,
  desc: String,
  packages: [packageSchema],
  platforms: [platformSchema],
   images: [String],
});



const  port1 = mongoose.model('port2', port2);

module.exports = port1;
