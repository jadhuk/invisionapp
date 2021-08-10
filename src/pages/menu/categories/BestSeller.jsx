import React, { useEffect, useState } from "react";

import CardItems from "../../../components/items/CardItems";
import styles from "./styleCat.module.css";

const BestSeller = () => {
  return (
    <div>
      <p>Best Seller</p>
      <CardItems />
    </div>
  );
};

export default BestSeller;
