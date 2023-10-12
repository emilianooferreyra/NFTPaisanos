import Button from '../Button';
import BidIcon from '../../assets/icons/BidIcon';
import CandleSticksIcon from '../../assets/icons/CandleSticksIcon';
import RareIcon from '../../assets/icons/RareIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import styles from './styles.module.css';

interface CardProps {
  aunction: any;
}

const Card = ({ aunction }: CardProps) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <img src={aunction.media.image} width={300} height={300} className={styles.image} />
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
          <p className={styles.price}>{aunction.instantPrice}</p>
        </div>
        <div className={styles.info}>
          <div className={styles.info_creator}>
            {aunction.bidUsers.map((bidUser: any, idx: number) => (
              <img key={idx} src={bidUser.avatar} alt={bidUser.name} width={24} height={24} className={styles.user_avatar} />
            ))}
          </div>
          <p className={styles.stock}>{aunction.stock} in stock</p>
        </div>
        <div className={styles.extra_info}>
          <CandleSticksIcon />
          <p className={styles.bid}>
            Highest bid
            <span className={styles.highest_bid}>{aunction.highestBid}</span>
          </p>
          <p className={styles.new_bid_text}>New bid 🔥</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
