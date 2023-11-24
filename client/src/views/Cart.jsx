import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { emptyCart } from "../redux/slice/homeSlice";
import Product from "../components/Product/Product";
import axios from "axios";

// const apiURL = process.env.REACT_APP_API_URL;
const apiURL = "https://chiniapp-api-production.up.railway.app"

function Cart() {
    const cartList = useSelector((state) => state.homeSlice.cartList);
    const [totalPrice, setTotalPrice] = useState(0);
    
    const dispatch = useDispatch();

    const totalSum = cartList.reduce(
        (sum, product) => sum + product.price,
        0
    );

    useEffect(() => {
        setTotalPrice(totalSum);
    }, [totalSum]);

    const handleEmptyCart = () => {
        confirmAlert({
            title: "Empty Cart",
            message: "Are you sure you want to empty your cart?",
            buttons: [
                {
                    label: "Cancel",
                    onClick: () => console.log("Cancel Pressed"),
                },
                {
                    label: "Yes",
                    onClick: () => dispatch(emptyCart()), 
                },
            ],
        });
    };

    const handlePayNow = async () => {
        try {
            const response = await axios.post(
                `${apiURL}/create-order`,
                cartList
            );
            const initPoint = response.data.init_point;
            console.log("esta es la response.data", response.data);
            window.location.href = initPoint;
        } catch (error) {
            console.log("soy el error", error);
        }
    };

    return (
        <div>
            <h1>Carrito de Compras</h1>
            <div className="cart-list">
                {cartList.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>

            <p>Total Price: ${totalPrice}</p>

            <button onClick={handleEmptyCart}>Empty Cart</button>
            <button onClick={handlePayNow}>Pay Now</button>
        </div>
    );
}

export default Cart;

