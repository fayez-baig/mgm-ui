export interface RadioProps {
	checked?: boolean;
	children: string;
	disabled?: boolean;
	htmlFor?: string;
	id?: string;
	name?: string;
	onChange?: () => void;
	value?: string;
}

export const defaultProps: RadioProps = {
	children: 'Check Me',
	disabled: false,
	name: 'radio'
};
