import React from "react";
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Bienvenido a chiniBakery</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
