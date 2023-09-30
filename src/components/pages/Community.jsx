import React from 'react'
import Footer from '../Footer'
import styles from './Community.module.css'

const Community = ({isSmallScreen, setShowNavbar}) => {
  return (
    <div className={styles.container}>
    <div className={styles.body}>
      <h1 className={styles.title}>
        Blank Page
      </h1>
    </div>
    <Footer isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}/>
    </div>
  )
}

export default Community