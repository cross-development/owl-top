// Core
import { DetailedHTMLProps, HTMLAttributes } from 'react';
// Packages
import cn from 'classnames';
// Styles
import styles from './Sidebar.module.css';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar = ({ ...props }: IProps): JSX.Element => <div {...props}>Sidebar</div>;

export default Sidebar;
