import { Carousel } from 'react-bootstrap'
import styles from '../styles/Carousel.module.scss'

const ImgCarousel = ({ cardata }) => {
  let itemList = []

  for (let i in cardata) {
    itemList.push(
      <Carousel.Item interval={1000} key={i}>
        <img className='d-block w-100' src={cardata[i].asset.url} alt='slide' />
      </Carousel.Item>
    )
  }

  return <Carousel className={styles.bsCarousel}>{itemList}</Carousel>
}

export default ImgCarousel
