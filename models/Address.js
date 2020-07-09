const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
    trim: true,
    required: true,
  },
  city: {
    type: String,
    trim: true,
    required: true,
  },
  state: {
    type: String,
    trim: true,
    required: true,
    default: 'GA',
  },
  zipcode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('address', AddressSchema);
