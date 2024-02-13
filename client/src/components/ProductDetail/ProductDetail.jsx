import React from "react";
import { useLocation } from "react-router-dom";
import Product from "../Product/Product";
import style from "./ProductDetail.module.css";

const ProductDetail = () => {
    const { product } = useLocation().state || {};

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className={`${style.mainContainer} ${style.productContainer}`}>
            <Product
                product={product}
                showQuantityDetail={true}
                showAddToCartButton={true}
                showViewCartButton={true}
            />
        </div>
    );
};

export default ProductDetail;