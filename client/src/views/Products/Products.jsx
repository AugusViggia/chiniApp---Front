import React, { useState } from "react";
import Product from "../../components/Product/Product";
import Filtros from "../../components/Filtros/Filtros";
import NavBar from "../../components/Navs/NavBar/NavBar";
import NavMovile from "../../components/Navs/NavMovile/NavMovile";
import { useGetProductsQuery } from "../../firebase/services/firebaseApi";
import style from "./Products.module.css";

const Products = () => {
  const { data } = useGetProductsQuery();
  const products = data;

  const [filtroActivo, setFiltroActivo] = useState("Todo");

  console.log(products);

  const productosFiltrados =
    filtroActivo === "Todo"
      ? products
      : products.filter((product) => product.category === filtroActivo);

  return (
    <div className={style.mainContainer}>
      <NavMovile />
      <NavBar />
      <Filtros setFiltroActivo={setFiltroActivo} />

      <div className={style.productList}>
        {productosFiltrados &&
          productosFiltrados.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
