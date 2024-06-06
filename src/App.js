
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ApolloProviderWrapper } from './apolloClient';
import UserList from './components/UserList';
import HotelList from './components/HotelList';
import RoomList from './components/RoomList';
import RoomTypeList from './components/RoomTypeList';
import BookingList from './components/BookingList';
import './App.css';

const App = () => {


  return (
    <ApolloProviderWrapper>
      <Router>
        <div className="App">
          <nav>
            {<ul>
              <li>
                <Link to="/users">
                  <img src="/images/users-icon.png" alt="Users" />
                  <span>Users</span>
                </Link>
              </li>
              <li>
                <Link to="/hotels">
                  <img src="/images/hotels-icon.png" alt="Hotels" />
                  <span>Hotels</span>
                </Link>
              </li>
              <li>
                <Link to="/rooms">
                  <img src="/images/rooms-icon.png" alt="Rooms" />
                  <span>Rooms</span>
                </Link>
              </li>
              <li>
                <Link to="/room-types">
                  <img src="/images/room-types-icon.png" alt="Room Types" />
                  <span>Room Types</span>
                </Link>
              </li>
              <li>
                <Link to="/bookings">
                  <img src="/images/bookings-icon.png" alt="Bookings" />
                  <span>Bookings</span>
                </Link>
              </li>
            </ul>}
          </nav>

          <main>
            <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/room-types" element={<RoomTypeList />} />
        <Route path="/bookings" element={<BookingList />} />
        <Route path="/" element={<div className="WelcomeSection"><h1>Welcome to the Hotel Booking System</h1></div>} />
            </Routes>
          </main>

        </div>
      </Router>
    </ApolloProviderWrapper>
  );
};

export default App;
