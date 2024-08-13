import './App.css';
import ShoppingList from './components/ShoppingList/ShoppingList';
import LoginPage from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import Cart from './components/Cart/Cart';  // Import the Cart component
import ProductList from './components/ProductList/ProductList' // Make sure this path is correct
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductList />} />   
        <Route path="/checkout" element={<Checkout />} />     
      </Routes>
    </Router>
  );
}

export default App;
