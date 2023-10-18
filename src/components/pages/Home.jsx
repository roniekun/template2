import {useEffect, useRef, useState, useLayoutEffect} from 'react'
import Card from '../../assets/card-slider/Card'
import Footer from '../Footer'
import styles from './Home.module.css'
import FAQ from '../../assets/frequently-asked-questions/FAQ'
import Cta from '../../assets/call-to-actions/Cta'
import { NavLink} from 'react-router-dom'
import { AnimatePresence, motion, useScroll} from "framer-motion"
import  { ReactComponent as ScrollDown } from '../../../public/svg/arrowdown.svg'
import  { ReactComponent as SeePortfolio } from '../../../public/svg/arrowinsert.svg'
// import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Home = ({isDesktop,setShowNavbar,isMediumScreen, isSmallScreen, 
              setColor, showNavbar, isLoading,color}) => {

              const heroImg = useRef(null);
              const title = useRef(null);

                useLayoutEffect( () => {
                  gsap.registerPlugin(ScrollTrigger);
          
                  const timeline = gsap.timeline({
                      scrollTrigger: {
                          trigger: document.documentElement,
                          scrub: true,
                          start: "top",
                          end: "+=500px",
                      },
                  })
          
                  timeline
                      .to(heroImg.current, {scale: 1 })
                      // .to(heroImg.current, {clipPath: isDesktop ? `inset(5%)` : ''}, "-=.3")
              }, [ ])

  // const [s6, inView] = useInView({
  //   threshold: 0.5,
  //   triggerOnce: true,
  // });

  useEffect(() => {
    setColor("white");
  }, [])

  const toCta = useRef(null);
  const scrollToCta = () => {
    toCta.current.scrollIntoView({ behavior: 'smooth' });
  };

   const toScroll= useRef(null);
  const scroll = () => {
    toScroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <motion.div 
     initial={{opacity: 0}}
     animate={{opacity: 1}}
     transition={{
       duration: .3,
     }}
     exit={{opacity: 0}}
    className={styles.container}>

     <div className={styles.imgContainer}>
        <img ref={heroImg} 
        className={styles.heroImg} 
        src="images/hero.jpg"  />
        </div>
      <div className={styles.body}>

        <div className={styles.sect1}>
         
          <div ref={title} className={styles.title}>
          <h1>
            Your Name </h1>
          <h1 >Photographer & Filmmaker</h1>

          <button onClick={scrollToCta}
                 className={styles.btn}>
            Start an appointment</button>
          </div>

        <div className={styles.arrowdownContainer}>
           <h5>Scroll</h5>
            <div onClick={scroll} className={styles.arrowdown}>
            <ScrollDown/>
            </div>
        </div>
        </div>

        <div ref={toScroll} 
             className={styles.filler}>
        <div className={styles.fillerContent}>
        <h2 className={styles.fillerTitle}>Timeless</h2>
        <h1 >Transforming your special moments <br /> into timeless memories.</h1>
        <p>We craft unique and memorable experience through <br /> capturing raw 
          emotions that brings picturisque storytelling.</p>
        </div>
      
        <div  className={styles.imgContainerF}>
        <motion.img
          transition={{ duration: 0.3 }}
          className={styles.heroImgF}
          src="images/hero2.jpg"
        />
        </div>
        
        <div className={styles.linkContainer}>
        <NavLink 
        className={styles.link} 
        onClick={()=> window.scrollTo({top:0})} to='/portfolio'>See Portfolio
        </NavLink> 
        <SeePortfolio className={styles.linkIcon}/>
        </div>
        </div>
   

        <div className={styles.sect2}>

        <div className={styles.card1}>
        <p>We cover all types of events and different sizes</p>
        </div>
        <div className={styles.card2}>
        <p>Our team consist of dedicated members</p>
        <p> Your expert event photographer, dedicated to preserving your precious moments.</p>
        </div>
        </div>

        <div className={styles.sect3}>

        <div className={styles.circle} id={styles.circle1}>
          <h2> 10 years of experience</h2>
        </div>

        <div 
        className={styles.circle} id={styles.circle3}>
        <h2> <span>100+</span> <br />
         Satisfied clients</h2>
        </div>
        </div>

        <div className={styles.sect4}>
          <h1 className={styles.s4title}>
            Featured Events
          </h1>
          <div className={styles.cardSlider}>
          <Card/>
          </div>
        </div>

        <div className={styles.sect5}>
        <h1>Reviews</h1>
        </div>
  
        <motion.div 
        className={styles.sect6}>
          <h1>Frequently Asked Questions: </h1> 
          <p>(This is for Demo purpose only)</p>
          <FAQ />
        </motion.div>

        <div className={styles.sect7}>
         <h1>Thank you for your support :)</h1>
        </div>
      </div>
      <div className={styles.ctaContainer} ref={toCta} >
      <Cta isSmallScreen={isSmallScreen}/>
      </div>
      <Footer/>
    </motion.div>
   
    </>
  )
}

export default Home