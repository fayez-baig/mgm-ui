import { options } from './selectConstants';

type SelectInputColor =
	| 'default'
	| 'primary'
	| 'info'
	| 'link'
	| 'success'
	| 'warning'
	| 'danger';

type Size = 'default' | 'normal' | 'small' | 'medium' | 'large';

export interface SelectProps {
	color?: SelectInputColor;
	id?: string;
	isFocused?: boolean;
	isLoading?: boolean;
	isRounded?: boolean;
	multiple?: boolean;
	name?: string;
	onChange?: () => void;
	options?: Array<number | string | any | any>;
	size?: Size;
	value?: Array<number | string>;
	visibleOptionsLength?: number;
}

export const defaultProps: SelectProps = {
	color: 'primary',
	isFocused: false,
	isLoading: false,
	isRounded: false,
	options,
	size: 'default'
};
