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
  const profileHandler = (event) => {
    event.preventDefault();
    if (loggedIn) window.location.href = '/profile';
    else window.location.href = '/login';
  }
  const plantNowHandler = (event) => {
    event.preventDefault();
    if (loggedIn) window.location.href = '/plantTree';
    else window.location.href = '/login';
  }
  const logOutHandler = (event) => {
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

        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />

        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" /> */}


      </Head>
      <Navbar />
      <div className={styles.hero}>
        <Image src='/forestBg.jpg' layout="fill"
          objectFit="fill"
          objectPosition="center" />
      </div>
      <span className={styles.herotext}>Plant more trees.</span>
      <div className={styles.main}>
        <div className={styles.card}>
          <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className={styles.image} />
          <h1 className={styles.heading}>Welcome, {username}</h1>
           <h2 className={styles.heading_2}>Tress Planted</h2>
           <h2 className={styles.heading_3}>Remarks</h2>

          {loggedIn && <p className={styles.plant}> {count}
            {count === 0 && <span className={Go}>. Go plant a tree! 😇 </span>}
            {count > 0 && count <= 5 && <span className={styles.you} > You can do better!🤗 </span>}
            {count > 5 && count <= 10 && <span className={styles.grt}>You are doing great! 😊 </span>}
            {count > 10 && count <= 20 && <span className={styles.lover}>You are a tree lover! 😎 </span>}
            {count > 20 && count <= 50 && <span className={styles.effort}>We salute your efforts! 🫡 </span>}
            {count > 50 && <span className={styles.last}>You are a tree hero! 🥳 </span>}
          </p>}
          {loggedIn && <div className={styles.centered}><button className={styles.plantNow} onClick={plantNowHandler}> <span className={styles.last_1}>Plant a tree!</span> </button></div>}
          {loggedIn && <div className={styles.out}><button className={styles.logout} onClick={logOutHandler}> <span className={styles.last_2}>Log Out</span> </button></div>}
        </div>

      </div>


    </div>
  )

}


