// Core
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
// Packages
import cn from 'classnames';
// Styles
import styles from './Tag.module.css';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  href?: string;
  size?: 's' | 'm';
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
}

const Tag = ({ size = 'm', color = 'ghost', href, className, children, ...props }: IProps): JSX.Element => (
  <div
    className={cn(styles.tag, className, {
      [styles.small]: size === 's',
      [styles.middle]: size === 'm',
      [styles.ghost]: color === 'ghost',
      [styles.red]: color === 'red',
      [styles.gray]: color === 'gray',
      [styles.green]: color === 'green',
      [styles.primary]: color === 'primary',
    })}
    {...props}
  >
    {href ? <a href={href}>{children}</a> : <>{children}</>}
  </div>
);

export default Tag;
