const Booking = require('c:/Users/susmi/hotel-booking-frontend/src/models/booking');

// Create a new booking
async function createBooking(req, res) {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all bookings
async function getBookings(req, res) {
  try {
    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createBooking,
  getBookings,
};
