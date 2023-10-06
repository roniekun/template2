import React, { useEffect, useRef, useState } from 'react';
import styles from './Portfolio.module.css';
import Footer from '../Footer';
import PageWrapper from '../../PageWrapper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import  { ReactComponent as Next } from '../../../public/svg/next.svg';
import  { ReactComponent as Prev } from '../../../public/svg/prev.svg';
import  { ReactComponent as Close } from '../../../public/svg/close.svg';
import {AnimatePresence, motion} from 'framer-motion' 

const Portfolio = ({
  isDesktop,
  setShowNavbar,
  isMediumScreen,
  isSmallScreen,
  showNavbar,
  isLoading,
  setColor
}) => {

      useEffect(() => {
      setColor("black");
    }, [])
    
  const [activeItem, setActiveItem] = useState(0);
  const [openGallery, setOpenGallery] = useState();
  const imageArray = [];

  

  for (let id = 1; id <= 59; id++) {
    imageArray.push({
      src: `photos/${id}.jpg`,
    });
  }

  const imgRefs = imageArray.map(() => useRef(null));
  const imgContainerRefs = imageArray.map(() => useRef(null));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    imgRefs.forEach((imgRef) => {
      gsap.to(imgRef.current, {
        opacity: 1,
        duration: .5,
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 80%',
          end: 'center center',
        },
      });
    });
  }, []);

  const handleClick = (index) => {
    setActiveItem(index);
    setOpenGallery(!openGallery);
  };

  
  const handleExit = () => {
    setOpenGallery(!openGallery);
  };

  const handleNext = () => {
    setActiveItem((prev) => (prev === imageArray.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrevious = () => {
    setActiveItem((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1));
  };

  useEffect(() => {

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setActiveItem((prev) => (prev === imageArray.length - 1 ? 0 : prev + 1));
      } else if (event.key === 'ArrowLeft') {
        setActiveItem((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [])
  
  return (
    <>
       {openGallery && (
        <AnimatePresence mode='wait'>
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity:1}}
              transition={{
                duration: .3
              }}
              exit={{opacity: 0}}
              
          className={styles.carouselContainer}>
          {imageArray.map((image, index) => (
            <img
              key={index}
              className={`${styles.activeImage} ${index === activeItem ? styles.active : ''}`}
              src={image.src}
            />
          ))}
               
              <div className={styles.btnContainer}>
              <div className={styles.svgContainer}> 
              <Close onClick={handleExit} 
                className={styles.svg}/>
              </div>
              <div className={styles.svgContainer}> 
                <Prev onClick={handlePrevious}
                 className={styles.svg}/> 
               </div>

                <div className={styles.svgContainer}> 
                <Next onClick={handleNext}
                 className={styles.svg}/>              
              </div>

              </div>
            </motion.div>
            </AnimatePresence>
          )}

      <div className={styles.container}>
        <PageWrapper>
          <div className={styles.body}>
            {imageArray.map((images, index) => (
              <div
                ref={imgContainerRefs[index]}
                key={index}
                className={styles.imageContainer}
              >
                <img
                  className={styles.img}
                  onClick={() => handleClick(index)}
                  ref={imgRefs[index]}
                  src={images.src}
                  alt="Larry Chen Photos"
                />
              </div>
            ))}
          </div>
        </PageWrapper>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;