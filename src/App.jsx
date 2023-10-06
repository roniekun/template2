import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import styles from './App.module.css';
import About from './components/pages/About';
import Community from './components/pages/Community';
import Contact from './components/pages/Contact';
import { AnimatePresence } from 'framer-motion';
import Home from './components/pages/Home';
import Header from './components/Header';
import Menu from './assets/buttons/Menu';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import PageModal from './assets/Page-modal';
import Preloader from './components/Preloader';
import Pricing from './components/pages/Pricing';
import { DataProvider, DataContext } from './context/DataContext';
import Lenis from '@studio-freight/lenis'
import Portfolio from './components/pages/Portfolio';

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isMediumScreen, setIsMediumScreen] = useState (window.innerWidth <= 1024 && window.innerWidth > 600)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const lenis = new Lenis()
  lenis.on('scroll', () => {
    console.log('ls')
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

  }, [isDesktop, isSmallScreen, isMediumScreen]);

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
      <DataProvider>
      <BrowserRouter>
      <DataContext.Consumer>
        {({showNavbar,setShowNavbar,setLoading,isLoading, color, setColor}) => (
              <div className={styles.appContainer}>
                 { isSmallScreen &&
              <div className={styles.menuWrapper}>
              <Menu showNavbar={showNavbar} 
              setShowNavbar={setShowNavbar}
              color={color}
              />
              </div>}
              { isMediumScreen &&
              <div className={styles.menuWrapper}>
              <Menu showNavbar={showNavbar} 
              setShowNavbar={setShowNavbar}
              color={color}
              />

              </div>}
              <Preloader/>
              <Header showNavbar={showNavbar} setShowNavbar={setShowNavbar}
              isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen} isDesktop={isDesktop}
              color={color} setColor={setColor}/>

              {!isDesktop && <PageModal showNavbar={showNavbar}/>}
              {!isDesktop && 
                <Navbar
                  showNavbar={showNavbar}
                  isDesktop={isDesktop}
                  isMediumScreen={isMediumScreen}
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}
                  
                />}
            <AnimatePresence >
                <Routes>
                  {/* <Route render={()=> (            
                    <> */}
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
                  setColor={setColor}
                  color={color}
                   />}
                  />
                  
                  <Route path='/about' 
                  element={<About 
                  isSmallScreen={isSmallScreen} 
                  showNavbar={showNavbar}
                  setShowNavbar={setShowNavbar}
                  isDesktop={isDesktop}
                  isLoading={isLoading}
                  isMediumScreen={isMediumScreen}
                  setColor={setColor}
                  color={color} />}
                  />

                  <Route path='/community' 
                  element={<Community
                  isSmallScreen={isSmallScreen}  
                  showNavbar={showNavbar}
                  setShowNavbar={setShowNavbar}
                  isLoading={isLoading} />} 
                  />

                 
                  <Route path='/portfolio' 
                  element={<Portfolio
                  isSmallScreen={isSmallScreen}  
                  showNavbar={showNavbar}
                  setShowNavbar={setShowNavbar}
                  isDesktop={isDesktop} 
                  isMediumScreen={isMediumScreen}
                  isLoading={isLoading}
                  setColor={setColor}
                  color={color}/>} 
                  />

                  <Route path='/contact'
                   element={<Contact 
                   isDesktop={isDesktop}
                   
                   isMediumScreen={isMediumScreen}
                   isSmallScreen={isSmallScreen}  
                   showNavbar={showNavbar}
                   setShowNavbar={setShowNavbar}
                   setColor={setColor}
                   color={color} />} />

                  <Route path='/pricing' 
                  element={<Pricing 
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}  
                  isDesktop={isDesktop}
                  showNavbar={showNavbar}
                  isMediumScreen={isMediumScreen}
                  isLoading={isLoading} 
                  setColor={setColor}
                  color={color}/>} />
                  {/* </>
                  )}/> */}
                </Routes>
         </AnimatePresence>
              </div>
                )}
                </DataContext.Consumer>
        </BrowserRouter>
        </DataProvider>
  );
};

export default App;