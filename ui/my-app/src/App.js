import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateAccount from './AccountCreation.js';
import Homepage from './Homepage.js';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<CreateAccount />} />
    </Routes>
        <Link to={'/Homepage'} style={{color:"black"}}>Just visiting? View Our Inventory Here!</Link>
  </Router>
    

  );
}

export default App;