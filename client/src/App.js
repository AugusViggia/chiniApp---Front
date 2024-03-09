import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Cart from "./views/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import Loading from "./components/Loading/Loading";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const delayLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delayLoading);
  }, [location.pathname]);
  
  return (
    <div className="App">
      <img src="/Portada.jpg" alt="fondo" className="background-image"></img>
      
      {isLoading && <Loading />}
      { location.pathname === "/products" && <NavBar/> }
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </div>
  );
};

export default App;
