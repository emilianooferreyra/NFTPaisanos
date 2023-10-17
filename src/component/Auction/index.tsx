import { useState } from 'react';
import { useAunctionContext } from '../../context/auction-context';
import clsx from 'clsx';
import CurrentBid from '../CurrentBid';
import Button from '../../ui/Button';
import InfoPill from '../../ui/InfoPill';
import NavigationArrowIcon from '../../assets/icons/NavigationArrowIcon';
import InstantPriceIcon from '../../assets/svg/instant-price.svg';
import styles from './styles.module.css';

const Auction = () => {
  const { popularAuctions } = useAunctionContext();
  const { data } = popularAuctions[0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const { author, authorAvatar, media, instantPrice } = data[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <article className={styles.auction}>
      <div className={styles.imageContainer}>
        <img src={media.image} alt="Popular Auction" width={311} height={478} className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <h3 className={styles.author}>Marco carrillo®</h3>
        <div className={styles.infoPillsContainer}>
          <InfoPill image={authorAvatar} info={author} title="Creator" />
          <InfoPill image={InstantPriceIcon} info={instantPrice} title="Instant Price" />
        </div>
        <CurrentBid />
        <Button variant="primary" className={styles.actionButton} onClick={() => {}}>
          Place a bid
        </Button>
        <Button className={styles.actionButton} onClick={() => {}}>
          View item
        </Button>
        <div className={styles.navigationButtonsContainer}>
          <Button className={clsx(styles.navigationButton, currentIndex === 0 && styles.disabled)} onClick={handlePrev}>
            <NavigationArrowIcon direction="scale(-1,1)" />
          </Button>
          <Button className={clsx(styles.navigationButton, currentIndex === data.length - 1 && styles.disabled)} onClick={handleNext}>
            <NavigationArrowIcon />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Auction;
