import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  const [username, setUsername] = useState('Please Log in.');
  useEffect(() => {
    if (localStorage.getItem('user')) setUsername(JSON.parse(localStorage.getItem('user')).username);
  }, [])

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
      </div>
    </div>
  )
}
