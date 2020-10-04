type TextAreaType = 'text' | 'email' | 'password';
type TextAreaColor =
	| 'default'
	| 'primary'
	| 'info'
	| 'link'
	| 'success'
	| 'warning'
	| 'danger';

type Size = 'default' | 'normal' | 'small' | 'medium' | 'large';

export interface TextAreaProps {
	color?: TextAreaColor;
	disabled?: boolean;
	fixedSize?: boolean;
	id?: string;
	isFocused?: boolean;
	isLoading?: boolean;
	isRounded?: boolean;
	loaderSize?: Size;
	name?: string;
	onChange?: () => void;
	placeHolder?: string;
	readOnly?: boolean;
	rows?: number;
	size?: Size;
	value?: string;
}

export const defaultProps: TextAreaProps = {
	color: 'primary',
	disabled: false,
	isFocused: false,
	isLoading: false,
	isRounded: false,
	placeHolder: 'Type Something here...',
	readOnly: false,
	size: 'default'
};
