// Core
import { DetailedHTMLProps, HTMLAttributes } from 'react';
// Packages
import cn from 'classnames';
import { format } from 'date-fns';
// Styles
import styles from './Footer.module.css';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer = ({ className, ...props }: IProps): JSX.Element => (
  <footer className={cn(className, styles.footer)} {...props}>
    <div>OwlTop &copy; 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>

    <a href="#" target="_blank">
      Пользовательское соглашение
    </a>

    <a href="#" target="_blank">
      Политика конфиденциальности
    </a>
  </footer>
);

export default Footer;
