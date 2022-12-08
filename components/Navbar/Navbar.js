import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <div className={styles.container}>
      <Link href="/" ><a className={styles.brand}>MoreTrees</a></Link>
      {loggedIn && <Link href="/profile" ><a className={styles.norm}>Profile</a></Link>}
      <Link href="/about" ><a className={styles.norm}>About Us</a></Link>
      <Link href="/login" ><a className={styles.norm}>Login</a></Link>
      <Link href="/signup" ><a className={styles.norm}>Sign Up</a></Link>
    </div>
  )
}

export default Navbar