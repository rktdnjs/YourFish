import './styles/reset.module.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import UserFeed from './pages/UserFeed';
import QA from './pages/QA';
import Store from './pages/Store';
import Login from './pages/Login';
import Register from './pages/Register';
import MyPage from './pages/mypage/MyPage';
import WriteUserFeed from './pages/WriteUserFeed';

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
          <Route path='/MyPAge' element={<MyPage/>}/>
          <Route path='/WriteUserFeed' element={<WriteUserFeed/>}/>
        </Routes>
      </Router>
  );
}
 
export default App; 