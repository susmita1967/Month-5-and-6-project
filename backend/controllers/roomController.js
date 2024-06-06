const Room = require('c:/Users/susmi/hotel-booking-frontend/src/models/room');

// Create a new room
async function createRoom(req, res) {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all rooms
async function getRooms(req, res) {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createRoom,
  getRooms,
};
