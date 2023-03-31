import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/navbar";
import Days from "../components/days";
import Clock from "../components/countdown";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.mainContainer}>
        <NavBar />
        <div className={styles.videoContainer}>
          <video autoPlay muted loop>
            <source src="/videos/raw_background.mp4" type="video/mp4" />
          </video>
          <div className={styles.clockContainer}>
            <Days />
            <Clock />
          </div>
        </div>
      </main>
    </>
  );
}
