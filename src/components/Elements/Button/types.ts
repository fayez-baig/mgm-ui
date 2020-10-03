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
	isInverted?: boolean;
	isLightBg?: boolean;
	isLoading?: boolean;
	isOutlined?: boolean;
	isRounded?: boolean;
	onClick?: () => void;
	size?: Size;
	type?: ButtonType;
}

export const defaultProps: ButtonProps = {
	bgColor: 'primary',
	children: 'Click Me',
	disabled: false,
	isFocused: false,
	isInverted: false,
	isLightBg: false,
	isLoading: false,
	isOutlined: false,
	isRounded: false,
	size: 'default',
	type: 'button'
};
