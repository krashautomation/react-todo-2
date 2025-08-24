import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home/Home';
import Main from './Components/Main/Main';



function App() {
  
  return (
       <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;