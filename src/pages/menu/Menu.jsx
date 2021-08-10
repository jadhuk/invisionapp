import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import SeasonalProduct from "./categories/SeasonalProduct";
import BestSeller from "./categories/BestSeller";
import Coffee from "./categories/Coffee";

import Navbar from "../../components/Navbar";
import styles from "./menu.module.css";

const Menu = () => {
  const [active, setActive] = useState({
    seasonalProduct: true,
    bestSeller: false,
    coffee: false,
  });

  const handleSeasonalProduct = () => {
    setActive({ seasonalProduct: true, bestSeller: false, coffee: false });
  };

  const handleBestSeller = () => {
    setActive({ bestSeller: false, bestSeller: true, coffee: false });
  };

  const handleCoffee = () => {
    setActive({ coffee: false, bestSeller: false, coffee: true });
  };

  const showSeasonalProduct = active.seasonalProduct ? (
    <SeasonalProduct />
  ) : null;
  const showBestSeller = active.bestSeller ? <BestSeller /> : null;
  const showCoffee = active.coffee ? <Coffee /> : null;

  return (
    <>
      <Navbar />
      <div className={styles.cat__nav}>
        <ul className={styles.nav__ul}>
          <li className={styles.nav__li}>
            <a
              className={`msg-${active.seasonalProduct ? "active" : null}`}
              onClick={handleSeasonalProduct}
            >
              Seasonal Product
            </a>
          </li>
          <li className={styles.nav__li}>
            <a
              className={`msg-${active.bestSeller ? "active" : null}`}
              onClick={handleBestSeller}
            >
              Best Seller
            </a>
          </li>
          <li className={styles.nav__li}>
            <a
              className={`msg-${active.coffee ? "active" : null}`}
              onClick={handleCoffee}
            >
              Coffee
            </a>
          </li>
        </ul>
      </div>
      <div>
        {showSeasonalProduct}
        {showBestSeller}
        {showCoffee}
      </div>
    </>
  );
};

export default Menu;
