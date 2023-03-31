import React, { useEffect, useState } from "react";
import styles from "../styles/Days.module.scss";

const Days = () => {
  const [days, setDays] = useState(0);

  const end = new Date("27 April 2023");
  const _day = 1000 * 60 * 60 * 24;

  const showRemaining = () => {
    let now = new Date();
    const distance = end - now;

    setDays(Math.floor(distance / _day));
  };

  useEffect(() => {
    showRemaining();
  });

  return (
    <div className={styles.daysContainer}>
      <p>{days} Days till descent ...</p>
    </div>
  );
};

export default Days;
