import { useState } from 'react';
import { useAunctionContext } from '../../context/aunction-context';
import { aunctionsData } from '../../types/AunctionsData';
import clsx from 'clsx';
import CurrentBid from '../CurrentBid';
import Button from '../../ui/Button';
import InfoPill from '../../ui/InfoPill';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import InstantPriceIcon from '../../assets/images/instant-price.svg';
import styles from './styles.module.css';

const Aunction = () => {
  const { popularAunctions } = useAunctionContext();
  const { data }: { data: aunctionsData[] } = popularAunctions[0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const { author, authorAvatar, media, instantPrice }: aunctionsData = data[currentIndex];

  const handleNext = () => {
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <article className={styles.aunction}>
      <div className={styles.media}>
        <img src={media.image} alt="Popular Auction" width={311} height={478} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>Marco carrillo®</h3>
        <div className={styles.about}>
          <InfoPill image={authorAvatar} info={author} title="Creator" />
          <InfoPill image={InstantPriceIcon} info={instantPrice} title="Instant Price" />
        </div>
        <CurrentBid />
        <Button variant="primary" className={styles.button} onClick={() => {}}>
          Place a bid
        </Button>
        <Button className={styles.button} onClick={() => {}}>
          View item
        </Button>
        <div className={styles.controls}>
          <Button
            className={clsx(styles.control, currentIndex === 0 && styles.disabled)}
            onClick={handlePrev}
            aria-label="Previous"
            disabled={currentIndex === 0}
          >
            <ArrowIcon direction="scale(-1,1)" />
          </Button>
          <Button
            className={clsx(styles.control, currentIndex === data.length - 1 && styles.disabled)}
            onClick={handleNext}
            aria-label="Next"
            disabled={currentIndex === data.length - 1}
          >
            <ArrowIcon />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Aunction;
