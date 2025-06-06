import React, { useContext } from 'react'
import styles from './Products.module.css'
import ProductCard from '../../pages/ProductCard/ProductCard'
import MyContext from '../../context/MyContext'

const Products = () => {

  const { products, addToCart } = useContext(MyContext)

  return (
    <div className={styles.products}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  )
}

export default Products