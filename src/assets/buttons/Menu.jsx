import styles from './Menu.module.css';

const Menu = ({ showNavbar, setShowNavbar,color }) => {

  
  const handleClick = () => {
  setTimeout(() => {
        setShowNavbar(!showNavbar);
  }, 300);
  };

  return (
        <div 
        style={{borderBottom: `1px solid ${color}`, paddingInline: '.5em'}}  
        className={styles.container} 
        onClick={handleClick}>
         <span style={{color: color, fontFamily: 'Roboto Mono, monospace',
            textTransform: 'uppercase', fontSize: '11px'}}>
            Menu</span>
        </div>
  );
};

export default Menu;
