export interface CheckBoxProps {
	children: string;
	disabled?: boolean;
	id?: string;
	name?: string;
	onChange?: () => void;
	value?: string;
}

export const defaultProps: CheckBoxProps = {
	children: 'Check Me',
	disabled: false
};
