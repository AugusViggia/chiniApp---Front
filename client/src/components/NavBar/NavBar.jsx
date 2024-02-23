import React from "react";
import { Link, /*useLocation, useNavigate*/ } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import style from "./NavBar.module.css";

const NavBar = () => {
    //const location = useLocation();
    //const navigate = useNavigate();

    return (
      <nav className={style.navbar}>
        
        <Link to="/cart" className={style.navLink}>
          <div className={style.cartBox}>
            <div className={style.cart}>
              <FontAwesomeIcon icon={faShoppingCart}/>
            </div>
          </div>
        </Link>

        <Link to="/" className={style.navLink}>
          <div className={style.btn}>
            <span className={style.logo}>HOME</span>
          </div>
        </Link>

        <Link to="/products" className={style.navLink}>
          <div className={style.btn}>
            <span> COCINA </span>
          </div>
        </Link>

        <Link to="/" className={style.navLink}>
          <div className={style.btn}>
            <span> NOSOTROS </span>
          </div>
        </Link>        
        
        

        
      </nav>
    );
};

export default NavBar;
