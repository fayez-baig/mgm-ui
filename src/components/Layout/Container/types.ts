import { ReactNode } from 'react';

export interface ContainerProps {
	children?: ReactNode;
	isFluid?: boolean;
	isFullHD?: boolean;
	isMaxDesktop?: boolean;
	isMaxWideScreen?: boolean;
	isWideScreen?: boolean;
}
