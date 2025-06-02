import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import React from 'react'

const Layout = ({cart, currentUser }) => {
  return (
    <div className={styles.layout}>
      <Nav cart={cart} currentUser={currentUser}/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout