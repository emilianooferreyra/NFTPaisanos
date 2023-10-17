import Divider from '../Divider';
import PriceRange from '../PriceRange';
import Select from '../Select';
import styles from './styles.module.css';

const likesItems = [
  { value: 'most_liked', label: 'Most liked' },
  { value: 'least_liked', label: 'Least liked' },
];

const colorItems = [
  { value: 'all', label: 'All colors' },
  { value: 'black', label: 'Black' },
  { value: 'green', label: 'Green' },
  { value: 'pink', label: 'Pink' },
  { value: 'purple', label: 'Purple' },
];

const SidebarFilters = () => {
  return (
    <div className={styles.sidebarFiltersContainer}>
      <PriceRange />
      <Divider />
      <Select label="Likes" options={likesItems} onChange={() => {}} value={''} />
      <Select label="Color" options={colorItems} type="color" onChange={() => {}} value={''} />
    </div>
  );
};

export default SidebarFilters;
