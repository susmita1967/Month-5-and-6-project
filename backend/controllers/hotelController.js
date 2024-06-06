
const { Hotel } = require('../models/hotel');

const HotelController = {
  // Create a new hotel
  async createHotel(req, res) {
    try {
      const hotel = await Hotel.create(req.body);
      res.status(201).json(hotel);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all hotels
  async getHotels(req, res) {
    try {
      const hotels = await Hotel.findAll();
      res.json(hotels);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a single hotel by ID
  async getHotelById(req, res) {
    const { id } = req.params;
    try {
      const hotel = await Hotel.findByPk(id);
      if (!hotel) {
        return res.status(404).json({ error: 'Hotel not found' });
      }
      res.json(hotel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a hotel by ID
  async updateHotel(req, res) {
    const { id } = req.params;
    try {
      const [updatedRowsCount] = await Hotel.update(req.body, {
        where: { id },
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: 'Hotel not found' });
      }
      res.json({ message: 'Hotel updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a hotel by ID
  async deleteHotel(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Hotel.destroy({
        where: { id },
      });
      if (deletedRowCount === 0) {
        return res.status(404).json({ error: 'Hotel not found' });
      }
      res.json({ message: 'Hotel deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = HotelController;
