import Footer from '../Footer';
import Header from '../Header';
import Search from '../Search';
import Filter from '../Filter';

import Content from '../../component/Content';
import PopularAuctions from '../../component/PopularAuctions';

import styles from './styles.module.css';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <main className={styles.main}>
        <PopularAuctions />
        <Search />
        <Filter />
        <Content />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
