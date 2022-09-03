import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>MoreTrees.com</title>
          <meta name="description" content="Website to guide and encourage you to plant more trees" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main className={styles.main}>
          {user.username && <h1 className={styles.title}>Welcome, {user}</h1>}
        </main>
      </div>
  )
}
