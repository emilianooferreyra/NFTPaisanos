import CurrentBid from '../CurrentBid';

import Button from '../../ui/Button';
import InfoPill from '../../ui/InfoPill';

import ArrowIcon from '../../assets/icons/ArrowIcon';

import Creator from '../../assets/images/creator.png';
import InstantPrice from '../../assets/images/instant-price.svg';
import AunctionPicture01 from '../../assets/images/aunction-picture-01.png';

import styles from './styles.module.css';

const Aunction = () => {
  return (
    <article className={styles.aunction}>
      <div className={styles.media}>
        <img src={AunctionPicture01} alt="Popular Auction" width={311} height={478} className={styles.image} />
      </div>
      <div className={styles.info}>
        <div className={styles.content}>
          <h3 className={styles.title}>Marco carrillo®</h3>
          <div className={styles.about}>
            <InfoPill image={Creator} info="Don Paisano" title="Creator" />
            <InfoPill image={InstantPrice} info="3.5 ETH" title="Instant price" />
          </div>
        </div>
        <CurrentBid />
        <Button variant="primary" className={styles.button} onClick={() => {}}>
          Place a bid
        </Button>
        <Button className={styles.button} onClick={() => {}}>
          View item
        </Button>
        <div className={styles.controls}>
          <Button className={styles.control} onClick={() => {}} aria-label="Previous" disabled={false}>
            <ArrowIcon direction="scale(-1,1)" />
          </Button>
          <Button className={styles.control} onClick={() => {}} aria-label="Next" disabled={false}>
            <ArrowIcon />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Aunction;
