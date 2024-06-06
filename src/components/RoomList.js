import React from 'react';
import { useQuery, gql } from '@apollo/client';
import RoomForm from './RoomForm';
import './RoomList.css';

const GET_ROOMS = gql`
  query GetRooms {
    rooms {
      id
      hotelId
      roomTypeId
      number
      description
    }
  }
`;

const RoomList = () => {
  const { loading, error, data, refetch } = useQuery(GET_ROOMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="room-list-container">
      <div className="room-list">
        <h2>Room List</h2>
        <ul>
          {data.rooms.map(({ id, hotelId, roomTypeId, number, description }) => (
            <li key={id} className="room-details">
              <div>
                <h3>Room Number: {number}</h3>
                <p>Hotel ID: {hotelId}</p>
                <p>Room Type ID: {roomTypeId}</p>
                <p>Description: {description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="create-room-container">
        <h2>Create Room</h2>
        <RoomForm refetchRooms={refetch} />
      </div>
    </div>
  );
};

export default RoomList;
