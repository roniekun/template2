import React from 'react'
import styles from './Pricing.module.css'
import Header from '../Header'
import Preloader from '../Preloader'
import Footer from '../Footer'

const Pricing = ({isDesktop,setShowNavbar,isMediumScreen, isSmallScreen,showNavbar}) => {
  return (
  <>
   <div>
   <Preloader custom={'pricing'}/>
   </div>
   
    <div className={styles.container}>
           <Header isDesktop={isDesktop}
              isMediumScreen={isMediumScreen}
              isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}
              setColor={'black'}
              showNavbar={showNavbar}/>
    <div className={styles.body}>
      <h1>this is Pricing</h1>
    </div>
     <Footer/>
    </div>
    </>
  )
}

export default Pricing