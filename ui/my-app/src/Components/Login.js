import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthApi = React.createContext();

function AuthenticatedLogin() {
  const [auth, setAuth] = useState(false);

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
      <Router>
        <Switch>
          <ProtectedRoute path="/dashboard" component={Dashboard} auth={auth} />
          <ProtectedLogin path="/login" component={Login} auth={auth} />
        </Switch>
      </Router>
    </AuthApi.Provider>
  );
}

const Login = () => {
    const { setAuth } = useContext(AuthApi);

    const handleLogin = async () => {
        const username = 'example'; // Get username from input field
        const password = 'password'; // Get password from input field

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                const data = await response.json();
                setAuth(true);
                Cookies.set('user', data.user); // Store user data in cookies for session management
            } else {
                // Handle authentication failure
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
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
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const ProtectedLogin = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
};

export default AuthenticatedLogin;
