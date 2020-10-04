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
	hasFixedSize?: boolean;
	id?: string;
	isFocused?: boolean;
	isLoading?: boolean;
	loaderSize?: Size;
	name?: string;
	onChange?: () => void;
	placeholder?: string;
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
	placeholder: 'Type Something here...',
	readOnly: false,
	size: 'default'
};
