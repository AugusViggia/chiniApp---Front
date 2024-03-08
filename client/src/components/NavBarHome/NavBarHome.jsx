import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import style from "./NavBarHome.module.css";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin( ScrollTrigger);

const NavBarHome = () => {

  const HomeRef = useRef(null)
  const CocinaRef = useRef(null)
  const NosotrosRef = useRef(null)

  useEffect(() => {

    gsap.killTweensOf([HomeRef.current, CocinaRef.current, NosotrosRef.current]);

    if (HomeRef.current && CocinaRef.current && NosotrosRef.current ) {
      
      gsap.to(HomeRef.current, {
      scrollTrigger: {
        trigger: HomeRef.current,
        start: "top 0%",
        end: "bottom center",
        scrub: true,
      },
      x: -1080, 
      y: -185,
      })

      gsap.to(CocinaRef.current, {
        scrollTrigger: {
          trigger: CocinaRef.current,
          start: "top 5%",
          end: "bottom center",
          scrub: true,
        },
        x: -590, 
        y: -275,
      })

      gsap.to(NosotrosRef.current, {
        scrollTrigger: {
          trigger: NosotrosRef.current,
          start: "top 5%",
          end: "bottom center",
          scrub: true,
        },
        x: -85, 
        y: -365,
      })

    }
    
    
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
          <div className={style.btn} > COCINA </div>
        </Link>

        <Link to="/" className={style.navLink} ref={NosotrosRef}>
          <div className={style.btn} > NOSOTROS </div>
        </Link>        
        
        

        
      </nav>
    );
};

export default NavBarHome;
