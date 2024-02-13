import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProductHandlers } from "../../handlers/productHandlers";
import { useCartHandlers } from "../../handlers/cartHandlers";
import DeleteProductModal from "../Modals/DeleteProductModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import style from "./Product.module.css";

const Product = ({
  product,
  showQuantityDetail = false,
  showQuantityCart = false,
  inCart = false,
  showAddToCartButton = false,
}) => {
  
  const [quantity, setQuantity] = useState(1);
  const [isModalEmptyOpen, setModalEmptyOpen] = useState(false);

  const {
    handleAddToCart,
    handleIncrementDetail,
    handleDecrementDetail,
    handleIncrementCart,
    handleDecrementCart,
    handleDelete,
  } = useProductHandlers(setModalEmptyOpen);

  const { handleModalCancel } = useCartHandlers(setModalEmptyOpen);

  const totalPrice = product.price * quantity;
  
  return (
    <div className={style.mainContainer}>
      <Link
        to={`/detail/${product.id}`}
        state={{ product }}
        className={style.productLink}
      >
        {product.images && product.images.length > 0 && (
            <img
              src={product.images[0]}
              alt={product.name}
              className={style.image}
            />
        )}
      </Link>
      <div className={style.descriptionContainer}>
        <h3 className={style.productTitle}>{product.name}</h3>
        <p className={style.productDescription}>{product.description}</p>
        <p className={style.productPrice}>Precio: ${product.price}</p>
      </div>
      
      <div className={style.secondaryContainer}>
        {showQuantityDetail && (
          <div className={style.quantityContainer}>
            <button
              onClick={() => {
                if (quantity > 1) {
                  handleDecrementDetail(product, quantity);
                  setQuantity((prevQuantity) => prevQuantity - 1);
                }
              }}
              className={style.quantityButton}
            >
              -
            </button>

            <span className={style.quantity}>{quantity}</span>

            <button
              onClick={() => {
                handleIncrementDetail(product, quantity);
                setQuantity((prevQuantity) => prevQuantity + 1);
              }}
              className={style.quantityButton}
            >
              +
            </button>
          </div>
        )}

        {showAddToCartButton && (
          <Link
            to="/products"
            onClick={() => handleAddToCart(product, quantity, setQuantity(1))}
            className={style.addToCartButton}
          >
            Añadir al Carrito ${totalPrice}
          </Link>
        )}
      </div>

      {showQuantityCart && (
        <div className={style.quantityContainer}>
          {product.quantity > 1 ? (
            <button
              onClick={() => {
                handleDecrementCart(product);
                setQuantity((prevQuantity) => prevQuantity - 1);
              }}
              disabled={product.quantity === 1}
              className={style.quantityButton}
            >
              -
            </button>
          ) : (
            <button
              onClick={() => setModalEmptyOpen(true)}
              className={style.deleteButton}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}

          <DeleteProductModal
            isOpen={isModalEmptyOpen}
            onCancel={handleModalCancel}
            onConfirm={() => handleDelete(product.id)}
          />

          <span className={style.quantity}>{product.quantity}</span>

          <button
            onClick={() => {
              handleIncrementCart(product);
              setQuantity((prevQuantity) => prevQuantity + 1);
            }}
            className={style.quantityButton}
          >
            +
          </button>
        </div>
      )}
      {inCart && (
        <p className={style.productQuantity}>Cantidad: {product.quantity}</p>
      )}
    </div>
  );
};

export default Product;