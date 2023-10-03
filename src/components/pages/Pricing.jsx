import React from 'react'
import styles from './Pricing.module.css'
import Header from '../Header'
import Footer from '../Footer'
import PageWrapper from '../../PageWrapper'

const Pricing = ({isDesktop,setShowNavbar,isMediumScreen, isSmallScreen,showNavbar}) => {
  return (
  <>
    <div className={styles.container}>
           <Header isDesktop={isDesktop}
              isMediumScreen={isMediumScreen}
              isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}
              setColor={'black'}
              showNavbar={showNavbar}/>
    <PageWrapper>
    <div className={styles.body}>
      <h1>this is Pricing</h1>
    </div>
    </PageWrapper>
     <Footer/>
    </div>
    </>
  )
}

export default Pricing