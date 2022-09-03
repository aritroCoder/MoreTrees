import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" ><a className={styles.brand}>MoreTrees</a></Link>
      <Link href="/about" ><a className={styles.norm}>About Us</a></Link>
      <Link href="/login" ><a className={styles.norm}>Login</a></Link>
      <Link href="/signup" ><a className={styles.norm}>Sign Up</a></Link>
    </div>
  )
}

export default Navbar