import Logo from '../Logo';
import styles from './styles.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.logo_container}>
      <Logo />
      <p className={styles.slogan}>the new creative economy.</p>
    </div>
    <p className={styles.credits}>Created with ❤️ by XXXXX</p>
  </footer>
);

export default Footer;
