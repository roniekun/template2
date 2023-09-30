import {useRef, useEffect} from 'react';
import styles from './Menu.module.css';
import { gsap } from 'gsap';

const Menu = ({ showNavbar, setShowNavbar }) => {
  const containerRef = useRef(null)
  const oneRef = useRef(null)
  const twoRef = useRef(null)
  const threeRef = useRef(null)

  useEffect(() => {
    if (showNavbar) {
      gsap.to(oneRef.current, {
        width: "100%",
        xPercent: 0 // Reset to left-most position
      });
      gsap.to(twoRef.current, {
        width: "100%",
        xPercent: 0 // Reset to left-most position
      });
      gsap.to(threeRef.current, {
        width: '100%',
        xPercent: 0 // Reset to left-most position
      });
    } else {
      // Calculate the right-most position based on the container's width
      const containerWidth = containerRef.current.offsetWidth; // Assuming you have a container reference
  
      gsap.to(oneRef.current, {
        width: '100%',
        xPercent: 0 // Reset to left-most position
      });
      gsap.to(twoRef.current, {
        width: `${(70 / 100) * containerWidth}px`,
        xPercent: 0 // Move to the right-most position
      });
      gsap.to(threeRef.current, {
        width: `${(40 / 100) * containerWidth}px`,
        xPercent: 0 // Move to the right-most position
      });
    }
  }, [showNavbar]);
  
  const handleClick = () => {
  setTimeout(() => {
        setShowNavbar(!showNavbar);
  }, 300);
  };

  return (
    
        <div ref={containerRef} className={styles.container} onClick={handleClick}>
          <div ref={oneRef} className={styles.line}></div>
          <div ref={twoRef} className={styles.line}></div>
          <div ref={threeRef} className={styles.line}></div>
        </div>
  );
};

export default Menu;
