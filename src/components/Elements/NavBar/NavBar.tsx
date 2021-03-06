import React from 'react';

import { NavBarProps } from './types';
import { getStyles } from './../../styles/getStyles';

const NavBar: React.FC<NavBarProps> = ({ children }) => {
	return (
		<nav className='navbar' role='navigation' aria-label='main navigation'>
			<div id='navbarBasicExample' className={getStyles(['navbar-menu'])}>
				{children}
				{/* <div className='navbar-end'>
					<div className='navbar-item'>
						<div className='buttons'>
							<a className='button is-primary'>
								<strong>Sign up</strong>
							</a>
							<a className='button is-light'>Log in</a>
						</div>
					</div>
				</div> */}
			</div>
		</nav>
	);
};

export default NavBar;
