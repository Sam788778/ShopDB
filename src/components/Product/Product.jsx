import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Product.module.css'
import MyContext from '../../context/MyContext'

const Product = () => {

  const { products, addToCart } = useContext(MyContext)

  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) return <div>Product not found</div>

  return (
    <div className={styles.product}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>${product.price}</p>
      <button onClick={() => addToCart(product)} className={styles.button}>
        Add to Cart
      </button>
    </div>
  )
}

export default Product