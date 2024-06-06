import { gql } from '@apollo/client';

// User mutations
export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $role: String!) {
    createUser(username: $username, email: $email, role: $role) {
      id
      username
      email
      role
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      username
      email
      role
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

// Hotel mutations
export const CREATE_HOTEL = gql`
  mutation CreateHotel($name: String!, $address: String!, $description: String) {
    createHotel(name: $name, address: $address, description: $description) {
      id
      name
      address
      description
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_HOTEL = gql`
  mutation UpdateHotel($id: ID!, $input: UpdateHotelInput!) {
    updateHotel(id: $id, input: $input) {
      id
      name
      address
      description
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_HOTEL = gql`
  mutation DeleteHotel($id: ID!) {
    deleteHotel(id: $id)
  }
`;

// Room mutations
export const CREATE_ROOM = gql`
  mutation CreateRoom($hotelId: ID!, $roomTypeId: ID!, $number: String!, $description: String) {
    createRoom(hotelId: $hotelId, roomTypeId: $roomTypeId, number: $number, description: $description) {
      id
      hotelId
      roomTypeId
      number
      description
      createdAt
      updatedAt
    }
  }
`;

// RoomType mutations
export const CREATE_ROOM_TYPE = gql`
  mutation CreateRoomType($name: String!, $description: String, $price: Float!) {
    createRoomType(name: $name, description: $description, price: $price) {
      id
      name
      description
      price
      createdAt
      updatedAt
    }
  }
`;

// Booking mutations
export const CREATE_BOOKING = gql`
  mutation CreateBooking($userId: ID!, $roomId: ID!, $checkInDate: String!, $checkOutDate: String!, $status: String!) {
    createBooking(userId: $userId, roomId: $roomId, checkInDate: $checkInDate, checkOutDate: $checkOutDate, status: $status) {
      id
      userId
      roomId
      checkInDate
      checkOutDate
      status
      createdAt
      updatedAt
    }
  }
`;