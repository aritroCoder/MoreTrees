import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  let [count, setCount] = useState(0);
  const [username, setUsername] = useState('Please Log in.');
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      console.log(JSON.parse(localStorage.getItem('user')));
      setUsername(JSON.parse(localStorage.getItem('user')).username);
      setCount(JSON.parse(localStorage.getItem('user')).plantCount);
      setLoggedIn(true);
    }
  }, []);
  const profileHandler = (event) =>{
    event.preventDefault();
    if(loggedIn) window.location.href = '/profile';
    else window.location.href = '/login';
  }
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
        <h1>Welcome, {username}</h1>
        {loggedIn && <p>You have planted {count} trees so far
          {count === 0 && <span>. Go plant a tree! 😇 </span>}
          {count>0 && count<=5 && <span>. You can do better! 🤗 </span>}
          {count>5 && count<=10 && <span>. You are doing great! 😊 </span>}
          {count>10 && count<=20 && <span>. You are a tree lover! 😎 </span>}
          {count>20 && count<=50 && <span>. We salute your efforts! 🫡 </span>}
          {count>50 && <span>. You are a tree hero! 🥳 </span>}
        </p>}
        {loggedIn && <div className={styles.centered}><button className={styles.plantNow} onClick={plantNowHandler}>Plant a tree!</button></div>}
        {loggedIn && <div className={styles.logout}><button className={styles.logout} onClick={logOutHandler}>Log Out</button></div>}
      </div>
    </div>
  )
}
