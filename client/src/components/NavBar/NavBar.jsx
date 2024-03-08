import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import style from "./NavBar.module.css";


const NavBar = () => {

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

        <Link to="/cart" className={style.navLink}>
          <div className={style.cartBox}>
            <div className={style.cart}>
              <FontAwesomeIcon icon={faShoppingCart}/>
            </div>
          </div>
        </Link>

      </nav>
    );
};

export default NavBar;
