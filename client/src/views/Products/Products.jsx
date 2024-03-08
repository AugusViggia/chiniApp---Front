import React from "react";
import Product from "../../components/Product/Product";
import { useGetProductsQuery } from "../../firebase/services/firebaseApi";
import style from "./Products.module.css";

const Products = () => {

  const { data } = useGetProductsQuery();
  const products = data;

  return (
      <div className={style.mainContainer}>
  
        <div className={style.filtros}>
          <span className={style.filtrosBtn}>Todo</span>
          <span className={style.filtrosBtn}>Panaderia</span>
          <span className={style.filtrosBtn}>Pasteleria</span>
          <span className={style.filtrosBtn}>Tortas</span>
          <span className={style.filtrosBtn}>Combos</span>
          <span className={style.filtrosBtn}>Personalizados</span>
        </div>
  
        <div className={style.productList}>
          {products && products.map((product) => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
  
      </div>
      
  );
};

export default Products;
