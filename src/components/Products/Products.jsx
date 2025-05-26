import React from 'react'
import styles from './Products.module.css'
import ProductCard from '../../pages/ProductCard/ProductCard'

const Products = ({ products, addToCart }) => {
  return (
    <div className={styles.products}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  )
}

export default Products