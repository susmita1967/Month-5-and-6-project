const { User } = require('c:/Users/susmi/hotel-booking-frontend/src/models/user');

const UserController = {
  // Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a single user by ID
  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a user by ID
  async updateUser(req, res) {
    const { id } = req.params;
    try {
      const [updatedRowsCount] = await User.update(req.body, {
        where: { id },
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a user by ID
  async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await User.destroy({
        where: { id },
      });
      if (deletedRowCount === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UserController;
