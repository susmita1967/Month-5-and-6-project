const RoomType = require('c:/Users/susmi/hotel-booking-frontend/src/models/roomType');

// Create a new room type
async function createRoomType(req, res) {
  try {
    const roomType = await RoomType.create(req.body);
    res.status(201).json(roomType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all room types
async function getRoomTypes(req, res) {
  try {
    const roomTypes = await RoomType.findAll();
    res.json(roomTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createRoomType,
  getRoomTypes,
};
