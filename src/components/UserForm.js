import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER, UPDATE_USER } from '../graphql/mutations';

const UserForm = ({ user, refetchUsers }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
      setRole(user.role);
    } else {
      setUsername('');
      setEmail('');
      setRole('');
    }
  }, [user]);

  const [submitUser, { loading }] = useMutation(user ? UPDATE_USER : CREATE_USER, {
    onCompleted: () => {
      console.log(`User ${user ? 'updated' : 'created'} successfully`);
      setUsername('');
      setEmail('');
      setRole('');
      refetchUsers();
    },
    onError: (error) => {
      console.error(`Error ${user ? 'updating' : 'creating'} user:`, error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitUser({ variables: user ? { id: user.id, input: { username, email, role } } : { username, email, role } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '1rem' }}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" />
      </div>
      <div>
        <button type="submit" disabled={loading}>
          {user ? 'Update' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
