import React, {useState} from 'react'
import { useProductHandlers } from "../../handlers/productHandlers";
import style from "./ProductCart.module.css"

const ProductCart = ({product}) => {
    console.log(product)

    const { 
        handleIncrementDetail, 
        handleDecrementDetail,
    } = useProductHandlers();


  return (
    <div className={style.main}>
        <div className={style.imgConteiner}>
            { product.images && product.images.length > 0 
            ? (<img src={product.images[0]} alt="imagen" className={style.imagen}/>) 
            : "" }
        </div>

        <div className={style.description}>
            
            <span className={style.quantity}>{quantity}</span>

            <div className={style.buttonsConteiner}>
                
                <button
                    onClick={() => {
                      if (quantity > 1) {
                        handleDecrementDetail(product, quantity);
                        setQuantity((prevQuantity) => prevQuantity - 1);
                      }
                    }}
                    className={style.quantityButton}
                > - </button>
    
                <button
                    onClick={() => {
                      handleIncrementDetail(product, quantity);
                      setQuantity((prevQuantity) => prevQuantity + 1);
                    }}
                    className={style.quantityButton}
                > + </button>

            </div>
                
        </div>
    </div>
  )
}

export default ProductCart