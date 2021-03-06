import * as React from 'react';
import { getStyles } from './../../styles/getStyles';
export interface NavBarItemEndProps {
	children: any;
}

const NavBarItemEnd: React.SFC<NavBarItemEndProps> = ({ children }) => {
	return (
		<div className={getStyles(['navbar-end'])}>
			<div className={getStyles(['navbar-item'])}>{children}</div>
		</div>
	);
};

export default NavBarItemEnd;
