import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import Error from './components/Error';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
