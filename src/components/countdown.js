import React, { useEffect, useState } from "react";
import styles from "../styles/Countdown.module.scss";

const Clock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const end = new Date("27 April 2023");
  let timer;
  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;

  const showRemaining = () => {
    let now = new Date();
    const distance = end - now;
    if (distance < 0) {
      clearInterval(timer);

      return;
    }

    setDays(Math.floor(distance / _day));

    setHours(Math.floor(distance / _hour));

    setMinutes(Math.floor((distance % _hour) / _minute));

    setSeconds(Math.floor((distance % _minute) / _second));
  };

  useEffect(() => {
    timer = setInterval(showRemaining, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.clockBg}>
        <div>
          <p>{hours} H</p>
        </div>
      </div>
      <div className={styles.clockBg}>
        <div>
          <p>{minutes} M</p>
        </div>
      </div>
      <div className={styles.clockBg}>
        <div>
          <p>{seconds} S</p>
        </div>
      </div>
    </div>
  );
};

export default Clock;
