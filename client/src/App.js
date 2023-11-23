import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Products from "./views/Products";
import Cart from "./views/Cart";

function App() {
  return (
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
    </Routes>
  );
}

export default App;