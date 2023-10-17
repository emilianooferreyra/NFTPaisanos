import { useAunctionContext } from '../../context/auction-context';
import styles from './styles.module.css';

const CurrentBid = () => {
  const { ethUsd } = useAunctionContext();
  const { eth, usd } = ethUsd;

  return (
    <div className={styles.currentBid}>
      <div className={styles.price}>
        <p className={styles.priceHeading}>Current bid</p>
        <p className={styles.ethPrice}>{eth} ETH</p>
        <p className={styles.usdPrice}>${usd}</p>
      </div>
      <p className={styles.countdownHeading}>Auction ending in</p>
      <div className={styles.countdown}>
        <div className={styles.countdownMeasure}>
          <p className={styles.measure}>19</p>
          <p className={styles.measureLabel}>Hrs</p>
        </div>
        <div className={styles.countdown_measure}>
          <p className={styles.measure}>24</p>
          <p className={styles.measureLabel}>mins</p>
        </div>
        <div className={styles.countdownMeasure}>
          <p className={styles.measure}>19</p>
          <p className={styles.measureLabel}>secs</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentBid;
