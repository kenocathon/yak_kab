const mongoose = require('mongoose');

const TransportSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
 pickUpDate:{
   type: String,
 },
  pickUpTime:{
    type: String,
  },
  isHomePickup:{
    type: Boolean,
  },
  
  shuttlePackage: {
    type: String,
  },
  customTrip: {
    dropOffLocation: {
      type: String,
    },
    pickUpLocation: {
      type: String,
    },
    isReturnHome:{
      type: Boolean
    },
  },
});

module.exports = mongoose.model('transport', TransportSchema);
