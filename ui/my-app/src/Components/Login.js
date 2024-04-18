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

  const handleOnClick = () => {
    setAuth(true);
    Cookies.set("user", "loggedIn", { expires: 1 });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleOnClick}>Login</button>
    </div>
  );
};

const Dashboard = () => {
  const { auth, setAuth } = useContext(AuthApi);

  const handleOnClick = () => {
    setAuth(false);
    Cookies.remove("user");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleOnClick}>Logout</button>
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
