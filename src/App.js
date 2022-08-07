import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Store from './pages/Store';
import QA from './pages/QA';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/mypage/Main';
import UserFeed from './pages/UserFeed';
import './styles/reset.module.css';

function App() {
  return (
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<UserFeed/>}/>
        </Routes>
      </Router>
  );
}

export default App;