import React, { useContext } from 'react'
import styles from './Cart.module.css'
import MyContext from '../../context/MyContext'

const Cart = () => {
  const { cart, add, remove } = useContext(MyContext)

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={styles.cart}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.info}>
                <h3>{item.title}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div className={styles.controls}>
                  <button onClick={() => remove(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => add(item)}>+</button>
                </div>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className={styles.total}>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart