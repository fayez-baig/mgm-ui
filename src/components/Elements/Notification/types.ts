import { ReactNode } from 'react';

type BackgroundColor =
	| 'default'
	| 'primary'
	| 'link'
	| 'info'
	| 'success'
	| 'warning'
	| 'danger';

export interface NotificationProps {
	bgColor?: BackgroundColor;
	children: ReactNode;
	isLight?: boolean;
	onClick?: () => void;
}

export const defaultProps: NotificationProps = {
	bgColor: 'default',
	children:
		'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.',
	isLight: false
};
