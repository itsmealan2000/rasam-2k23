import { Carousel } from "react-bootstrap";
import styles from "../styles/Carousel.module.scss";

const ImgCarousel = () => {
  return (
    <Carousel className={styles.bsCarousel}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/images/carousel/1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/images/carousel/2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/images/carousel/3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/images/carousel/4.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/images/carousel/5.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/images/carousel/6.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImgCarousel;
