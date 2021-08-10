import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./navbar.module.css";
import logo from "../assets/pict/logo_technopartner.png";
import home from "../assets/pict/home1.png";
import menu from "../assets/pict/menu1.png";

const Navbar = () => {
  const history = useHistory();

  const homeClick = () => {
    history.push("/home");
  };

  const menuClick = () => {
    history.push("/menu");
  };

  return (
    <div className={styles.navbar}>
      <img src={logo} className={styles.logo} />
      <button className={styles.home__btn} onClick={homeClick}>
        <img src={home} className={styles.imgH__btn} />
        HOME
      </button>
      <button className={styles.menu__btn} onClick={menuClick}>
        <img src={menu} className={styles.imgM__btn} />
        MENU
      </button>
    </div>
  );
};

export default Navbar;
