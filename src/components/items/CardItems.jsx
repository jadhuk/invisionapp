import React, { useEffect, useState } from "react";

import styles from "./cardItem.module.css";

const CardItems = () => {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__category}>
        <div className={styles.card}>
          <img />
          <h2 className={styles.title__card}>TITLE</h2>
          <div className={styles.desc__card}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={styles.price}>
            <p>PRICE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
