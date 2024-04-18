import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateAccount from './AccountCreation.js';
import Homepage from './Homepage.js'; 
import Inventory from './Inventory.js';
import CreateItem from './Components/CreateItem.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/CreateItem" element={<CreateItem />} />
      </Routes>
      <Link to="/homepage" style={{ color: "black" }}>Just visiting? View Our Inventory Here!</Link> 
    </Router>
  );
}

export default App;
