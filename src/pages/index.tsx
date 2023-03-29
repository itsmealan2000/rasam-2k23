import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.videoContainer}>
          <video autoPlay muted loop id="myVideo">
            <source src="/videos/raw_background.mp4" type="video/mp4" />
          </video>
        </div>
      </main>
    </>
  );
}
