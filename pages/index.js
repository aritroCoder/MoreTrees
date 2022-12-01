import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  const [username, setUsername] = useState('Please Log in.');
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUsername(JSON.parse(localStorage.getItem('user')).username);
      setLoggedIn(true);
    }
  }, []);
  const plantNowHandler = (event) =>{
    event.preventDefault();
    if(loggedIn) window.location.href = '/plantTree';
    else window.location.href = '/login';
  }
  const logOutHandler = (event) =>{
    event.preventDefault();
    localStorage.removeItem('user');
    window.location.reload();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>MoreTrees.com</title>
        <meta name="description" content="Website to guide and encourage you to plant more trees" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.hero}>
        <Image src='/forestBg.jpg' layout="fill"
          objectFit="fill"
          objectPosition="center" />
      </div>
      <span className={styles.herotext}>Plant more trees.</span>
      <div className={styles.main}>
        <h1 className={styles.welcomeH1}>Welcome, {username}</h1>
        {loggedIn && <p className={styles.displayCount}>You have planted {JSON.parse(localStorage.getItem('user')).plantCount} trees so far{JSON.parse(localStorage.getItem('user')).plantCount>1?' 🥳':', plant some more!'}</p>}
        {loggedIn && <div className={styles.centered}><button className={styles.plantNow} onClick={plantNowHandler}>Plant a tree!</button></div>}
        {loggedIn && <div className={styles.logout}><button className={styles.logout} onClick={logOutHandler}>Log Out</button></div>}
      </div>
    </div>
  )
}
