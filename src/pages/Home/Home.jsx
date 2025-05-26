import React from 'react'
import styles from './Home.module.css'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import Products from '../../components/Products/Products'

const Home = ({ products, addToCart }) => {
  return (
    <div className={styles.home}>
      <HomeSlider products={products} />
      <Products products={products} addToCart={addToCart} />
    </div>
  )
}

export default Home