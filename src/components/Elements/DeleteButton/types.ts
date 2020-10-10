type Size = 'default' | 'small' | 'medium' | 'large';

export interface DeleteButtonProps {
	btnSize?: Size;
	onClick?: () => void;
}

export const defaultProps: DeleteButtonProps = {
	btnSize: 'default'
};
