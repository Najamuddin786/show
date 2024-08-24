import React from 'react';
import {Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import View from '../Pages/View';

function AllRouter() {
  return (
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/view/:number" element={<View />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes here */}
      </Routes>

  );
}

export default AllRouter
