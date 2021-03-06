import React from 'react';
import { getStyles } from './../../styles/getStyles';
import { NavBarBrandProps } from './types';

const NavBarBrand: React.SFC<NavBarBrandProps> = ({ children }) => {
	return (
		<div className={getStyles(['navbar-brand'])}>
			{/* <a
				role='button'
				className={getStyles(['navbar-burger burger'])}
				aria-label='menu'
				aria-expanded='false'
				data-target='navbarBasicExample'>
				<span aria-hidden='true'></span>
				<span aria-hidden='true'></span>
				<span aria-hidden='true'></span>
			</a> */}
			{children}
		</div>
	);
};

export default NavBarBrand;
