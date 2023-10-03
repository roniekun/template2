import styles from './styles/Navbar.module.css';
import Socials from '../assets/icons/Socials';
import { useEffect, useRef } from 'react';
import NavbarLinks from './pages/Navlinks';
import { gsap } from 'gsap';

const Navbar = ({ showNavbar,
                isSmallScreen, 
                isMediumScreen, 
                setShowNavbar,  
                isDesktop }) => {

  const navbarContainerRef = useRef(null);
  const navItemsRef = useRef(null);
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  
  useEffect(() => {
    const itemAnim = {
      x: showNavbar ? "0%" : "-160%",
      duration: .3,
    };
    const containerAnim = {
      x: showNavbar ? '0%' : '-100%',
      duration:.3,
    };
  
    gsap.to(navbarContainerRef.current, containerAnim);
    gsap.to(navItemsRef.current,itemAnim);
    gsap.to(footerRef.current, itemAnim);
    gsap.to(logoRef.current, itemAnim);
  }, [showNavbar,  isSmallScreen]);

  return (
          <nav 
          ref={navbarContainerRef}
          className={`${styles.navbarContainer}`}>
            
          <div ref={navItemsRef}
              className={styles.navbarWrapper}>
          <NavbarLinks 
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
          isSmallScreen={isSmallScreen}
          NavbarLinksContainer={{flexDirection: 'column', display: 'flex', 
          alignItems: 'center', width: '100%'}}
          NavbarLinksWrapper={{ backgroundColor: 'transparent',paddingBlock: '.5em'}}
          NavbarLinksLink={{textTransform: 'capitalize',
                            color: 'gray',
                            fontWeight: '700', 
                            fontSize: window.innerHeight > 500 ? '32px' : '24px'}}/>
        </div >
         <div ref={footerRef} 
         style={{ position: 'relative', 
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column',
                          bottom: '0',
                          paddingBlock: '5%',
                          width: '100%',
                          marginBottom: isSmallScreen ?'20%' : '0',
                           }}>
            <h3 className={styles.navFooter} style={{textTransform: 'uppercase',
                                              fontWeight: '700'}}>
                                              Socials</h3>
            <div style={{marginBlock: '10px'}}>
            <Socials
             navSocialLink={{
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '20px',
              fill: 'gray',
              margin: '7px',
              width: 'fit-content',
             }}
              displayIcons={true}
              showNavbar={showNavbar}/>
            </div>
           
            <h3 className={styles.navFooter}>www.yourcustomdomainname.com</h3>
            </div>
          </nav>
  );
};
export default Navbar;
