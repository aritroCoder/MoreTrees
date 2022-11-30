import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/plantTree.module.css';
const about = () => {
    const plantList = ['Apple', 'Banana', 'Cactus', 'Eucalyptus'];
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
            <button onClick={() => plantHandler(0)} className={styles.plantButton}>Apple</button>
            <button onClick={() => plantHandler(1)} className={styles.plantButton}>Banana</button>
            <button onClick={() => plantHandler(2)} className={styles.plantButton}>Cactus</button>
            <button onClick={() => plantHandler(3)} className={styles.plantButton}>Eucalyptus</button>
        </>
    )
}


export default about;