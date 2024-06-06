import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_HOTEL, UPDATE_HOTEL } from '../graphql/mutations';

const HotelForm = ({ refetchHotels }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const [submitHotel, { loading }] = useMutation(CREATE_HOTEL, {
    onCompleted: () => {
      console.log('Hotel created successfully');
      setName('');
      setAddress('');
      setDescription('');
      refetchHotels();
    },
    onError: (error) => {
      console.error('Error creating hotel:', error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHotel({ variables: { name, address, description } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '1rem' }}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Hotel Name" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      </div>
      <div>
        <button type="submit" disabled={loading}>Submit</button>
      </div>
    </form>
  );
};

export default HotelForm;
