type ButtonType = 'button' | 'submit' | 'reset';
type ButtonBackgroundColor =
	| 'default'
	| 'primary'
	| 'info'
	| 'link'
	| 'success'
	| 'warning'
	| 'danger';

type Size = 'default' | 'normal' | 'small' | 'medium' | 'large';

export interface ButtonProps {
	bgColor?: ButtonBackgroundColor;
	children: string;
	disabled?: boolean;
	isFocused?: boolean;
	isInvertedText?: boolean;
	isLightBg?: boolean;
	isLoading?: boolean;
	isOutLined?: boolean;
	isRounded?: boolean;
	onClick?: (event: MouseEvent) => void;
	size?: Size;
	type?: ButtonType;
}

export const defaultProps: ButtonProps = {
	bgColor: 'primary',
	children: 'Click Me',
	disabled: false,
	isFocused: false,
	isInvertedText: false,
	isLightBg: false,
	isLoading: false,
	isOutLined: false,
	isRounded: false,
	size: 'default',
	type: 'button'
};
