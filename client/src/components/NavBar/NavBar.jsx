import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import style from "./NavBar.module.css";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {

  const HomeRef = useRef(null)
  const CocinaRef = useRef(null)
  const NosotrosRef = useRef(null)

  useEffect(() => {

    gsap.to(HomeRef.current, {
      scrollTrigger: {
        trigger: HomeRef.current,
        start: "25% center",
        end: "bottom center",
        scrub: true,
      },
      x: -100, 
      y: -185,
    })

    gsap.to(CocinaRef.current, {
      scrollTrigger: {
        trigger: CocinaRef.current,
        start: "50% center",
        end: "bottom center",
        scrub: true,
      },
      x: -100, 
      y: -275,
    })

    gsap.to(NosotrosRef.current, {
      scrollTrigger: {
        trigger: NosotrosRef.current,
        start: "75% center",
        end: "bottom center",
        scrub: true,
      },
      x: -100, 
      y: -365,
    })
  }, []);

  
    return (
      <nav className={style.navbar}>
        
        <Link to="/cart" className={style.navLink}>
          <div className={style.cartBox}>
            <div className={style.cart}>
              <FontAwesomeIcon icon={faShoppingCart}/>
            </div>
          </div>
        </Link>

        <Link to="/" className={style.navLink} ref={HomeRef}>
          <div className={style.btn} >HOME</div>
        </Link>

        <Link to="/products" className={style.navLink} ref={CocinaRef}>
          <div className={style.btn}> COCINA </div>
        </Link>

        <Link to="/" className={style.navLink} ref={NosotrosRef}>
          <div className={style.btn}> NOSOTROS </div>
        </Link>        
        
        

        
      </nav>
    );
};

export default NavBar;
