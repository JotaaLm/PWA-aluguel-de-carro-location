const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  vehicleId: { type: String, required: true },
  location: { type: { type: String, default: 'Point' }, coordinates: [Number] },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Rental', rentalSchema);
