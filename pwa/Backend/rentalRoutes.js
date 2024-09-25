const express = require('express');
const multer = require('multer');
const Rental = require('../models/Rental');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Endpoint para registrar uma locação
router.post('/rentals', upload.single('image'), async (req, res) => {
  const { vehicleId, latitude, longitude } = req.body;
  const imageUrl = req.file.path;

  const rental = new Rental({
    vehicleId,
    location: {
      type: 'Point',
      coordinates: [longitude, latitude]
    },
    imageUrl
  });

  await rental.save();
  res.status(201).json(rental);
});

module.exports = router;
