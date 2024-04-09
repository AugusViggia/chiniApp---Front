import React from "react";
import Product from "../../components/Product/Product";
import Filtros from "../../components/Filtros/Filtros";
import { useGetProductsQuery } from "../../firebase/services/firebaseApi";
import style from "./Products.module.css";

const Products = () => {

  const { data } = useGetProductsQuery();
  const products = data;

  console.log(products)

  return (
      <div className={style.mainContainer}>
  
        <Filtros/>
  
        <div className={style.productList}>
          {products && products.map((product) => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
  
      </div>
      
  );
};

export default Products;
