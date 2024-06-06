import React from 'react';
import { useQuery, gql } from '@apollo/client';
import BookingForm from './BookingForm';
import './BookingList.css';

const GET_BOOKINGS = gql`
  query GetBookings {
    bookings {
      id
      userId
      roomId
      checkInDate
      checkOutDate
      status
    }
  }
`;

const BookingList = () => {
  const { loading, error, data, refetch } = useQuery(GET_BOOKINGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="booking-list-container">
      <div className="booking-list">
        <h2>Booking List</h2>
        <ul>
          {data.bookings.map(({ id, userId, roomId, checkInDate, checkOutDate, status }) => (
            <li key={id} className="booking-details">
              <div>
                <h3>Booking ID: {id}</h3>
                <p>User ID: {userId}</p>
                <p>Room ID: {roomId}</p>
                <p>Check-In Date: {checkInDate}</p>
                <p>Check-Out Date: {checkOutDate}</p>
                <p>Status: {status}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="create-booking-container">
        <h2>Create Booking</h2>
        <BookingForm refetchBookings={refetch} />
      </div>
    </div>
  );
};

export default BookingList;
