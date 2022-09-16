import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { loadUser } from './actions/auth';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';

import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const location = useLocation();
  useEffect(() => {
    store.dispatch(loadUser);
  }, []);

  return (
    <Provider store={store}>
      <Navbar />
      <Alert />
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Landing />} />

        <Route
          exact
          path='/register'
          element={
            <section className='container'>
              <Register />
            </section>
          }
        />
        <Route
          exact
          path='/login'
          element={
            <section className='container'>
              <Login />
            </section>
          }
        />
        <Route
          exact
          path='/dashboard'
          element={<PrivateRoute component={<Dashboard />} />}
        />
      </Routes>
    </Provider>
  );
};

export default App;
