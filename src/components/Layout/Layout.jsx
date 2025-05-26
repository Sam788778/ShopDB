import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import React from 'react'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout