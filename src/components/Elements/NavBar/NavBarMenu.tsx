import React, { ReactNode } from 'react';
import { getStyles } from './../../styles/getStyles';

export interface NavBarMenuProps {
	children: ReactNode;
}

const NavBarMenu: React.SFC<NavBarMenuProps> = ({ children }) => {
	return (
		<div id='navbarBasicExample' className={getStyles(['navbar-menu'])}>
			<div className={getStyles(['navbar-start'])}>{children}</div>
		</div>
	);
};

export default NavBarMenu;
