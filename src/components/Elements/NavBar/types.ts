import { ReactNode } from 'react';

type color =
	| 'primary'
	| 'link'
	| 'info'
	| 'success'
	| 'warning'
	| 'danger'
	| 'black'
	| 'dark'
	| 'light'
	| 'white';

export interface NavBarProps {
	backgroudColor?: color;
	children: ReactNode;
}

export interface NavBarBrandProps {
	children: ReactNode;
}

export interface NavBarItemProps {
	children?: ReactNode;
}
