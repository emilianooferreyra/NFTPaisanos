import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Divider from '../../ui/Divider';
import Filters from '../../ui/Filters';

import CloseIcon from '../../assets/icons/CloseIcon';
import LoadingIcon from '../../assets/icons/LoadingIcon';

import styles from './styles.module.css';

const Content = () => {
  return (
    <section className={styles.content}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <Filters />
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
            <Card />
            <Card />
            <Card />
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
