import React, { useEffect, useRef, useState } from 'react';
import styles from './Portfolio.module.css';
import Footer from '../Footer';
import PageWrapper from '../../PageWrapper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {motion} from 'framer-motion' 

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
      setColor("whitesmoke");
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
  
    if (activeItem === imageArray.length - 1) {
      // If activeItem is at the last index, loop back to the first index (0).
      setActiveItem(0);
    } else {
      setActiveItem((prev) => prev + 1);
    }
    console.log(activeItem);

  };
  
  const handlePrevious = () => {
    if (activeItem === 0) {
      // If activeItem is at the first index, loop to the last index.
      setActiveItem(imageArray.length - 1);
    } else {
      setActiveItem((prev) => prev - 1);
    }
    console.log(activeItem);

  };
  

  return (
    <>
       {openGallery && (
            <div className={styles.imageCarousel}>
              <motion.img 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: .5}}
              className={styles.activeImage}src={imageArray[activeItem].src} alt="Selected Image" />
              <button className={styles.btnExit} onClick={handleExit}>X</button>
              <div className={styles.btnContainer}>
              <button className={styles.btnPrevious}  onClick={handlePrevious}>Previous</button>
              <button className={styles.btnNext}onClick={handleNext}>Next</button>
              </div>
            </div>
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
