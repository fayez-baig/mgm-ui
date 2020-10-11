import { ReactNode } from 'react';

type TagSize = 'normal' | 'medium' | 'large';
type BackgroundColor =
	| 'default'
	| 'dark'
	| 'black'
	| 'light'
	| 'white'
	| 'primary'
	| 'link'
	| 'info'
	| 'success'
	| 'warning'
	| 'danger';

export interface TagProps {
	bgColor?: BackgroundColor;
	children?: ReactNode;
	hasDeleteBtn?: boolean;
	hasDeleteIcon?: boolean;
	isLight?: boolean;
	isRounded?: boolean;
	onClick?: () => void;
	tagSize?: TagSize;
}

export interface AddonTagProps {
	children?: ReactNode;
	hasAddons?: boolean;
}

export interface TagWrapperProps {
	children?: ReactNode;
}
