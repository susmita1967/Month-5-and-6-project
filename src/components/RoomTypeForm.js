import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ROOM_TYPE } from '../graphql/mutations';

const RoomTypeForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const [createRoomType, { loading, error }] = useMutation(CREATE_ROOM_TYPE, {
    onCompleted: () => {
      console.log('Room type created successfully');
      setName('');
      setDescription('');
      setPrice('');
    },
    onError: (error) => {
      console.error('Error creating room type:', error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createRoomType({
      variables: {
        name,
        description,
        price: parseFloat(price),
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <button type="submit" disabled={loading}>Submit</button>
      </div>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </form>
  );
};

export default RoomTypeForm;
