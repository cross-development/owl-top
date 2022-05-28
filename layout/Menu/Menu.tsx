// Core
import { useContext } from 'react';
// Packages
import cn from 'classnames';
// Context
import { AppContext } from 'context/app.context';
// Assets
import CoursesIcon from 'assets/courses.svg';
import ServicesIcon from 'assets/services.svg';
import BooksIcon from 'assets/books.svg';
import ProductsIcon from 'assets/products.svg';
// Interfaces and types
import { FirstLevelMenuItem, PageItem } from 'types/menu.interface';
// Styles
import styles from './Footer.module.css';
import { TopLevelCategory } from 'types/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Services },
];

const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  const buildFirstLevel = () => {
    return firstLevelMenu.map(m => (
      <div key={m.id}>
        <a href={`/${m.route}`}>
          <div className={cn(styles.firstLevel, { [styles.firstLevelActive]: m.id === firstCategory })}>
            {m.icon}
            <span>{m.name}</span>
          </div>
        </a>

        {m.id === firstCategory && buildSecondLevel(m)}
      </div>
    ));
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>

            <div className={cn(styles.secondLevelBlock, { [styles.secondLevelBlockOpened]: m.isOpened })}>
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map(p => (
      <a
        key={p._id}
        href={`${route}/${p.alias}`}
        className={cn(styles.thirdLevel, { [styles.thirdLevelActive]: false })}
      >
        {p.category}
      </a>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
