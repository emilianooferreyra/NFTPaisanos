import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../assets/icons/LogoIcon';
import BurgerIcon from '../../assets/icons/BurgerIcon';
import styles from './styles.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('first', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo />
        <button className={styles.menuButton} onClick={toggleMenu}>
          <BurgerIcon />
        </button>
        <div className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`}>
          <Link to="/" className={styles.navLink}>
            Discover
          </Link>
          <Link to="/" className={styles.navLink}>
            What we do
          </Link>
        </div>
        <Button className={styles.connectWalletButton} onClick={() => {}}>
          Connect Wallet
        </Button>
      </header>
      {isMenuOpen && (
        <div className={styles.menuMobile}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link to="/" className={styles.menuLink}>
                Discover
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/" className={styles.menuLink}>
                What we do
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/" className={styles.menuLink}>
                Connect Wallet
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
