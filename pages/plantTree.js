import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/plantTree.module.css';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons'
const about = () => {
    const plantList = ['Apple', 'Banana', 'Cactus', 'Eucalyptus','Mango','Pomegranate','Pear','Lemon'];
    async function plantHandler(i) {
        let response = await fetch('http://localhost:3000/api/plant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: JSON.parse(localStorage.getItem('user')).username,
                plantname: plantList[i]
            })
        })
        let data = await response.json();
        if (response.status === 200) {
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(data));
            window.location.href = '/';
        }
    }
    return (
        <>
            <Navbar />
            <p>Select the tree</p>
            <button onClick={() => plantHandler(0)} className={`${styles.plantButton} ${styles.red}`}>
                       <FontAwesomeIcon icon={faAppleWhole} className={`${styles.icon} ${styles.iconapple}`}/>  Apple
            </button>
            <button onClick={() => plantHandler(1)} className={`${styles.plantButton} ${styles.yellow}`}>
            <Image src="/banana-icon.svg" width={17} height={17} className={`${styles.icon} ${styles.iconbanana}`}/>Banana
            </button>
            <button onClick={() => plantHandler(2)} className={`${styles.plantButton} ${styles.green}`}>
            <Image src="/cactus-plant-icon.svg" width={17} height={17} className={`${styles.icon}`}/>
                Cactus
                </button>
            <button onClick={() => plantHandler(3)} className={`${styles.plantButton} ${styles.green}`}>
            <Image src="/icons8-eucalyptus-64.png" width={17} height={17} className={`${styles.icon}`}/>
                Eucalyptus</button>
            <button onClick={() => plantHandler(4)} className={`${styles.plantButton} ${styles.yellow}`}>
            <Image src="/mango-fruit-icon.svg" width={17} height={17} className={`${styles.icon}`}/>Mango</button>
            <button onClick={() => plantHandler(5)} className={`${styles.plantButton} ${styles.red}`}>
            <Image src="/pomegranate-fruit-icon.svg" width={17} height={17} className={`${styles.icon}`}/>Pomegranate
            </button>
            <button onClick={() => plantHandler(6)} className={`${styles.plantButton} ${styles.green}`}>
            <Image src="/pear-icon.svg" width={17} height={17} className={`${styles.icon}`}/>Pear</button>
            <button onClick={() => plantHandler(7)} className={`${styles.plantButton} ${styles.yellow}`}>
            <Image src="/icons8-lemon-60.png" width={17} height={17} className={`${styles.icon}`}/>
            Lemon</button>
        </>
    )
}


export default about;