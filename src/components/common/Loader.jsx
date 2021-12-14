import React from "react";
import preloader from "../../assets/images/DoubleRing.svg";
import style from "./Loader.module.css"

export const Loader = () => {
  return (
      <div className={style.loader}>
        <img src={preloader}/>
      </div>
  )
};