import React from 'react'
import styles from './Home.module.css'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import Products from '../../components/Products/Products'

const Home = () => {
  return (
    <div className={styles.home}>
      <HomeSlider />
      <Products />
    </div>
  )
}

export default Home