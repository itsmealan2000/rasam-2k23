import React, { useEffect, useState, useRef } from "react";
import NavBar from "../components/navbar";
import SEO from "../components/SEO";
import styles from "../styles/About.module.scss";
import ImgCarousel from "../components/carousel";

export const getStaticProps = async () => {
  const url = process.env.CMSURL;
  const query = `*[_type == 'pages' && slug.current == 'pages']{about{ title, Content[]{children[]} ,metadata {title, desc} } }`;
  const res = await fetch(url + encodeURIComponent(query));
  const data = await res.json();

  return {
    props: { data: data.result },
  };
};

const About = ({ data }) => {
  const elemList = [];
  const pagedata = data[0].about;
  const [bodyContent, useBodyContent] = useState([]);

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

  const children = pagedata.Content[0].children;

  for (let i in children) {
    console.log(children[i]._type, children[i].text);
    if (children[i].marks[0] == "strong")
      elemList.push(<strong>{children[i].text}</strong>);
    else if (children[i]._type == "span")
      elemList.push(<span>{children[i].text}</span>);
  }

  return (
    <main className={styles.aboutMain}>
      <SEO title="About" description="This is all about the about page" />
      <NavBar />
      <div className={styles.aboutMask} id="mask">
        <div className={styles.aboutText}>
          <h1>
            ABOUT <span>RASAM</span>
          </h1>

          <p>{elemList}</p>
        </div>
        <h1 className={styles.cHeader}>GLIMPSES OF RASAM</h1>
        <div className={styles.carouselContainer}>
          <ImgCarousel />
        </div>
        <h1 className={styles.cHeader}>SPONSORS</h1>
        <div className={styles.sponsorContainer}>
          <p>Swimming your way soon!</p>
        </div>
      </div>
    </main>
  );
};

export default About;
