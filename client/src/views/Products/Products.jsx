import Product from "../../components/Product/Product";
import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../../firebase/services/firebaseApi";
import Loading from "../../components/Loading/Loading";
import style from "./Products.module.css";
import { Link } from "react-router-dom";

function Products({ showAddToCartButton }) {
  const { data, isError, error } = useGetProductsQuery();
  const products = data || [];
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const delayLoading = setTimeout(() => {
      setShowLoading(false);
    }, 900);

    return () => clearTimeout(delayLoading);
  }, []);

  if (showLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error al cargar los productos: {error.message}</p>;
  }

  return (
    <div className={style.mainContainer}>
      <Link to="/">Go Back</Link>
      <h1>Nuestros Productos</h1>
      <div className={style.productList}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            showAddToCartButton={showAddToCartButton}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
