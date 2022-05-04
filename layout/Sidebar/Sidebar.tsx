// Core
import { DetailedHTMLProps, HTMLAttributes } from 'react';
// Packages
import cn from 'classnames';
// Components
import Menu from 'layout/Menu/Menu';
// Styles
import styles from './Sidebar.module.css';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar = ({ ...props }: IProps): JSX.Element => (
  <div {...props}>
    <Menu />
  </div>
);

export default Sidebar;
