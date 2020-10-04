type InputType = 'text' | 'email' | 'password';
type InputColor =
	| 'default'
	| 'primary'
	| 'info'
	| 'link'
	| 'success'
	| 'warning'
	| 'danger';

type Size = 'default' | 'normal' | 'small' | 'medium' | 'large';

export interface InputProps {
	color?: InputColor;
	disabled?: boolean;
	id?: string;
	isFocused?: boolean;
	isRounded?: boolean;
	isStatic?: boolean;
	name?: string;
	onChange?: () => void;
	placeHolder?: string;
	readOnly?: boolean;
	size?: Size;
	type?: InputType;
	value?: string;
}

export const defaultProps: InputProps = {
	color: 'primary',
	disabled: false,
	isFocused: false,
	isRounded: false,
	isStatic: false,
	placeHolder: 'Type Something here...',
	readOnly: false,
	size: 'default',
	type: 'text'
};
