import React from 'react';
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/Signup.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Head from 'next/head';
const signup = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            username: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8, 'Must be 8 characters or more').required('Required'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
        }),
        onSubmit: async (values) => {
            let body = {
                username: values.username,
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword
            }
            let response = await fetch('http://localhost:3000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            let data = await response.json()
            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(data.user));
                alert("Signup Successful");
                window.location.href = '/';
            } else {
                alert(data.error);
            }
        }
    });
    return (
        <>
           <Head>
           <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.5"/>
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>

          </Head>

            <Navbar />
            <div className={styles.holder}>
                <form className={styles.inpForm} onSubmit={formik.handleSubmit}>

                        <input className={styles.username} type="text" name="username" placeholder="Username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                        {formik.touched.username && formik.errors.username ? <p className={styles.error1}>{formik.errors.username}</p> : null}
                    

                 
                        <input className={styles.email} type="text" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                        {formik.touched.email && formik.errors.email ? <p className={styles.error2}>{formik.errors.email}</p> : null}
                    

                    
                        <input className={styles.field} type="password" name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                        {formik.touched.password && formik.errors.password ? <p className={styles.error3}>{formik.errors.password}</p> : null}
                    

            
                        <input className={styles.field_last} type="password" name="confirmPassword" placeholder="Confirm Password" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p className={styles.error4}>{formik.errors.confirmPassword}</p> : null}
                    
                    <button className={styles.btn} type="submit"> <span className={styles.submit}>Submit</span> </button>
                </form>

            </div>
            <div style={{position:"relative"}}>
            <img src="https://us.123rf.com/450wm/sarayutsy/sarayutsy1810/sarayutsy181000043/sarayutsy181000043.jpg?ver=6" alt="" className={styles.img}/>

            </div>


        </>
    )
}

export default signup