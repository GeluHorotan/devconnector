import './App.css';
import React from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landing />} />

          <Route
            exact
            path='/register'
            element={
              <section className='container'>
                <Register />
              </section>
            }
          ></Route>
          <Route
            exact
            path='/login'
            element={
              <section className='container'>
                <Login />
              </section>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
