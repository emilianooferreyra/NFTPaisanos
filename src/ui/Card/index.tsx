import Button from '../Button';

import BidIcon from '../../assets/icons/BidIcon';
import CandleSticksIcon from '../../assets/icons/CandleSticksIcon';
import RareIcon from '../../assets/icons/RareIcon';
import HeartIcon from '../../assets/icons/HeartIcon';

import styles from './styles.module.css';

const Card = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <img src="src/assets/images/aunction-picture-02.png" width={300} height={300} className={styles.image} />
        <div className={styles.info}>
          <div className={styles.card_top_icons}>
            <RareIcon />
            <HeartIcon />
          </div>
          <div className={styles.btn_container}>
            <Button variant="primary" onClick={() => {}}>
              Place a Bid
              <span className={styles.bid_icon}>
                <BidIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.heading}>
          <h3 className={styles.title}>Amazing digital art</h3>
          <p className={styles.price}>2.45 ETH</p>
        </div>
        <div className={styles.info}>
          <div className={styles.info_creator}>
            <img src="src/assets/images/creator.png" alt="user" width={24} height={24} className={styles.user_avatar} />
            <img src="src/assets/images/creator.png" alt="user" width={24} height={24} className={styles.user_avatar} />
            <img src="src/assets/images/creator.png" alt="user" width={24} height={24} className={styles.user_avatar} />
          </div>
          <p className={styles.stock}>3 in stock</p>
        </div>
        <div className={styles.extra_info}>
          <CandleSticksIcon />
          <p className={styles.bid}>
            Highest bid
            <span className={styles.highest_bid}>0.001 ETH</span>
          </p>
          <Button variant="text" onClick={() => {}}>
            New bid 🔥
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
