import Product from "../../components/Product/Product";
import { useGetProductsQuery } from "../../firebase/services/firebaseApi";
import style from "./Products.module.css";
import { Link } from "react-router-dom";

function Products({ showAddToCartButton }) {
  const { data } = useGetProductsQuery();
  const products = data || [];

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
