import { ReactNode } from 'react';

type SizeValues = 'default' | 'medium' | 'large';
export interface SectionProps {
	children?: ReactNode;
	size?: SizeValues;
}

export const defaultProps: SectionProps = {
	size: 'default'
};
