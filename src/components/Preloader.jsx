import React, { useEffect, useRef } from 'react';
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
      { opacity: 0, y:20 },
      { opacity: 1, y: 0, duration: .3 }
    );

    tl.to(cover,{y:0, delay: isLoading? 1 : .5, ease: 'linear', duration:.5});

    tl.to(container, {
      y: -initialPosition.height*1.5,

    });
    tl.to(logo, { scale: 1.1 },'-=1');
    tl.fromTo(filler, {borderBottomLeftRadius: '100%',borderBottomRightRadius: '100%'},
                {borderBottomLeftRadius: '0%',borderBottomRightRadius: '0%'} );

  }, []);

  return (
  <>
    <div ref={containerRef} className={styles.preloaderContainer}>

      <div className={styles.logoContainer}>
      <div ref={coverRef} className={styles.cover}></div>
      <h5 className={styles.preloaderLogo} ref={logoRef}>
      {isLoading ? 'Welcome!' : `${custom}`}
      </h5>
      </div>
      <div ref={fillerRef} className={styles.fill}></div>
    </div>
    
  </>
  );
};

export default Preloader;
