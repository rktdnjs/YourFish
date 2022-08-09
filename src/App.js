import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Store from './pages/Store';
import QA from './pages/QA';
import Login from './pages/Login';
import Register from './pages/Register';
import UserFeed from './pages/UserFeed';
import './styles/reset.module.css';

function App() {
  return (
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<UserFeed/>}/>
          <Route path='/QA' element={<QA/>}/>
          <Route path='/Store' element={<Store/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </Router>
  );
}

export default App; 