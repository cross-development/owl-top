// Core
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
// Packages
import cn from 'classnames';
// Assets
import ArrowIcon from 'assets/arrow.svg';
// Styles
import styles from './Button.module.css';

interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: 'primary' | 'ghost';
  children: ReactNode;
  arrow?: 'right' | 'down' | 'none';
}

const Button = ({ appearance, arrow = 'none', children, className, ...props }: IProps): JSX.Element => (
  <button
    className={cn(styles.button, className, {
      [styles.ghost]: appearance === 'ghost',
      [styles.primary]: appearance === 'primary',
    })}
    {...props}
  >
    {children}

    {arrow !== 'none' && (
      <span
        className={cn(styles.arrow, {
          [styles.down]: arrow === 'down',
          [styles.right]: arrow === 'right',
        })}
      >
        <ArrowIcon />
      </span>
    )}
  </button>
);

export default Button;
