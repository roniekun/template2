import styles from './Menu.module.css';

const Menu = ({ showNavbar, setShowNavbar,color }) => {

  
  const handleClick = () => {
  setTimeout(() => {
        setShowNavbar(!showNavbar);
  }, 300);
  };

  return (
        <div 
        style={{border: `1px solid ${color}`, borderRadius:'3px'}}  
        className={styles.container} 
        onClick={handleClick}>
         <span style={{color: color, fontFamily: 'Roboto Mono, monospace',
            textTransform: 'uppercase', fontSize: '12px', userSelect: 'none',
            letterSpacing: '2px', fontWeight: 'bold', padding: '.5em'}}>
            Menu</span>
        </div>
  );
};

export default Menu;
