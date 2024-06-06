

const Mutation = (User, Hotel, Room, RoomType, Booking) => ({
  createUser: async (_, { username, email, role }) => {
    return await User.create({ username, email, role });
  },
  deleteUser: async (_, { id }) => {
    try {
      await User.destroy({ where: { id } });
      return "User Deleted Successfully";
    } catch (error) {
      console.error('Error deleting user:', error);
      return false;
    }
  },
  updateUser: async (_, { id, input }) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error('User not found');
      }
      return await user.update(input);
    } catch (error) {
      console.error('Error updating user:', error);
      return null;
    }
  },

  createHotel: async (_, { name, address, description }) => {
      return await Hotel.create({ name, address, description });
    },
    deleteHotel: async (_, { id }) => {
        try {
          await Hotel.destroy({ where: { id } });
          return "Sucessfully Deleted"; 
        } catch (error) {
          console.error('Error deleting hotel:', error);
          return false; 
        }
      },
      updateHotel: async (_, { id, input }) => {
        try {
          const hotel = await Hotel.findByPk(id);
          if (!hotel) {
            throw new Error('Hotel not found');
          }
          return await hotel.update(input);
        } catch (error) {
          console.error('Error updating hotel:', error);
          return null;
        }
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
 
});

module.exports = Mutation;
