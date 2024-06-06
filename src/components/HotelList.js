import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import HotelForm from './HotelForm';
import DeleteButton from './DeleteButton';
import './HotelList.css'; 

const GET_HOTELS = gql`
  query GetHotels {
    hotels {
      id
      name
      address
      description
    }
  }
`;

const HotelList = () => {
  const { loading, error, data, refetch } = useQuery(GET_HOTELS);
  const [selectedHotel, setSelectedHotel] = useState(null);
  let hotelCount = 0;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleEdit = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleDelete = () => {
    setSelectedHotel(null);
    refetch();
  };

  return (
    <div className="hotel-list-container">
      <div className="hotel-list">
        <h2>Hotel List</h2>
        {data.hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-details">
            <div>{++hotelCount}. Name: {hotel.name}</div>
            <div>Address: {hotel.address}</div>
            <div>Description: {hotel.description}</div>
            <div className="hotel-actions">
              <button onClick={() => handleEdit(hotel)}>Edit</button>
              <DeleteButton id={hotel.id} onDelete={handleDelete} />
            </div>
          </div>
        ))}
      </div>
      <div className="create-hotel-container">
        <h2>Create Hotel</h2>
        <HotelForm refetchHotels={refetch} />
      </div>
    </div>
  );
};

export default HotelList;
