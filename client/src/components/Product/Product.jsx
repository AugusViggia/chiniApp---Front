import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/homeSlice";
import { Link } from "react-router-dom";
import style from "./Product.module.css";

const Product = ({ product, showAddToCartButton = true, showViewCartButton = true }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={style.mainContainer}>
      {product.images && product.images.length > 0 && (
        <img
          src={product.images[0]}
          alt={product.name}
          className={style.image}
        />
      )}
      <h3 className={style.productTitle}>{product.name}</h3>
      <p className={style.productDescription}>{product.description}</p>
      <p className={style.productPrice}>Precio: ${product.price}</p>
      {showAddToCartButton && (
        <button onClick={handleAddToCart} className={style.addToCartButton}>
          Añadir al Carrito
        </button>
      )}
      {showViewCartButton && (
        <Link to="/cart" className={style.viewCartLink}>
          Ver Carrito
        </Link>
      )}
    </div>
  );
};

export default Product;
