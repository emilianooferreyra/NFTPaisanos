import { useState } from 'react';
import Label from '../Label';
import styles from './styles.module.css';

const PriceRangeSlider = () => {
  const [price, setPrice] = useState(0);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newPrice = Number(event.target.value);
    newPrice = Math.max(0, Math.min(newPrice, 10));
    setPrice(newPrice);
  };

  const instantPriceStyle = {
    left: `${(price / 10) * 100}%`,
  };

  const tooltipStyle = {
    left: `${(price / 10) * 100}%`,
  };

  return (
    <div className={styles.priceRangeContainer}>
      <Label>Price Range</Label>

      <span className={styles.instantPrice} style={instantPriceStyle}>
        {price} ETH
      </span>

      <input className={styles.range} type="range" min={0} max={10} step={0} value={price} onChange={handlePriceChange} style={tooltipStyle} />

      <div className={styles.priceMinMax}>
        <span>0.000 ETH</span>
        <span>10 ETH</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
