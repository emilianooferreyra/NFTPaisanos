import { useAunctionContext } from '../../context/auction-context';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Divider from '../../ui/Divider';
import SidebarFilters from '../../ui/SidebarFilters';
import CloseIcon from '../../assets/icons/CloseIcon';
import LoadingIcon from '../../assets/icons/LoadingIcon';
import styles from './styles.module.css';

const Content = () => {
  const { auctions } = useAunctionContext();
  const { data } = auctions[0];

  return (
    <section className={styles.content}>
      <aside className={styles.sidebar}>
        <SidebarFilters />
        <Divider />
        <Button variant="text" className={styles.reset} onClick={() => {}}>
          <span className={styles.closeIcon}>
            <CloseIcon />
          </span>
          Reset Filters
        </Button>
      </aside>
      <div className={styles.cardContainer}>
        <div className={styles.cards}>
          {data.map((auction: any, idx: number) => (
            <Card key={idx} auction={auction} />
          ))}
        </div>
        <Button onClick={() => {}} className={styles.loadMore}>
          <span className={styles.loadingIcon}>
            <LoadingIcon />
          </span>
          Load more
        </Button>
      </div>
    </section>
  );
};

export default Content;
