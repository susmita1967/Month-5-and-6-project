import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import RoomTypeForm from './RoomTypeForm'; 
import './RoomTypeList.css'; // Import CSS file

const GET_ROOM_TYPES = gql`
  query GetRoomTypes {
    roomTypes {
      id
      name
      description
      price
    }
  }
`;

const RoomTypeList = () => {
  const { loading, error, data, refetch } = useQuery(GET_ROOM_TYPES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="room-type-list-container">
      <div className="room-type-list">
        <h2>Room Type List</h2>
        <ul>
          {data.roomTypes.map(({ id, name, description, price }) => (
            <li key={id} className="room-type-details">
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Price: {price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="create-room-type-container">
        <h2>Create Room Type</h2>
        <RoomTypeForm refetchRoomTypes={refetch} />
      </div>
    </div>
  );
};

export default RoomTypeList;
