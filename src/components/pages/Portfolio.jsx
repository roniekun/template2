import React, { useEffect, useRef, useState } from 'react';
import styles from './Portfolio.module.css';
import Footer from '../Footer';
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
  const loaders = imageArray.map(() => useRef(null));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // loaders.forEach((loader, index) => {
    //   gsap.to(loader.current, {
    //     y: '-100%',
    //     delay: index * .1,
    //     duration: .8,
    //     scrollTrigger: {
    //       trigger: loader.current,
    //       start: 'top center',
    //       markers: true,
    //     },
    //   });
    // });

    imgRefs.forEach((imgRef,index) => {
      gsap.to(imgRef.current, {
        opacity: 1, duration: .3, scale: 1,
        delay: index * .1,
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 80%',
          end: 'center center',
        },
      }, '-=1'
      );
    });  


  },[] );



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
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity:1}}
              transition={{
                duration: .3
              }}
              exit={{opacity: 0}}
              
          className={styles.carouselContainer}>
          <h5 className={styles.index}>
          {activeItem+1}/{imageArray.length}
          </h5>
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
          )}

      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        duration: .3,
      }}
      exit={{opacity: 0}}

      className={styles.container}>
          <div className={styles.body}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Portfolio</h1>
            </div>
          <div className={styles.sectionOne}>
  
            {imageArray.map((images, index) => (
              <div
                ref={imgContainerRefs[index]}
                key={index}
                className={styles.imageContainer}
              >
              {/* <div 
              ref={loaders[index]}
              className={styles.loader}>
              </div> */}

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
          </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default Portfolio;