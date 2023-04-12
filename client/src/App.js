import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/products/products';

function App() {
  return (
    <div>
      <h1>Welcome to my E-commerce webite</h1>
      <Products/>
      {/* <Router>
        <Routes>
          <Route exact path="/products" component={Products} />


        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
