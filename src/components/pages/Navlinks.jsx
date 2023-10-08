import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navlinks.module.css';

const NavbarLinks = ({
  linkProps,
  wrapperProps,
  showNavbar,
  setShowNavbar,
  footerContainer,
  footerNavbarLink,
  footerNavbarWrapper,
  ContactNavbarLinks,
  NavbarLinksContainer,
  NavbarLinksWrapper,
  NavbarLinksLink,
  }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { to: '/', text: 'home ' },
    { to: '/about', text: 'about  ' },
    { to: '/portfolio', text: 'portfolio  ' },
    { to: '/contact', text: 'contact  ' },
    
  ];
  const containerRef = useRef(null);
  const navbarlinkRefs = links.map(() => useRef(null));

  useEffect(() => {
    if (showNavbar) {
      navbarlinkRefs.forEach((navbarlinkRef, index) => {
        gsap.fromTo(
          navbarlinkRef.current, 
          { 
            opacity: 1
          },
          {
            opacity: 1,
            duration: .5,
            delay: index * .1,
          }
          );
      });
    }
  }, [showNavbar]);

  const handleLinkClick = (linkTo) => {
    setTimeout(() => {
      window.scrollTo({ top: 0 });
      setShowNavbar(!showNavbar);
      navigate(linkTo);
    }, 0);
    
  };
  return (
    <div style={{
                ...ContactNavbarLinks,
                ...NavbarLinksContainer,
                ...footerContainer
                }}
          className={styles.linksContainer}
          ref={containerRef}>
      
          {links.map((link, index) => (
          <div style={{...NavbarLinksWrapper,...footerNavbarWrapper,...wrapperProps}} 
          className={styles.linkWrapper}key={link.to}>
          <NavLink
            style={{...NavbarLinksLink,
                    ...footerNavbarLink,
                   ...linkProps}}
            ref={navbarlinkRefs[index]}
            onClick={() => handleLinkClick(link.to)}
            className={`${styles.navbarLink} ${location.pathname === link.to ? styles.activeLink : ''}`}
           >
            {link.text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default NavbarLinks;


