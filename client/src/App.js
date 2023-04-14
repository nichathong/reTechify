import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Products from './components/products/products';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to ReTechify</h1>
      <Products/>
    </div>
  );
}

export default App;
