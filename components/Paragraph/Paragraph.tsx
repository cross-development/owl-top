// Core
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
// Packages
import cn from 'classnames';
// Styles
import styles from './Paragraph.module.css';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  size?: 's' | 'm' | 'l';
}

const Paragraph = ({ size = 'm', className, children, ...props }: IProps): JSX.Element => (
  <p
    className={cn(styles.paragraph, className, {
      [styles.small]: size === 's',
      [styles.middle]: size === 'm',
      [styles.large]: size === 'l',
    })}
    {...props}
  >
    {children}
  </p>
);

export default Paragraph;
