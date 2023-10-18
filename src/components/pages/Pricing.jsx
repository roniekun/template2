import {useEffect} from 'react'
import styles from './Pricing.module.css'
import Footer from '../Footer'

const Pricing = ({isDesktop,setShowNavbar,isMediumScreen, 
  isSmallScreen,showNavbar, setColor}) => {
    useEffect(() => {
      setColor("black");
    }, [])
    
  return (
  <>
    <div className={styles.container}>
    <div className={styles.body}>
      <h1>this is Pricing</h1>
    </div>
     <Footer/>
    </div>
    </>
  )
}

export default Pricing