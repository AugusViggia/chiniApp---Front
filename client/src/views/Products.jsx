import Product from "../components/Product/Product";
import { useGetProductsQuery } from "../firebase/services/firebaseApi";
import Loading from "../components/Loading/Loading";

function Products() {
    const { data, isLoading, isError, error } = useGetProductsQuery();
    const products = data || [];

    if (isLoading) {
      return <Loading />;
    }

    if (isError) {
      return <p>Error al cargar los productos: {error.message}</p>;
    }

    return (
        <div>
            <h1>Nuestros Productos</h1>
            <div className="product-list">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;
