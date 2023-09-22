import Pills from '../Pills';
import Select from '../Select';

import styles from './styles.module.css';

const filterItems = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
];

const typeItems = [
  { value: 'all', label: 'All items' },
  { value: 'Art', label: 'Art' },
  { value: 'Photography', label: 'Photography' },
];

const Filter = () => {
  return (
    <div className={styles.filters}>
      <Select options={filterItems} label="Sort by" hiddenLabel onChange={() => {}} value={''} className={styles.sort} />
      <Pills options={typeItems} className={styles.type} />
    </div>
  );
};

export default Filter;
