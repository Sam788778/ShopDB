import React, { useContext } from 'react'
import styles from './HomeSlider.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import MyContext from '../../context/MyContext'

const HomeSlider = () => {

  const { products } = useContext(MyContext)

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className={styles.slide}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HomeSlider