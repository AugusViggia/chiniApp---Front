import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import Modal from "react-modal";
import Loading from "../../components/Loading/Loading";
import { useHandlers } from "../../handlers/handlers";
import { isValidInstagramUsername } from "../../validations/validations";
import style from "./Cart.module.css";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

function Cart() {
    const cartList = useSelector((state) => state.homeSlice.cartList);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isModalPaymentOpen, setModalPaymentOpen] = useState(false);
    const [isModalEmptyOpen, setModalEmptyOpen] = useState(false);
    const [clientInstagramUsername, setInstagramUsername] = useState("");
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [reloadComponent, setReloadComponent] = useState(false);
    
    const {
        handleSubmitModal,
        handleInputChange,
        handleModalYes,
        handleModalCancel,
    } = useHandlers(
        setInstagramUsername,
        setTouched,
        setError,
        setIsLoading,
        setReloadComponent,
        setModalEmptyOpen
    );

    const totalSum = cartList.reduce(
        (sum, product) => sum + product.price,
        0
    );

    useEffect(() => {
        setTotalPrice(totalSum);
    }, [totalSum]);

    useEffect(() => {
        const loadData = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 900);
        };
        loadData();
    }, [reloadComponent]);

    if (isLoading) {
        return <Loading />;
    };

    return (
      <div className={style.mainContainer}>
        <h1>Carrito de Compras</h1>
        <Link to="/products">Go Back</Link>
        <div className={style.productList}>
          {cartList.map((product, index) => (
            <Product
              key={index}
              product={product}
              showAddToCartButton={false}
            />
          ))}
        </div>

        <p className={style.totalPrice}>Total Price: ${totalPrice}</p>

        <div className={style.cartButtons}>
          <button
            onClick={() => setModalEmptyOpen(true)}
            disabled={cartList.length === 0}
            className={style.emptyCartBtn}
          >
            Empty Cart
          </button>
          <button
            onClick={() => setModalPaymentOpen(true)}
            disabled={cartList.length === 0}
            className={style.payNowBtn}
          >
            Pay Now
          </button>
        </div>

        <Modal
          isOpen={isModalEmptyOpen}
          onRequestClose={() => setModalEmptyOpen(false)}
          contentLabel="Empty Cart"
          className={style.modal}
        >
          <div className={style.modalContent}>
            <h2 className={style.modalHeader}>Empty Cart</h2>
            <p className={style.modalText}>
              Are you sure you want to empty your cart?
            </p>
            <button onClick={handleModalCancel} className={style.modalBtn}>
              Cancel
            </button>
            <button onClick={handleModalYes} className={style.modalBtn}>
              Yes
            </button>
          </div>
        </Modal>

        <Modal
          isOpen={isModalPaymentOpen}
          onRequestClose={() => setModalPaymentOpen(false)}
          contentLabel="Ingresar información"
          className={style.modal}
        >
          <div className={style.modalContent}>
            <h2 className={style.modalHeader}>Ingresa tu información</h2>
            <label className={style.modalLabel}>Usuario de Instagram:</label>
            <input
              type="text"
              value={clientInstagramUsername}
              onChange={handleInputChange}
              className={style.modalInput}
            />
            {touched && error && (
              <span className={style.modalError}>{error}</span>
            )}
            <br />
            <button
              onClick={() =>
                handleSubmitModal(cartList, clientInstagramUsername, totalPrice)
              }
              disabled={
                touched &&
                (!!error || !isValidInstagramUsername(clientInstagramUsername))
              }
              className={style.modalBtn}
            >
              Continuar al pago
            </button>
          </div>
        </Modal>
      </div>
    );
};

export default Cart;