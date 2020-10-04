import { ReactNode } from 'react';

type ColSizeMultipleOf20 =
	| 'is-four-fifths'
	| 'is-three-fifths'
	| 'is-two-fifths'
	| 'is-one-fifth';

type ColSizeGeneral =
	| 'is-three-quarters'
	| 'is-three-quarters'
	| 'is-two-thirds'
	| 'is-half'
	| 'is-one-third'
	| 'is-one-quarter'
	| 'is-full';

type ColSizeBy12 =
	| 'is-1'
	| 'is-2'
	| 'is-3'
	| 'is-4'
	| 'is-5'
	| 'is-6'
	| 'is-7'
	| 'is-8'
	| 'is-9'
	| 'is-10'
	| 'is-11'
	| 'is-12';

type ColSize = ColSizeGeneral | ColSizeMultipleOf20 | ColSizeBy12;

export interface ColProps {
	children?: ReactNode;
	colSize?: ColSize;
}
