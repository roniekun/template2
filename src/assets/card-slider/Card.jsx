import React from 'react'
import styles from './Card.module.css'

const Card = () => {
  return (
    <div className={styles.slider}>
            <div  
            className={styles.slides}>
                <img src=""/>
                <h5>Title</h5>
                <p>Description</p>
            </div>
            <div className={styles.slides}>
                <img src=""/>
                <h5>Title</h5>
                <p>Description</p>
            </div>
            <div className={styles.slides}>
                <img src=""/>
                <h5>Title</h5>
                <p>Description</p>
            </div>
            
    </div>
  )
}

export default Card