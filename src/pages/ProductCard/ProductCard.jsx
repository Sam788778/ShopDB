import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={styles.card}>
      <NavLink to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <h2 className={styles.title}>{product.title}</h2>
      </NavLink>
      <p className={styles.price}>${product.price}</p>
      <button onClick={() => addToCart(product)} className={styles.button}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard