import React from 'react'
import style from "./NavMovile.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"

const NavMovile = () => {
  return (
    <div className={style.navMovile}>
        <FontAwesomeIcon icon={faBars} />
        <div className={style.contenido}> </div>
    </div>
  )
}

export default NavMovile