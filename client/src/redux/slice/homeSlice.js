import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        allProducts: [],
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
        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const productIndex = state.cartList.findIndex(
                (product) => product.id === productId
            );

            if (productIndex !== -1) {
                state.cartList[productIndex].quantity = quantity;
            }
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

export const {
    setSetectedProduct,
    addToCart,
    updateQuantity,
    removeFromCart,
    emptyCart,
} = homeSlice.actions;

export default homeSlice.reducer;
