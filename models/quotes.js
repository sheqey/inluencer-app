const mongoose = require('mongoose');

const quo = new mongoose.Schema({
 
  description: { type: String, required: true },
  price: { type: String, required: true },
  platformc: { type: String, required: true },
  platform: { type: String, required: true },
  influencer: { type: String, required: true },

  customer: { type: String, required: false, default: true },
  phone: { type: String, required: false, default: true },
  email: { type: String, required: false, default: true },
  status: { type: String, required: false, default: true },

  


 
});


const  qu = mongoose.model('quotes_table', quo);

module.exports = qu;
