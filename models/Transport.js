const mongoose = require('mongoose');

const TransportSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  pickUpLocation: {
    type: String,
    require: true,
    trim: true,
  },
  dropOffLocation: {
    type: String,
    require: true,
    trim: true,
  },
  pickUpDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('transport', TransportSchema);
