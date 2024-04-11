import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from "../../../views/Cart/Cart";
import style from "./NavMovile.module.css"



const NavMovile = () => {

  const [ isOpen, setIsOpen ] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  console.log(modalIsOpen)

  return (
    <div className={style.navMovile}>

      <Cart isCartOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} />

      <div className={isOpen ? `${style.navOpen}`: `${style.nav}`}>
        
        <div onClick={() => setIsOpen(true)} className={style.btn}>MENÚ</div>
        
        <div className={style.cartBox} onClick={() => setModalIsOpen(true)}>
          <div className={style.cart}>
           <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>

      </div>



      <div className={isOpen ? `${style.contenidoOpen}`: `${style.contenido}`}>

        <div className={style.buttonCont}>
          <button onClick={() => setIsOpen(false)} className={style.cerrar}>x</button>
        </div>

        <div className={style.linksCont}>
          
          <Link to="/" className={style.navLink} >
            <div className={style.btnCont}>HOME</div>
          </Link>
  
          <Link to="/products" className={style.navLink} >
            <div className={style.btnCont}> COCINA </div>
          </Link>
  
          <Link to="/" className={style.navLink} >
            <div className={style.btnCont}> NOSOTROS </div>
          </Link>

        </div>
          

      </div>

    </div>
  )
}

export default NavMovile