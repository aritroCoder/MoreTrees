import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { faL } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [show, setshow] = useState(false)

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      </Head>

      <div className={styles.container}>
        <Link href="/" ><a className={styles.brand}>MoreTrees</a></Link>
        {loggedIn && <Link href="/profile" ><a className={styles.norm}>Profile</a></Link>}
        <Link href="/about" ><a className={styles.norm}>About Us</a></Link>
        <Link href="/login" ><a className={styles.norm}>Login</a></Link>
        <Link href="/signup" ><a className={styles.norm}>Sign Up</a></Link>


        <div >
          <a class={styles.icon} onClick={()=>{
            setshow(!show)
          }}>
            <i class="fa fa-bars menu"></i>
          </a>
        </div>

      </div>
      <div class={styles.topnav}>
      {show && 
        <><a href="/signup" class={styles.active}>Signup</a><div id="myLinks">
            <a href="/login">Login</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
          </div></>
        }



      </div>

    </>
  )
}

export default Navbar