import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home';
import Cardlink from './pages/Cardlink';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product__cart" element={<Cardlink />} />
      </Routes>
    </>
  );
};

export default App;
