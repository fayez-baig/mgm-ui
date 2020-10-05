import { listItems } from './selectConstants';

type InputColor =
	| 'default'
	| 'primary'
	| 'info'
	| 'link'
	| 'success'
	| 'warning'
	| 'danger';

type Size = 'default' | 'normal' | 'small' | 'medium' | 'large';

export interface SelectProps {
	color?: InputColor;
	id?: string;
	isFocused?: boolean;
	isLoading?: boolean;
	isRounded?: boolean;
	listItems?: Array<number | string | any>;
	multipleSelect?: boolean;
	name?: string;
	numberOfOptions?: number;
	onChange?: () => void;
	size?: Size;
	value?: Array<number | string>;
}

export const defaultProps: SelectProps = {
	color: 'primary',
	isFocused: false,
	isLoading: false,
	isRounded: false,
	listItems: listItems,
	size: 'default'
};
