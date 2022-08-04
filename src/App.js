import React from 'react';
import AxiosTest from './pages/AxiosTest';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<AxiosTest/>}/>
        </Routes>
      </Router>
  );
}

export default App;