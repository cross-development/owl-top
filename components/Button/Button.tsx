// Core
import { ReactNode } from 'react';
// Packages
import cn from 'classnames';
// Styles
import styles from './Button.module.css';

interface IProps {
  children: ReactNode;
  appearance: 'primary' | 'ghost';
}

const Button = ({ appearance, children }: IProps): JSX.Element => (
  <button
    className={cn(styles.button, {
      [styles.ghost]: appearance === 'ghost',
      [styles.primary]: appearance === 'primary',
    })}
  >
    {children}
  </button>
);

export default Button;
