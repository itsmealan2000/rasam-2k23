import React from "react";
import styles from "../styles/Procup.module.scss";
import NavBar from "../components/Navbar";

const Procup = () => {
  return (
    <div className={styles.procMain}>
      <NavBar />
      <div className={styles.procMask}>
        <div className={styles.imgContainer}>
          <img src="/images/proc.png" alt="PROC LOGO" />
          <img src="/images/gmmt.png" alt="GMMT LOGO" />
        </div>
        <h1>PROCUP & GMMT</h1>

        <div className={styles.cardContainer}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>

        <h2>HISTORY</h2>
        {/* DATA HERE */}
        <div className={styles.historyContainer}>
          <p>
            CEC <span>3</span> <span>VS </span>PRC-B <span>0</span>
          </p>
        </div>

        <h2>UPCOMING</h2>
      </div>
    </div>
  );
};

export default Procup;
