const { sequelize, DataTypes } = require('../database/connection');
const Room = sequelize.define('Room', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hotelId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  roomTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Room;
