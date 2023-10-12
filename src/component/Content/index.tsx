import { useAunctionContext } from '../../context/aunction-context';
import { aunctionsData } from '../../types/AunctionsData';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Divider from '../../ui/Divider';
import SidebarFilters from '../../ui/SidebarFilters';
import CloseIcon from '../../assets/icons/CloseIcon';
import LoadingIcon from '../../assets/icons/LoadingIcon';
import styles from './styles.module.css';

const Content = () => {
  const { aunctions } = useAunctionContext();
  const { data }: { data: aunctionsData[] } = aunctions[0];

  return (
    <section className={styles.content}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <SidebarFilters />
          <Divider />
          <Button variant="text" className={styles.reset} onClick={() => {}}>
            <span className={styles.close_icon}>
              <CloseIcon />
            </span>
            Reset Filters
          </Button>
        </aside>
        <div className={styles.card_container}>
          <div className={styles.card_content}>
            {data.map((auction: any, idx: number) => (
              <Card key={idx} aunction={auction} />
            ))}
          </div>
          <Button onClick={() => {}} className={styles.load_more}>
            <span className={styles.loading_icon}>
              <LoadingIcon />
            </span>
            Load more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Content;
