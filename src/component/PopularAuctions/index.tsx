import Auction from '../Auction';
import styles from './styles.module.css';

const PopularAuctions = () => {
  return (
    <section className={styles.popularAuctions}>
      <Auction />
    </section>
  );
};

export default PopularAuctions;
