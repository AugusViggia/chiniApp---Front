import React, { useState }from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import style from "./NavBar.module.css";

import Cart from "../../views/Cart/Cart";



const NavBar = () => {
  const [modalIsOpen, setModalIsOpen ] = useState(false)

  return (
    <nav className={style.navbar}>


      <Link to="/" className={style.navLink}>
        <div className={style.btn} >HOME</div>
      </Link>


      <Link to="/products" className={style.navLink}>
        <div className={style.btn} > COCINA </div>
      </Link>


      <Link to="/" className={style.navLink}>
        <div className={style.btn} > NOSOTROS </div>
      </Link>  


        <div className={style.cartBox} onClick={() => setModalIsOpen(true)}>
          <div className={style.cart}>
            <FontAwesomeIcon icon={faShoppingCart}/>
          </div>
        </div>

        <Cart isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)}/>

    </nav>
  );
};

export default NavBar;
