import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/navbar";
import Days from "../components/days";
import Clock from "../components/countdown";
import SEO from "@/components/SEO";

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
      <SEO title="Home" description="RASAM season 4 is here. Yaaay!!!" />
      <main className={styles.mainContainer}>
        <NavBar />
        <div className={styles.videoContainer}>
          <video autoPlay muted loop ref={videoRef}>
            <source src="/videos/raw_background.mp4" type="video/mp4" />
          </video>
          <img src="/images/logo.png" alt="rasam logo" />
          <div className={styles.clockContainer}>
            <Days />
            <Clock />
          </div>
        </div>
      </main>
      <footer className={styles.homeFooter}>
        {/* <img src="/images/bob.png" alt="easter egg" /> */}
        <div className={styles.footerLeft}>
          <h1>Get In Touch</h1>
          <div className={styles.contact}>
            <a
              href="https://www.instagram.com/rasam.by.providence/"
              target="blank"
            >
              <i class="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/rasambyprovidence/"
              target="blank"
            >
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className={styles.footerMiddle}>
          <div className={styles.footerLogo}>
            <img src="/images/prc-logo.png" alt="LOGO" />
            {/* <p>
              &#169; Providence College of Engineering and School of Business
            </p> */}
          </div>
        </div>

        <div className={styles.footerRight}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.382652086006!2d76.61202467491256!3d9.299321490773194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622984cfaf3af%3A0xd0320f890b6fca5!2sProvidence%20College%20of%20Engineering%20%26%20School%20of%20Business%2C%20Chengannur!5e0!3m2!1sen!2sin!4v1681193448036!5m2!1sen!2sin&maptype=roadmap"
            width="500"
            height="250"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </>
  );
};

export default Home;
