import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../components/Loading/Loading";
import style from "./Home.module.css";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 900);
    };
    loadData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={style.mainContainer}>
      <h1>Bienvenido a chiniBakery</h1>
      <nav className={style.navBar}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <Link to="/products" className={style.navLink}>
              <FontAwesomeIcon icon={faBars} /> Products
            </Link>
          </li>
          <li className={style.navItem}>
            <Link to="/" className={style.navLink}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li className={style.navItem}>
            <Link to="/cart" className={style.navLink}>
              <FontAwesomeIcon icon={faCartShopping} /> Cart
            </Link>
          </li>
        </ul>
      </nav>

      <p>
        ABOUT US: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        veritatis eveniet sapiente, illum nihil praesentium vitae perferendis,
        asperiores laudantium nobis velit quaerat tempora explicabo quas
        blanditiis. Totam dolorem cupiditate praesentium.
      </p>
    </div>
  );
}

export default Home;