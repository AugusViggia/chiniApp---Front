import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        allProducts: "",
        cartList: [],
    },
    reducers: {
        setSetectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        addToCart: (state, action) => {
            // Agregar el producto al carrito
            state.cartList.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cartList = state.cartList.filter(
                (item) => item.id !== action.payload.id
            );
        },
        emptyCart: (state, action) => {
            state.cartList = [];
        },
    },
});

export const { setSetectedProduct, addToCart, removeFromCart, emptyCart } =
    homeSlice.actions;

export default homeSlice.reducer;
