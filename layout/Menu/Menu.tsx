// Core
import { useContext } from 'react';
// Context
import { AppContext } from 'context/app.context';
// Styles
import styles from './Footer.module.css';

const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  return (
    <div>
      <ul>
        {menu.map(m => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
