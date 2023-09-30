import { NavLink } from 'react-router-dom';
import styles from './styles/SiteLogo.module.css';

// import { ReactComponent as MyLogo } from './sitelogo.svg' ;

const SiteLogo = ({
  text,
  headerContainer,
  headerLogo, 
  showNavbar , 
  isSmallScreen, 
  navbarContainer,
  setShowNavbar}) => {

  
    const handleClick = () => {
      window.scrollTo({ top: 0 });
      setShowNavbar(false);
    };
  return (
    <NavLink to='/' 
    onClick={handleClick}
    style={{textDecoration: 'none',...headerContainer}} 
    className={styles.container}>
      <h1 style={{...navbarContainer,...headerLogo}} className={styles.logo}>{text}&trade;</h1>
    </NavLink> 
  )
}

export default SiteLogo