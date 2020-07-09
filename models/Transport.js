const mongoose = require('mongoose');

const TransportSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  tripDate: {
    type: Date,
  },
  customTrip: {
    dropOffLocation: {
      type: String,
    },
    pickUpLocation: {
      type: String,
    },
    pickUpTime: {
      type: String,
    },
  },
  shuttlePackage: {
    type: String,
  },
});

module.exports = mongoose.model('transport', TransportSchema);
