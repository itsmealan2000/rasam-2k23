import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/navbar";
import Days from "../components/days";
import Clock from "../components/countdown";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mobileQuery.matches);

    const handleResize = () => {
      setIsMobile(mobileQuery.matches);
    };
    mobileQuery.addEventListener("change", handleResize);

    return () => {
      mobileQuery.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const source = video.querySelector("source");

      if (isMobile) {
        source.src = "/videos/mob_background.mp4";
      } else {
        source.src = "/videos/raw_background.mp4";
      }

      video.load();
    }
  }, [isMobile]);
  return (
    <>
      <main className={styles.mainContainer}>
        <NavBar />
        <div className={styles.videoContainer}>
          <video autoPlay muted loop ref={videoRef}>
            <source src="/videos/raw_background.mp4" type="video/mp4" />
          </video>
          <div className={styles.logoContainer}>
            <img src="/images/logo.png" alt="rasam logo" />
          </div>
          <div className={styles.clockContainer}>
            <Days />
            <Clock />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
