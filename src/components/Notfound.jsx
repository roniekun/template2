import React from 'react'
import styles from './Notfound.module.css'
import { NavLink } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className={styles.container}>
      <h1 >Oppsss.. <br /> Page Not Found</h1>
      <h4>return to</h4> 
      <NavLink className={styles.link} to='/'><h1>Home Page</h1></NavLink>
    </div>
  )
}

export default Notfound