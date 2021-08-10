import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";

import Navbar from "../../components/Navbar";
import styles from "./home.module.css";
import logo from "../../assets/pict/logo_technopartner.png";
import home from "../../assets/pict/home1.png";
import menu from "../../assets/pict/menu1.png";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <Navbar />
      <div className={styles.bg}>
        <div className={styles.user__detail}>
          <div className={styles.greeting}>
            <p>Good Afternoon,</p>
          </div>
          <div className={styles.username}>
            <p>Guntur Supriadi</p>
          </div>
          <hr className={styles.line} />
          <div className={styles.saldo}>
            <p>Saldo</p>
          </div>
          <div className={styles.saldo__value}>
            <p>RP 270.000</p>
          </div>
          <div className={styles.points}>
            <p>Points </p>
          </div>
          <div></div>
          <p>2500</p>
        </div>

        {/* SLIDER */}
        <div className={styles.slider__wraper}>
          <Slider {...settings}>
            <div className={styles.slider}>
              <img src={logo} className={styles.logo__slider} />
            </div>
            <div className={styles.slider}>
              <img src={logo} className={styles.logo__slider} />
            </div>
            <div className={styles.slider}>
              <img src={logo} className={styles.logo__slider} />
            </div>
            <div className={styles.slider}>
              <img src={logo} className={styles.logo__slider} />
            </div>
          </Slider>
        </div>
        <div className={styles.footer} />
      </div>
    </>
  );
};

export default Home;
