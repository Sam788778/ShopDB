import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div>
        <img src='https://miro.medium.com/v2/resize:fit:800/1*fTYr1YT7akBlMMHhQDT_Bg.png' alt="Logo" />
      </div>
      <div>
        <NavLink to='/' className={styles.navLink}>Home</NavLink>
        <NavLink to='/cart' className={styles.navLink}>Cart</NavLink>
      </div>
      <div>
        <button className={styles.button}>Login</button>
      </div>
    </div>
  )
}

export default Nav