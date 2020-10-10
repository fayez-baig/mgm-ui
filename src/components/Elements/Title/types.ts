import { ReactNode } from 'react';

type Size = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps {
	children?: ReactNode;
	fontSize?: Size;
	isSpaced?: boolean;
}

export const defaultProps: TitleProps = {
	fontSize: 3
};
