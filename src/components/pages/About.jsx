import {useEffect} from 'react'
import styles from './About.module.css'
import Footer from '../Footer'
import { motion } from 'framer-motion'
import Cta from '../../assets/call-to-actions/Cta'

const About = ({isDesktop, setShowNavbar, isMediumScreen, 
  isSmallScreen,showNavbar, isLoading, setColor,color}) => {
  
    useEffect(() => {
      setColor("black");
    }, [])
    
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
      <div className={styles.body}>
        <div className={styles.sect1}>

           <h4> Bringing your events to life through the art of storytelling.</h4>
           <div className={styles.about}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illo fugiat perspiciatis magni nulla, numquam enim velit cumque aliquam maiores vero excepturi, 
             delectus obcaecati ducimus magnam pariatur, modi non quas ea. Lorem ipsum dolor sit amet consectetur 
             adipisicing elit. Aperiam maxime quisquam natus. Quos iure distinctio veniam, 
             excepturi placeat natus deleniti quas a ratione enim, sunt aspernatur dicta quam praesentium tempore?
             Illo fugiat perspiciatis magni nulla, numquam enim velit cumque aliquam maiores vero excepturi, 
             delectus obcaecati ducimus magnam pariatur, modi non quas ea. Lorem ipsum dolor sit amet consectetur 
             adipisicing elit.
             </p>
             <h1>I&apos;m more than a photographer;<br /> I'm a visual storyteller. 
              </h1>
             </div>
         
           <div className={styles.imageContainer}>
           
            <img className={styles.image}src="images/headshot.jpg" 
                        title="Image from Andrew Wise from Unsplash" 
                        alt="andrew-wise-uQ83_5lc1eQ-unsplash.jpg" />
           </div>
        </div>

        <div className={styles.sect2}>
          <h1>Skills</h1>
        </div >
        <div className={styles.sect3}
        ><h1>Awards</h1></div>
      </div>
        <Cta/>
      <Footer/>
    </motion.div>
    </>
  )
}

export default About