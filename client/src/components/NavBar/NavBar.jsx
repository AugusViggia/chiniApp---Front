import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faShoppingCart,
  faHome,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import style from "./NavBar.module.css";

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const showBackButton = location.pathname !== "/";

    return (
      <nav className="navbar">
        {showBackButton && (
          <button className="backButton" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faBackwardStep} />
          </button>
        )}

        <Link to="/products" className={style.navLink}>
          <FontAwesomeIcon icon={faBars} />
        </Link>

        <Link to="/" className={style.navLink}>
          <FontAwesomeIcon icon={faHome} />
        </Link>

        <Link to="/cart" className="viewCartLink">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </nav>
    );
};

export default NavBar;
