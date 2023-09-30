import React from 'react';
import styles from './styles/Footer.module.css';
import Socials from '../assets/icons/Socials';

const Footer = ({ setShowNavbar, isSmallScreen }) => {
  const date = new Date();
  const currentYear = date.getFullYear(); 

  return (
    <div className={styles.container}>
      <div className={styles.body}>

        <div className={styles.socialContainer}>
          <h5>socials</h5>
          <Socials
            displayNames={ true }
            footerContainer={{ gap: '24px',justifyContent: 'flex-start'}}
            footerSocialLink={{
              fill: 'lightgray',
              fontSize: '14px',
              fontWeight: '450',
              color: 'lightgray',
            }}
          />
        </div>
        <div className={styles.textContainer}>
        <h5>version</h5>
        <p> &copy; {currentYear}, all right reserved</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
