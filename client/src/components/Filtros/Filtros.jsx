import React from 'react'
import style from "./Filtros.module.css"

const Filtros = () => {
  return (
    
    <div className={style.filtros}>
        <span className={style.filtrosBtn}>Todo</span>
        <span className={style.filtrosBtn}>Panaderia</span>
        <span className={style.filtrosBtn}>Pasteleria</span>
        <span className={style.filtrosBtn}>Tortas</span>
        <span className={style.filtrosBtn}>Combos</span>
        <span className={style.filtrosBtn}>Personalizados</span>
    </div>
  )
}

export default Filtros