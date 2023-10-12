import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../assets/icons/LogoIcon';
import BurgerIcon from '../../assets/icons/BurgerIcon';
import styles from './styles.module.css';

const Header = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <Logo />
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Discover
        </Link>
        <Link to="/" className={styles.link}>
          What we do
        </Link>
      </div>
      <button className={styles.menu} aria-label="Menu" onClick={() => {}}>
        <BurgerIcon />
      </button>
      <Button className={styles.connect_wallet} onClick={() => {}}>
        Connect Wallet
      </Button>
    </header>
  </div>
);

export default Header;
