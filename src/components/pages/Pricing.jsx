import {useEffect} from 'react'
import styles from './Pricing.module.css'
import Header from '../Header'
import Footer from '../Footer'
import PageWrapper from '../../PageWrapper'

const Pricing = ({isDesktop,setShowNavbar,isMediumScreen, 
  isSmallScreen,showNavbar, setColor}) => {
    useEffect(() => {
      setColor("black");
    }, [])
    
  return (
  <>
    <div className={styles.container}>
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