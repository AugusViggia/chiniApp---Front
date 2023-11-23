import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/homeSlice";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const dispatch = useDispatch();

      const handleAddToCart = () => {
        dispatch(addToCart(product));
      };

    return (
      <div className="product">
        {product.images && product.images.length > 0 && (
          <img src={product.images[0]} alt={product.name} />
        )}
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <button onClick={handleAddToCart}>Añadir al Carrito</button>
        <Link to="/cart">Ver Carrito</Link>
      </div>
    );
};

export default Product;
