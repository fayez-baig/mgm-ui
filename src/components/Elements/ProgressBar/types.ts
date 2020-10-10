type Color =
	| 'default'
	| 'primary'
	| 'link'
	| 'info'
	| 'success'
	| 'warning'
	| 'danger';

type Size = 'default' | 'small' | 'medium' | 'large';

export interface ProgressBarProps {
	color?: Color;
	max: number;
	progressBarSize?: Size;
	value?: number;
}

export const defaultProps: ProgressBarProps = {
	max: 100,
	progressBarSize: 'default'
};
