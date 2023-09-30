import React from 'react'
import styles from './Portfolio.module.css'
import Header from '../Header'
import Footer from '../Footer'
import Preloader from '../Preloader'

const Portfolio = ({isDesktop,setShowNavbar, isMediumScreen, isSmallScreen,showNavbar,isLoading}) => {
  return (
   <>
    <div><Preloader custom={'Portfolio'}/></div>
    <div className={styles.container}>
          <Header isDesktop={isDesktop}
              isMediumScreen={isMediumScreen}
              isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}
              setColor={'black'}
              showNavbar={showNavbar}/>
    <div className={styles.body}>
      <h1>this is Portfolio</h1>
    </div>
     <Footer/>
    </div>
    </>
  )
}

export default Portfolio