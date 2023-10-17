import Button from '../Button';
import BidIcon from '../../assets/icons/BidIcon';
import CandleSticksIcon from '../../assets/icons/CandleSticksIcon';
import RareIcon from '../../assets/icons/RareIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import styles from './styles.module.css';

interface CardProps {
  auction: any;
}

const Card = ({ auction }: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHover}>
        <img src={auction.media.image} width={300} height={300} className={styles.image} />
        <div className={styles.info}>
          <div className={styles.icons}>
            <RareIcon />
            <HeartIcon />
          </div>
          <div className={styles.actionButtonContainer}>
            <Button variant="primary" onClick={() => {}}>
              Place a Bid
              <span className={styles.bidIcon}>
                <BidIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.heading}>
          <h3 className={styles.title}>Amazing digital art</h3>
          <p className={styles.price}>{auction.instantPrice}</p>
        </div>
        <div className={styles.info}>
          <div className={styles.infoBidUsers}>
            {auction.bidUsers.map((bidUser: any, idx: number) => (
              <img key={idx} src={bidUser.avatar} alt={bidUser.name} width={24} height={24} className={styles.userAvatar} />
            ))}
          </div>
          <p className={styles.stock}>{auction.stock} in stock</p>
        </div>
        <div className={styles.infoFooter}>
          <CandleSticksIcon />
          <p className={styles.bid}>
            Highest bid
            <span className={styles.highestBid}>{auction.highestBid}</span>
          </p>
          <p className={styles.newBidText}>New bid 🔥</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
