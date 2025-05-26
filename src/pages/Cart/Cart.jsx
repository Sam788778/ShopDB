import React from 'react'
import styles from './Cart.module.css'

const Cart = ({ cart }) => {
  return (
    <div className={styles.cart}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart