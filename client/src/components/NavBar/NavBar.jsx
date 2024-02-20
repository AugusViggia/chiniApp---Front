import React from "react";
import { Link, /*useLocation, useNavigate*/ } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import style from "./NavBar.module.css";

const NavBar = () => {
    //const location = useLocation();
    //const navigate = useNavigate();

    return (
      <nav className={style.navbar}>
        <div className={style.buttons}>
          <Link to="/" className={style.navLink}>
            <div className={style.btn}>
              <span> Nosotros </span>
            </div>
          </Link>
          
          <Link to="/products" className={style.navLink}>
            <div className={style.btn}>
              <span> Cocina </span>
            </div>
          </Link>
        </div>
        
        <Link to="/" className={style.navLink}>
          <div className={style.home}>
            <span className={style.logo}> ChiniBakery.</span>
          </div>
        </Link>

        <Link to="/cart" className={style.navLink}>
          <div className={style.cart}>
            <FontAwesomeIcon icon={faShoppingCart}/>
          </div>
          
        </Link>
      </nav>
    );
};

export default NavBar;
