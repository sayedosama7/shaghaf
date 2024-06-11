import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import AddRoom from './Pages/AddRoom';
import AddEvents from './Pages/AddEvents';
import CreateAccount from './Pages/CreateAccount';
import Orders from './Pages/Orders';
import AddRoomForm from './Pages/AddRoomForm';


function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<AddRoom />} />
          <Route path="/add-room" element={<AddRoom />} />
          <Route path="/add-room-form" element={<AddRoomForm />} />
          <Route path="/add-event" element={<AddEvents />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/orders" element={<Orders />} />

        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
