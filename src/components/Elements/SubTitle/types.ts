import { ReactNode } from 'react';

type Size = 1 | 2 | 3 | 4 | 5 | 6;

export interface SubTitleProps {
	children?: ReactNode;
	fontSize?: Size;
}

export const defaultProps: SubTitleProps = {
	fontSize: 5
};
