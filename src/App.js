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
import Modify from './pages/mypage/Modify';
import WriteUserFeed from './pages/WriteUserFeed';
import Board from './pages/mypage/Board';
import Wishlist from './pages/mypage/WishList';
import Service from './pages/mypage/Service';
import Loading from './components/Loading';

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
          <Route path='/MyPage' element={<MyPage/>}/>
          <Route path='/MyPage/Modify' element={<Modify/>}/>
          <Route path='/MyPage/Board' element={<Board/>}/>
          <Route path='/MyPage/Wishlist' element={<Wishlist/>}/>
          <Route path='/MyPage/Service' element={<Service/>}/>
          <Route path='/WriteUserFeed' element={<WriteUserFeed/>}/>
        </Routes>
      </Router>
  );
}
 
export default App; 