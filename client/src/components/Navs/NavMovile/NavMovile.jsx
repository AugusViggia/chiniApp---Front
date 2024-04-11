import React, {useState} from 'react'
import { Link } from "react-router-dom";
import style from "./NavMovile.module.css"



const NavMovile = () => {

  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <div className={style.navMovile}>

      <div onClick={() => setIsOpen(true)} className={isOpen ? `${style.btnClear}`: `${style.btn}`}>MENÚ</div>
  
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