import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import UserForm from './UserForm';
import DeleteButton from './DeleteButton';
import './UserList.css'; // Import CSS file for styling

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
      email
      role
    }
  }
`;

const UserList = () => {
  const { loading, error, data, refetch } = useQuery(GET_USERS);
  const [selectedUser, setSelectedUser] = useState(null);
  let userCount = 0; 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleDelete = () => {
    setSelectedUser(null);
    refetch();
  };

  return (
    <div className="user-list-container">
      <div className="user-list">
        <h2>User List</h2>
        {data.users.map((user) => (
          <div key={user.id} className="user-details">
            <div>{++userCount}. Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Role: {user.role}</div>
            <div className="user-actions">
              <button onClick={() => handleEdit(user)}>Edit</button>
              <DeleteButton id={user.id} onDelete={handleDelete} />
            </div>
          </div>
        ))}
      </div>
      <div className="create-user-container">
        <h2>Create User</h2>
        <UserForm user={selectedUser} refetchUsers={refetch} />
      </div>
    </div>
  );
};

export default UserList;
