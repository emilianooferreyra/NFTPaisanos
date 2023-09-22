import styles from './styles.module.css';

const CurrentBid = () => {
  return (
    <div className={styles.current_bid}>
      <div className={styles.price}>
        <p className={styles.price_heading}>Current bid</p>
        <p className={styles.eth_price}>1.00 ETH</p>
        <p className={styles.usd_price}>$3,618.36</p>
      </div>
      <p className={styles.countdown_heading}>Auction ending in</p>
      <div className={styles.countdown}>
        <div className={styles.countdown_measure}>
          <p className={styles.measure}>19</p>
          <p className={styles.measure_label}>Hrs</p>
        </div>
        <div className={styles.countdown_measure}>
          <p className={styles.measure}>24</p>
          <p className={styles.measure_label}>mins</p>
        </div>
        <div className={styles.countdown_measure}>
          <p className={styles.measure}>19</p>
          <p className={styles.measure_label}>secs</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentBid;
