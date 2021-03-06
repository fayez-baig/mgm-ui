import * as React from 'react';
import { NavBarItemProps } from './types';
import { getStyles } from '../../styles/getStyles';

const NavBarItem: React.SFC<NavBarItemProps> = ({ children }) => {
	return <a className={getStyles(['navbar-item'])}>{children}</a>;
};

export default NavBarItem;
