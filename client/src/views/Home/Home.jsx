import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.mainContainer}>
      <div className={style.design}>
        <div className={style.presentacion}>
          <h1>ChiniBakery.</h1>
          <h2>[baked goods & cookies]</h2>
        </div> 
      </div>
      
    </div>
  );
}

export default Home;