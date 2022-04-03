// Core
import { DetailedHTMLProps, HTMLAttributes } from 'react';
// Packages
import cn from 'classnames';
// Styles
import styles from './Header.module.css';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header = ({ ...props }: IProps): JSX.Element => <header {...props}>Header</header>;

export default Header;
