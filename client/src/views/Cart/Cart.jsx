import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import Loading from "../../components/Loading/Loading";
import { useHandlers } from "../../handlers/handlers";
import PaymentModal from "../../components/Modals/PaymentModal";
import EmptyCartModal from "../../components/Modals/EmptyCartModal";
import style from "./Cart.module.css";
import { Link } from "react-router-dom";

function Cart() {
    const cartList = useSelector((state) => state.homeSlice.cartList);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isModalPaymentOpen, setModalPaymentOpen] = useState(false);
    const [isModalEmptyOpen, setModalEmptyOpen] = useState(false);
    const [setInstagramUsername] = useState("");
    const [setTouched] = useState(false);
    const [setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [reloadComponent, setReloadComponent] = useState(false);
    
    const {
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
              showViewCartButton={false}
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

        <EmptyCartModal
          isOpen={isModalEmptyOpen}
          onCancel={handleModalCancel}
          onConfirm={handleModalYes}
        />

        <PaymentModal
          isOpen={isModalPaymentOpen}
          onClose={() => setModalPaymentOpen(false)}
          cartList={cartList}
          totalPrice={totalPrice}
          setModalOpen={setModalPaymentOpen}
          setInstagramUsername={setInstagramUsername}
          setTouched={setTouched}
          setError={setError}
          setIsLoading={setIsLoading}
          setReloadComponent={setReloadComponent}
          setModalEmptyOpen={setModalEmptyOpen}
        />
      </div>
    );
};

export default Cart;