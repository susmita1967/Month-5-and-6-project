import React from 'react';
import { useMutation, gql } from '@apollo/client';

import { DELETE_HOTEL } from '../graphql/mutations';

const DeleteButton = ({ id, onDelete }) => {
  const [deleteHotel] = useMutation(DELETE_HOTEL);

  const handleDelete = async () => {
    try {
      await deleteHotel({ variables: { id } });
      onDelete();
    } catch (error) {
      console.error('Error deleting hotel:', error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
