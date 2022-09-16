import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
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
    </Provider>
  );
};

export default App;
