
const express = require('express');
const router = express.Router();
const HotelController = require('../controllers/hotelController');

// Create a new hotel
router.post('/', HotelController.createHotel);

// Get all hotels
router.get('/', HotelController.getHotels);

// Get a single hotel by ID
router.get('/:id', HotelController.getHotelById);

// Update a hotel by ID
router.put('/:id', HotelController.updateHotel);

// Delete a hotel by ID
router.delete('/:id', HotelController.deleteHotel);

module.exports = router;