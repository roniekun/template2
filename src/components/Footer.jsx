import React from 'react';
import styles from './styles/Footer.module.css';
import Socials from '../assets/icons/Socials';

const Footer = ({ setShowNavbar, isSmallScreen }) => {
  const date = new Date();

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.btnContainer}>
          <button className={styles.btn} 
          onClick={()=> window.scrollTo({top:0, behavior: 'smooth'})}>
             back to top &uarr;</button>
          </div>
        <div className={styles.socialContainer}>
          <h5>socials</h5>
          <Socials
            displayNames={ true }
            containerProps={{ gap: '24px',justifyContent: 'flex-start'}}
           linkProps={{
              fill: 'lightgray',
              fontSize: '14px',
              fontWeight: '450',
              color: 'lightgray',
            }}/>
            
        </div>
        <div className={styles.textContainer}>
        <h5>version</h5>
        <p> &copy; {date.getFullYear()}, all rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
