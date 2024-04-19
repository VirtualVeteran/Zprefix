import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ViewInventory from './ViewInventory.js';
import Mainpage from './Mainpage.js';
import Login from './Components/Login.js';
import CreateAccount from './AccountCreation.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/view-inventory" element={<ViewInventory />} />
          <Route path="/mainpage" element={<Mainpage />} />
        </Routes>
        <Link className='mainpage' to="/mainpage" style={{ color: "black" }}>Already have an account or need to make one?</Link>
        <div></div>
        <Link className='inventory' to="/view-inventory" style={{ color: "black" }}>Just visiting? View Our Inventory Here!</Link>
      </div>
    </Router>
  );
}

export default App;
