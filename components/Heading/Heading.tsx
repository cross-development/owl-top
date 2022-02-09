// Core
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
// Packages
import cn from 'classnames';
// Styles
import styles from './Heading.module.css';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}

const Heading = ({ tag, children, className, ...props }: IProps): JSX.Element => (
  <>
    {tag === 'h1' && (
      <h1 className={cn(styles.h1, className)} {...props}>
        {children}
      </h1>
    )}

    {tag === 'h2' && (
      <h2 className={cn(styles.h2, className)} {...props}>
        {children}
      </h2>
    )}

    {tag === 'h3' && (
      <h3 className={cn(styles.h3, className)} {...props}>
        {children}
      </h3>
    )}
  </>
);

export default Heading;
