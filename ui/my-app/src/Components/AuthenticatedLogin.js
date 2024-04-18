import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthApi } from './AuthApi';


function AuthenticatedLogin({children}) {
  const [auth, setAuth] = useState(false);

const AuthApi= createContext();

  useEffect(() => {
    const readCookie = () => {
      const user = Cookies.get("user");
      if (user) {
        setAuth(true);
      }
    };
    readCookie();
  }, []);

  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
    {children}
      <Router>
        <Routes>
          <Route path="/dashboard" component={Dashboard} auth={auth} />
          <Route path="/login" component={Login} auth={auth} />
        </Routes>
      </Router>
    </AuthApi.Provider>
  );
}

const Login = () => {
    const { setAuth } = useContext(AuthApi);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                const data = await response.json();
                setAuth(true);
                Cookies.set('user', data.user); 
            } else {
                // Handle authentication failure
                const errorMessage = await response.text();
                setError(errorMessage);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
    );
};
const Dashboard = () => {
    const { auth, setAuth } = useContext(AuthApi);

    const handleLogout = async () => {
      try {
        setAuth(false);
        Cookies.remove('user');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };
  
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };

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

const ProtectedLogin = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? <Component {...props} /> : <Navigate to="/dashboard" replace />
      }
    />
  );
};

export { AuthenticatedLogin, Dashboard, Login, ProtectedRoute, ProtectedLogin };

