import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ROOM } from '../graphql/mutations';

const RoomForm = () => {
  const [hotelId, setHotelId] = useState('');
  const [roomTypeId, setRoomTypeId] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');

  const [createRoom, { loading }] = useMutation(CREATE_ROOM, {
    onCompleted: () => {
      console.log('Room created successfully');
      setHotelId('');
      setRoomTypeId('');
      setNumber('');
      setDescription('');
    },
    onError: (error) => {
      console.error('Error creating room:', error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createRoom({ variables: { hotelId, roomTypeId, number, description } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '1rem' }}>
        <input type="text" value={hotelId} onChange={(e) => setHotelId(e.target.value)} placeholder="Hotel ID" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input type="text" value={roomTypeId} onChange={(e) => setRoomTypeId(e.target.value)} placeholder="Room Type ID" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Number" />
      </div>
      <div>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      </div>
      <div>
        <button type="submit" disabled={loading}>Submit</button>
      </div>
    </form>
  );
};

export default RoomForm;
