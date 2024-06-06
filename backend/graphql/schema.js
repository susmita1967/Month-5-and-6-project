const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    role: String!
    createdAt: String!
    updatedAt: String!
  }

  type Hotel {
    id: ID!
    name: String!
    address: String!
    description: String
    createdAt: String!
    updatedAt: String!
  }

  type Room {
    id: ID!
    hotelId: ID!
    roomTypeId: ID!
    number: String!
    description: String
    createdAt: String!
    updatedAt: String!
  }

  type RoomType {
    id: ID!
    name: String!
    description: String
    price: Float!
    createdAt: String!
    updatedAt: String!
  }

  type Booking {
    id: ID!
    userId: ID!
    roomId: ID!
    checkInDate: String!
    checkOutDate: String!
    status: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    users: [User]
    hotels: [Hotel]
    rooms: [Room]
    roomTypes: [RoomType]
    bookings: [Booking]
  }

  type Mutation {
    createUser(username: String!, email: String!, role: String!): User
    createHotel(name: String!, address: String!, description: String): Hotel
    createRoom(hotelId: ID!, roomTypeId: ID!, number: String!, description: String): Room
    createRoomType(name: String!, description: String, price: Float!): RoomType
    createBooking(userId: ID!, roomId: ID!, checkInDate: String!, checkOutDate: String!, status: String!): Booking
    deleteUser(id: ID!): String
    updateHotel(id: ID!, input: UpdateHotelInput!): Hotel
    deleteHotel(id: ID!): String
    updateUser(id: ID!, input: UpdateUserInput!): User
    
  }
 
  input UpdateUserInput {
    username: String
    email: String
    role: String
  }
 
  input UpdateHotelInput {
    name: String
    address: String
    description: String
  }
  
  
`;

module.exports = typeDefs;
