import styles from './styles.module.css';

interface PillsProps {
  options: { value: string; label: string }[];
  className?: string;
}

const Pills = ({ options }: PillsProps) => {
  return (
    <div className={styles.pills}>
      {options.map((option) => (
        <div key={option.value} className={styles.pill}>
          <label className={styles.label} htmlFor={option.value}>
            {option.label}
          </label>
          <input type="radio" name="radio" id={option.value} className={styles.pill_input} onClick={() => {}} />
        </div>
      ))}
    </div>
  );
};

export default Pills;
