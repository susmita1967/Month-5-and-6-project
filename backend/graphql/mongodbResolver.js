const User = require('../models_mdb/user');
const Hotel = require('../models_mdb/hotel');
const Room = require('../models_mdb/room');
const RoomType = require('../models_mdb/roomType');
const Booking = require('../models_mdb/booking');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    hotels: async () => {
      return await Hotel.find();
    },
    rooms: async () => {
      return await Room.find();
    },
    roomTypes: async () => {
      return await RoomType.find();
    },
    bookings: async () => {
      return await Booking.find();
    }
  },
  Mutation: {
    createUser: async (_, { username, email, role }) => {
      return await User.create({ username, email, role });
    },
    createHotel: async (_, { name, address, description }) => {
      return await Hotel.create({ name, address, description });
    },
    createRoom: async (_, { hotelId, roomTypeId, number, description }) => {
      return await Room.create({ hotelId, roomTypeId, number, description });
    },
    createRoomType: async (_, { name, description, price }) => {
      return await RoomType.create({ name, description, price });
    },
    createBooking: async (_, { userId, roomId, checkInDate, checkOutDate, status }) => {
      return await Booking.create({ userId, roomId, checkInDate, checkOutDate, status });
    }
  }
};

module.exports = resolvers;
