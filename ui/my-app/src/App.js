import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Cookies from 'js-cookie';
import Homepage from './Homepage.js'; 
import Inventory from './Inventory.js';
import CreateItem from './Components/CreateItem.js';
import Login from './Components/Login.js'



function App() {
  return (
    <>
    <Login />

    <Router>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/createitem" element={<CreateItem />} />
        </Routes>
      <Link to="/homepage" style={{ color: "black" }}>Just visiting? View Our Inventory Here!</Link>
    </Router>
    </>
  );
}

export default App;