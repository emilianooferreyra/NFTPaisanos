import { useState, useEffect, ChangeEvent, useCallback } from 'react';
import { MOBILE_WIDTH_THRESHOLD } from '../../utils/constants';
import clsx from 'clsx';
import styles from './styles.module.css';

interface InputProps {
  onChange: (value: string) => void;
  value?: string;
  className?: string;
}

const Input = (props: InputProps) => {
  const { onChange, value = '', className } = props;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH_THRESHOLD);

  const handleWindowResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 480);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }, []);

  const placeholderText = isMobile ? 'Type your keywords' : 'Type to find something nice...';

  return <input type="text" placeholder={placeholderText} onChange={handleChange} value={value} className={clsx(styles.input, className)} />;
};

export default Input;
