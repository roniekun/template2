import {useEffect, useRef} from 'react'
import styles from './Portfolio.module.css'
import Header from '../Header'
import Footer from '../Footer'
import PageWrapper from '../../PageWrapper'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Portfolio = ({isDesktop,setShowNavbar, isMediumScreen, isSmallScreen,showNavbar,isLoading}) => {
  
  const imageArray = [];

  for (let id = 1; id <= 60; id++) {
    imageArray.push({
      src: `photos/${id}.jpg`
    });
  }

    const imgRefs = imageArray.map(() => useRef(null));
    const imgContainerRefs = imageArray.map(() => useRef(null));

  useEffect(() => {
       gsap.registerPlugin(ScrollTrigger);

       imgRefs.forEach((imgRef, index) => {

        gsap.to(imgRef.current, {
          opacity: 1,
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top center",
            end: "center center",
          }
        });
      });

      }, []); // Run this effect only once
  
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
    <div  className={styles.body}>
     {imageArray.map((images, index)=>
     (<div ref={imgContainerRefs[index]} key={index} className={styles.imageContainer}>
        <img ref={imgRefs[index]} src={images.src}  alt="Larry Chen Photos" />
        </div>))}
    </div>
    </PageWrapper>
     <Footer/>
    </div>
    </>
  )
}

export default Portfolio