import React from 'react'
import styles from './Portfolio.module.css'
import Header from '../Header'
import Footer from '../Footer'
import PageWrapper from '../../PageWrapper'

const Portfolio = ({isDesktop,setShowNavbar, isMediumScreen, isSmallScreen,showNavbar,isLoading}) => {
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
      <h1>this is Portfolio</h1>
    </div>
    </PageWrapper>
     <Footer/>
    </div>
    </>
  )
}

export default Portfolio