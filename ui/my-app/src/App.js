import React, { Navigate } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateAccount from './AccountCreation.js';
import Homepage from './Homepage.js'; 
import Inventory from './Inventory.js';
import CreateItem from './Components/CreateItem.js';
import AuthenticatedLogin from './Components/AuthenticatedLogin.js'; 
import Login from './Components/Login.js';


function App() {

  const AuthApi = React.createContext();

  const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          auth ? <Component {...props} /> : <Navigate to="/login" replace />
        }
      />
    );
  };



  return (
    <>
    <Login />
    <Router>
      <AuthenticatedLogin>
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/inventory" element={<Inventory />} />
          <ProtectedRoute path="/createitem" element={<CreateItem />} />
        </Routes>
      </AuthenticatedLogin>
      <Link to="/homepage" style={{ color: "black" }}>Just visiting? View Our Inventory Here!</Link> 
    </Router>
    </>
  );
}

export default App;
