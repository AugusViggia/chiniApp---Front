import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./EmptyCartModal.module.css"; // Ajusta la ruta y el nombre del estilo según tu configuración

const CustomModal = ({ isOpen, onRequestClose, title, message, buttons }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async (button) => {
    if (button.onClick) {
      setIsLoading(true);
      await button.onClick();
      setIsLoading(false);
      onRequestClose();
    }
  };

  return (
    <div className={`${style.modal} ${isOpen ? style.modalOpen : ""}`}>
      <div className={style.modalContent}>
        <h2 className={style.modalHeader}>{title}</h2>
        <p className={style.modalText}>{message}</p>
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(button)}
            className={style.modalBtn}
            disabled={isLoading}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
};

export default CustomModal;
