import { useState } from 'react';
import Label from '../Label';
import styles from './styles.module.css';

const PriceRange = () => {
  const [price, setPrice] = useState(0);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  return (
    <div className={styles.price_range_container}>
      <Label>Price Range</Label>
      <input type="range" value={price} onChange={handlePriceChange} />
      <div className={styles.price_minmax}>
        <span>{price} ETH</span>
        <span>{price} ETH</span>
      </div>
    </div>
  );
};

export default PriceRange;
