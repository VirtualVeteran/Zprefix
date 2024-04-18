import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage.js'; 
import Login from './Components/Login.js';
import CreateAccount from './AccountCreation.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
      <Link to="/homepage" style={{ color: "black" }}>Just visiting? View Our Inventory Here!</Link>
    </Router>
  );
}

export default App;
