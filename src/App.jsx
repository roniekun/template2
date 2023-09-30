import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import styles from './App.module.css';
import About from './components/pages/About';
import Community from './components/pages/Community';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Menu from './assets/buttons/Menu';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import PageModal from './assets/Page-modal';
import Preloader from './components/Preloader';
import Pricing from './components/pages/Pricing';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import Lenis from '@studio-freight/lenis'
import Portfolio from './components/pages/Portfolio';

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isMediumScreen, setIsMediumScreen] = useState (window.innerWidth <= 1024 && window.innerWidth > 600)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      
  setTimeout(() => {
    setLoading (false);
  }, 3000);

  }, [])

  const lenis = new Lenis()
  //smooth scroll
  lenis.on('scroll', (e) => {
    console.log(e)
  })
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  
  const handleResize = useCallback(() => {

    const screenWidth = window.innerWidth;

    setIsDesktop(screenWidth > 1024);
    setIsSmallScreen(screenWidth <= 600);
    setIsMediumScreen(screenWidth <= 1024 && screenWidth > 600)

  }, [isDesktop, isSmallScreen, showNavbar, isMediumScreen]);

    const handleScroll = useCallback(() => {

    }, []);

  useEffect(() => {
    const handleResizeEvent = () => {
      handleResize();
    };

    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener('resize', handleResizeEvent);
    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleResize, handleScroll]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeContext.Consumer>
          {({ theme }) => {
            return (
              
              <div className={styles.appContainer} id={`component-${theme}`}>
                 { isSmallScreen &&
              <div className={styles.menuWrapper}>
              <Menu showNavbar={showNavbar} 
              setShowNavbar={setShowNavbar}
              displayIcon={true}
              MenuContainer={{}}/>
              </div>}
              { isMediumScreen &&
              <div className={styles.menuWrapper}>
              <Menu showNavbar={showNavbar} 
              setShowNavbar={setShowNavbar}
              displayIcon={true}
              MenuContainer={{}}/>
              </div>}
              {!isDesktop && <PageModal showNavbar={showNavbar}/>}
              {!isDesktop && 
                <Navbar
                  showNavbar={showNavbar}
                  isDesktop={isDesktop}
                  isMediumScreen={isMediumScreen}
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}
                  
                />}
  
                <Routes>
                  <Route path='*' 
                  element={<Notfound />} />

                  <Route path='/' 
                  element={<Home 
                  isDesktop={isDesktop}
                  isSmallScreen={isSmallScreen} 
                  isMediumScreen={isMediumScreen} 
                  showNavbar={showNavbar}
                  setShowNavbar={setShowNavbar}
                  isLoading={isLoading}
                   />}
                  />
                  
                  <Route path='/about' 
                  element={<About 
                  isSmallScreen={isSmallScreen} 
                  showNavbar={showNavbar}
                  setShowNavbar={setShowNavbar}
                  isDesktop={isDesktop}
                  isLoading={isLoading}
                  isMediumScreen={isMediumScreen} />}
                  />

                  <Route path='/community' 
                  element={<Community
                  isSmallScreen={isSmallScreen}  
                  showNavbar={showNavbar}
                  setShowNavbar={setShowNavbar}
                  isLoading={isLoading} />} 
                  />

                  {/* <Route path='/blog' element={<Blog isSmallScreen={isSmallScreen}  showNavbar={showNavbar} />} /> */}
                 
                  <Route path='/portfolio' 
                  element={<Portfolio
                  isSmallScreen={isSmallScreen}  
                  showNavbar={showNavbar}
                  setShowNavbar={setShowNavbar}
                  isDesktop={isDesktop} 
                  isMediumScreen={isMediumScreen}
                  isLoading={isLoading}/>} 
                  />

                  <Route path='/contact'
                   element={<Contact 
                   isDesktop={isDesktop}
                   
                   isMediumScreen={isMediumScreen}
                   isSmallScreen={isSmallScreen}  
                   showNavbar={showNavbar}
                   setShowNavbar={setShowNavbar} />} />

                  <Route path='/pricing' 
                  element={<Pricing 
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}  
                  isDesktop={isDesktop}
                  showNavbar={showNavbar}
                  isMediumScreen={isMediumScreen}
                  isLoading={isLoading} />} />
                </Routes>
        
              </div>
            );
          }}
        </ThemeContext.Consumer>
        </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;