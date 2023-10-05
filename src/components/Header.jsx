import styles from './styles/Header.module.css';
import SiteLogo from './SiteLogo';
import NavbarLinks from './pages/Navlinks';

function Header({showNavbar, setShowNavbar, isSmallScreen, isMediumScreen, 
                isDesktop, setColor,color}) {
  return (
          <div className={styles.container}>
            <div className={styles.logoWrapper}>
              <SiteLogo setShowNavbar={setShowNavbar}
              showNavbar={showNavbar}
              text={'Your Logo'}
              headerLogo={{fontSize: '20px',
                            fontFamily:'Oswald, sans-serif',
                            fontWeight: '500',textTransform:'uppercase',
                            color: color}} />
            </div> 
              {isDesktop &&
               <div className={styles.navLinksWrapper}>
               <NavbarLinks 
               setShowNavbar={setShowNavbar}
               
               wrapperProps={{ display: 'flex',justifyContent: 'center', alignItems:'center',
               shrink: '0', height: '50px', paddingInline:'1em', marginInline: '6px'}}
               linkProps= {{textTransform: 'uppercase',
               fontSize: '16px', color: color, fontWeight: '450', fontFamily: 'Oswald,sans-serif'}}/>
             </div>}
          </div>
  );
}

export default Header;


    {/* {!isSmallScreen &&
             <div className='socials_wrapper'>
               <Socials displayIcons={true}
                headerIconContainer={{margin: '5px'}}
                headerSocialLink={{fill: 'lightgray'}}/>
             </div>
             } */}