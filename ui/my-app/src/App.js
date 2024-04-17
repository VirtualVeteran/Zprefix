import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateAccount from './AccountCreation.js';
import Homepage from './Homepage.js'; 
import Inventory from './Inventory.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/Inventory" element={<Inventory />} />
        
      </Routes>
      <Link to="/homepage" style={{ color: "black" }}>Just visiting? View Our Inventory Here!</Link> 
    </Router>
  );
}

export default App;
