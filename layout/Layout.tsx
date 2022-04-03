// Core
import { ReactNode } from 'react';
// Packages
import cn from 'classnames';
// Components
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
// Styles
import styles from './Layout.module.css';

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps): JSX.Element => (
  <div className={styles.wrapper}>
    <Header className={styles.header} />

    <Sidebar className={styles.sidebar} />

    <div className={styles.body}>{children}</div>

    <Footer className={styles.footer} />
  </div>
);

export default Layout;
