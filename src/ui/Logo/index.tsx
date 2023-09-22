import styles from './styles.module.css';
import LogoIcon from '../../assets/icons/LogoIcon';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className={styles.logo}>
    <div className={styles.icon_wrapper}>
      <LogoIcon />
    </div>
    <span className={styles.title}>NFPaisanos</span>
  </Link>
);

export default Logo;
