import React from 'react';
import { useMutation, gql } from '@apollo/client';

import { DELETE_USER } from '../graphql/mutations';

const DeleteButton = ({ id, onDelete }) => {
  const [deleteUser] = useMutation(DELETE_USER);

  const handleDelete = async () => {
    await deleteUser({ variables: { id } });
    onDelete();
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
