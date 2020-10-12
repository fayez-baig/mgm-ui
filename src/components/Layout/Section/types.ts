import { ReactNode } from 'react';

type SizeValues = 'default' | 'medium' | 'large';
export interface SectionProps {
	Size?: SizeValues;
	children?: ReactNode;
}

export const defaultProps: SectionProps = {
	Size: 'default'
};
