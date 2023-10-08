import React, { useEffect, useRef, useState } from 'react';
import styles from './styles/Preloader.module.css';
import { gsap } from 'gsap';

const Preloader = ({custom, isLoading}) => {
  const containerRef = useRef(null);
  const coverRef = useRef(null);
  const fillerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;
    const cover = coverRef.current;
    const filler = fillerRef.current;
    document.body.style.overflow = 'hidden';

    const initialPosition = container.getBoundingClientRect();
    const tl = gsap.timeline({
     
      onComplete: () => {
        // Scroll to the top when the animation completes
        document.body.style.overflow = 'auto';
        container.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Hide the container after the animation
      // Kill the animation to prevent any lingering effects
      tl.kill();
      },
    });


    tl.fromTo(
      logo,
      { opacity: 0, },
      { opacity: 1, duration: 1 }
    );


    tl.to(container, {
      // y: -initialPosition.height*1.5,
      opacity: 0,
      delay: 1
    });
 
  }, []);

  const [progress, setProgress] = useState(0);
  useEffect(() => {
 
    if (progress < 100) {
      setTimeout(() => {
        setProgress(progress+1);
      }, 10);
  }
  }, [progress])
 

  return (
  <>
    <div ref={containerRef} 
    id='container'
    className={styles.preloaderContainer}>

      <div className={styles.logoContainer}>
      <div ref={coverRef} className={styles.cover}></div>
      <h1 className={styles.preloaderLogo} ref={logoRef}>
       Loading website <br />
       please wait... <br />{progress}%  
      </h1>
      </div>
      <div ref={fillerRef} className={styles.fill}></div>
    </div>
    
  </>
  );
};

export default Preloader;
