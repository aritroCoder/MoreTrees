import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Profile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar/Navbar';

export default function Profile() {
  let [count, setCount] = useState(0);
  const [username, setUsername] = useState('Please Log in.');
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUsername(JSON.parse(localStorage.getItem('user')).username);
      setCount(JSON.parse(localStorage.getItem('user')).plantCount);
      setLoggedIn(true);
    }
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>MoreTrees.com</title>
        <meta name="description" content="Website to guide and encourage you to plant more trees" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>Welcome, {username}</h1>
      {loggedIn && <p>You have planted {count} trees so far
          {count === 0 && <span>. Go plant a tree! 😇 </span>}
          {count>0 && count<=5 && <span>. You can do better! 🤗 </span>}
          {count>5 && count<=10 && <span>. You are doing great! 😊 </span>}
          {count>10 && count<=20 && <span>. You are a tree lover! 😎 </span>}
          {count>20 && count<=50 && <span>. We salute your efforts! 🫡 </span>}
          {count>50 && <span>. You are a tree hero! 🥳 </span>} The trees planted are as following:
        </p>}
      {loggedIn &&
        <div>
            <div className={`${styles.plantdiv} ${styles.red}`}>
                <FontAwesomeIcon icon={faAppleWhole} className={`${styles.icon} ${styles.iconapple}`}/> Apple : {JSON.parse(localStorage.getItem('user')).details[0].count}
            </div>
            <div className={`${styles.plantdiv} ${styles.yellow}`}>
                <Image src="/banana-icon.svg" width={82} height={82} className={`${styles.icon} ${styles.iconbanana}`}/> <br></br>Banana : {JSON.parse(localStorage.getItem('user')).details[1].count}
            </div>
            <div className={`${styles.plantdiv} ${styles.green}`}>
            <Image src="/icons8-eucalyptus-64.png" width={82} height={82} className={`${styles.icon}`}/>
                <br></br>Eucalyptus : {JSON.parse(localStorage.getItem('user')).details[2].count}
            </div>
            <div className={`${styles.plantdiv} ${styles.green}`}>
                <Image src="/cactus-plant-icon.svg" width={82} height={82} className={`${styles.icon}`}/>
                <br></br>Cactus : {JSON.parse(localStorage.getItem('user')).details[3].count}
            </div>
            <div className={`${styles.plantdiv} ${styles.yellow}`}>
            <Image src="/mango-fruit-icon.svg" width={82} height={82} className={`${styles.icon}`}/>
                <br></br>Mango : {JSON.parse(localStorage.getItem('user')).details[4].count}
            </div>
            <div className={`${styles.plantdiv} ${styles.red}`}>
            <Image src="/pomegranate-fruit-icon.svg" width={82} height={82} className={`${styles.icon}`}/>
                <br></br>Pomegranate : {JSON.parse(localStorage.getItem('user')).details[5].count}
            </div>
            <div className={`${styles.plantdiv} ${styles.green}`}>
            <Image src="/pear-icon.svg" width={82} height={82} className={`${styles.icon}`}/>
                <br></br>Pear : {JSON.parse(localStorage.getItem('user')).details[6].count}
            </div>
            <div className={`${styles.plantdiv} ${styles.yellow}`}>
            <Image src="/icons8-lemon-60.png" width={82} height={82} className={`${styles.icon}`}/>
                <br></br>Lemon : {JSON.parse(localStorage.getItem('user')).details[7].count}
            </div>
        </div>
      }
    </div>
  )
}