import { useState } from 'react';
import Input from '../Input';
import styles from './styles.module.css';

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return <Input className={styles.search} onChange={handleInputChange} value={inputValue} />;
};

export default Search;
