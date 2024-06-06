import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_BOOKING } from '../graphql/mutations';

const BookingForm = () => {
  const [userId, setUserId] = useState('');
  const [roomId, setRoomId] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [status, setStatus] = useState('');

  const [createBooking, { loading }] = useMutation(CREATE_BOOKING, {
    onCompleted: () => {
      console.log('Booking created successfully');
      setUserId('');
      setRoomId('');
      setCheckInDate('');
      setCheckOutDate('');
      setStatus('');
    },
    onError: (error) => {
      console.error('Error creating booking:', error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createBooking({ variables: { userId, roomId, checkInDate, checkOutDate, status } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '1rem' }}>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="Room ID" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} placeholder="Check-In Date" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} placeholder="Check-Out Date" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <button type="submit" disabled={loading}>Submit</button>
      </div>
    </form>
  );
};

export default BookingForm;
