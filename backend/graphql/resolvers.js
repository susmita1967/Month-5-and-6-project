const User = require('../models/user');
const Hotel = require('../models/hotel');
const Room = require('../models/room');
const RoomType = require('../models/roomType');
const Booking = require('../models/booking');
const Mutation = require('./mutations')(User, Hotel, Room, RoomType, Booking);

const resolvers = {
  Query: {
    users: async () => {
      return await User.findAll();
    },
    hotels: async () => {
      return await Hotel.findAll();
    },
    rooms: async () => {
      return await Room.findAll();
    },
    roomTypes: async () => {
      return await RoomType.findAll();
    },
    bookings: async () => {
      return await Booking.findAll();
    }
  },
  Mutation: Mutation 
};

module.exports = resolvers;


