import React, {useState} from 'react'
import { useProductHandlers } from "../../handlers/productHandlers";
import DeleteProductModal from '../Modals/DeleteProductModal';
import style from "./ProductCart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductCart = ({product}) => {
//   console.log(product)
  const [isModalEmptyOpen, setModalEmptyOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

    const { 
        handleIncrementDetail, 
        handleDecrementDetail,
        handleModalCancel,
        handleDelete
    } = useProductHandlers(setModalEmptyOpen);


  return (
    <div className={style.main}>
      <div className={style.imgConteiner}>
        {product.images && product.images.length > 0 ? (
          <img src={product.images[0]} alt="imagen" className={style.imagen} />
        ) : (
          ""
        )}
      </div>

      <div className={style.description}>
        <span className={style.quantity}>{quantity}</span>

        <div className={style.buttonsConteiner}>
          {product.quantity > 1 ? (
            <button
              onClick={() => {
                if (quantity > 1) {
                  handleDecrementDetail(product, quantity);
                  setQuantity((prevQuantity) => prevQuantity - 1);
                }
              }}
              className={style.quantityButton}
            >
              {" "}
              -{" "}
            </button>
          ) : (
            <button
              onClick={() => setModalEmptyOpen(true)}
              className={style.deleteButton}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}

          <DeleteProductModal
            isOpen={isModalEmptyOpen}
            onCancel={handleModalCancel}
            onConfirm={() => handleDelete(product.id)}
          />

          <button
            onClick={() => {
              handleIncrementDetail(product, quantity);
              setQuantity((prevQuantity) => prevQuantity + 1);
            }}
            className={style.quantityButton}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCart