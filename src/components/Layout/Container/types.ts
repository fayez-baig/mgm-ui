import { ReactNode } from 'react';

export interface ContainerProps {
	children?: ReactNode;
	isFluid?: boolean;
	isFullHd?: boolean;
	isMaxDesktop?: boolean;
	isMaxWideScreen?: boolean;
	isWideScreen?: boolean;
}
