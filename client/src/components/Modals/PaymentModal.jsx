// PaymentModal.js
// PaymentModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import { useHandlers } from "../../handlers/handlers";
import style from "./Modal.module.css";
import { isValidInstagramUsername } from "../../validations/validations";

Modal.setAppElement("#root");

const PaymentModal = ({
  isOpen,
  onClose,
  cartList,
  totalPrice,
}) => {
  const [clientInstagramUsername, setClientInstagramUsername] = useState("");
  const [touched, setTouchedLocal] = useState(false);
  const [error, setErrorLocal] = useState("");

  const {
    handleSubmitModal,
    handleInputChange,

  } = useHandlers(
    setClientInstagramUsername,
    setTouchedLocal,
    setErrorLocal,
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Ingresar información"
      className={style.modal}
    >
      <div className={style.modalContent}>
        <h2 className={style.modalHeader}>Ingresa tu información</h2>
        <label className={style.modalLabel}>Usuario de Instagram:</label>
        <input
          type="text"
          value={clientInstagramUsername}
          onChange={handleInputChange}
          className={style.modalInput}
        />
        {touched && error && <span className={style.modalError}>{error}</span>}
        <br />
        <button
          onClick={() =>
            handleSubmitModal(cartList, clientInstagramUsername, totalPrice)
          }
          disabled={
            !!error ||
              !isValidInstagramUsername(clientInstagramUsername) ||
              clientInstagramUsername.trim() === ""
          }
          className={style.modalBtn}
        >
          Continuar al pago
        </button>
      </div>
    </Modal>
  );
};

export default PaymentModal;