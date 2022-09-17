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
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';

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
          element={
            <PrivateRoute
              component={
                <section className='container'>
                  <Dashboard />
                </section>
              }
            />
          }
        />
        <Route
          exact
          path='/create-profile'
          element={
            <PrivateRoute
              component={
                <section className='container'>
                  <CreateProfile />
                </section>
              }
            />
          }
        />
        <Route
          exact
          path='/edit-profile'
          element={
            <PrivateRoute
              component={
                <section className='container'>
                  <EditProfile />
                </section>
              }
            />
          }
        />
      </Routes>
    </Provider>
  );
};

export default App;
