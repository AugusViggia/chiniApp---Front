import React from 'react';
import style from "./ProductsHome.module.css";

const ProductsHome = () => {
  return (
    <div className={style.MainConteiner}>
      
      <div className={style.grid}>

        <div className={style.destacado1}>
          <img src="/Chocotorta.jpg" alt="imagen" className={style.productImg1} />
          <div className={style.productDetail1}>
            <span className={style.nombre}>Chocotorta</span>
  
            
            <div className={style.buttonCont}>
              <button>+</button>{1}<button>-</button>
            </div>
          </div>
          
        </div>

        <div className={style.destacado2}>
          <img src="/Cookies.jpeg" alt="imagen" className={style.productImg2} />
          <div className={style.productDetail1}>
            <span className={style.nombre}> Cookies </span>

            <div className={style.buttonCont}>
              <button>+</button>{1}<button>-</button>
            </div>

          </div>
        </div>

        <div className={style.destacado3}>
          <img src="/Maicena.jpg" alt="imagen" className={style.productImg2} />
          <div className={style.productDetail1}>
            <span className={style.nombre}>Macarón</span>
            
            <div className={style.buttonCont}>
              <button>+</button>{1}<button>-</button>
            </div>
            
          </div>
        </div>

        <div className={style.destacado4}>
          <img src="/Medialunas.jpg" alt="imagen" className={style.productImg2} />
          <div className={style.productDetail1}>
            <span className={style.nombre}>Medialuna</span>
            
            <div className={style.buttonCont}>
              <button>+</button>{1}<button>-</button>
            </div>
              
          </div>
        </div>

        <div className={style.destacado5}>
          <img src="/Muffin.jpg" alt="imagen" className={style.productImg2} />
          <div className={style.productDetail1}>
            <span className={style.nombre}> Muffin</span>
            
            <div className={style.buttonCont}>
              <button>+</button>{1}<button>-</button>
            </div>
          
          </div>
        </div>

        <div className={style.destacado6}>
          <img src="/Tarta.jpeg" alt="imagen" className={style.productImg2} />
          <div className={style.productDetail1}>
            <span className={style.nombre}>Torta</span>
            
            <div className={style.buttonCont}>
              <button>+</button>{1}<button>-</button>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductsHome;