import {useEffect, useRef} from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './Home.module.css'
import Faq from '../../assets/faq/Faq'
import Cta from '../../assets/call-to-actions/Cta'
import { NavLink } from 'react-router-dom'
import PageWrapper from '../../PageWrapper'
import { AnimatePresence, motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Home = ({isDesktop,setShowNavbar,isMediumScreen, isSmallScreen, 
              setColor, showNavbar, isLoading,color}) => {

// animation

const heroImgRef = useRef(null);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  const animation = gsap.to(heroImgRef.current, {
    y: 100,
    scrollTrigger: {
      trigger:heroImgRef.current,
      start: 'center center',
      end: 'bottom center', 
      scrub: true, 
    },
  });

  return () => {
    animation.kill();
  };
}, []);











  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    setColor("white");
  }, [])
  
  return (
    <>
    <div 
    className={styles.container}>
             <div className={styles.imgContainer}>
        <img ref={heroImgRef} className={styles.heroImg} src="images/hero.jpg"  />
        </div>
      <PageWrapper>
      <div className={styles.body}>

        <div className={styles.sectionOne}>
          <div className={styles.title}>
          <h1 >Your Name </h1>
          <h1 >Photographer & Filmmaker</h1>
          </div>
 
    
        </div>

        <div  className={styles.filler}>
        <div>
        <h1 >Transforming your special moments into timeless memories.</h1>
        <p>we craft unique and memorable experience through capturing raw 
          emotions that brings picturisque storytelling.</p>
        </div>
        <NavLink className={styles.portfolioLink} 
        onClick={()=> window.scrollTo({top:0})} to='/portfolio'>See Portfolio</NavLink>
        </div>

        <div className={styles.sectionTwo}>

        <div className={styles.card1}>
        <p>We cover all types of events and different sizes</p>
        </div>
        <div className={styles.card2}>
        <p>Our team consist of dedicated members</p>
        <p> Your expert event photographer, dedicated to preserving your precious moments.</p>
        </div>
        </div>

        <div className={styles.sectionThree}>

        <div className={styles.circle} id={styles.circle1}>
          <h2> 10 years of experience</h2>
        </div>

        <div className={styles.circle} id={styles.circle3}>
        <h2> More than 100+ satisfied clients</h2>
        </div>
        </div>

        <div className={styles.sectionFour}>
          <h1>Featured Events</h1>
        </div>

        <div className={styles.sectionFive}>
        </div>
  
        <motion.div 
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.3 }}
        exit={{y: -20}}
        className={styles.sectionSix}>
          <h1>Frequently Asked Questions: </h1> <p>(This is for Demo purpose only)</p>
          <br />
          <Faq />
        </motion.div>

        <div className={styles.sectionSeven}>
         <h1>Thank you for your support :)</h1>
        </div>
      </div>
      <Cta isSmallScreen={isSmallScreen}/>
      </PageWrapper>
      <Footer/>
    </div>
   
    </>
  )
}

export default Home