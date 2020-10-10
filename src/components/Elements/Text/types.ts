import { ReactNode } from 'react';

type Size = 'default' | 'small' | 'medium' | 'large';
export interface TextProps {
	children?: ReactNode;
	className?: string;
	style?: any;
	textSize?: Size;
}

export const defaultProps = {
	children: 'I am a Text'
};
