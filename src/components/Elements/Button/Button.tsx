import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { ButtonProps, defaultProps } from './types';

const Button: React.FC<ButtonProps> = ({
	bgColor,
	children,
	disabled,
	onClick,
	size,
	isLightBg,
	isOutlined,
	isInverted,
	type,
	isFocused,
	isLoading,
	isRounded,
	isFullWidth
}) => {
	let str = 'button,';
	str += bgColor !== 'default' ? `is-${bgColor},` : '';
	str += size !== 'default' ? `is-${size},` : '';
	str += isLightBg ? 'is-light,' : '';
	str += isOutlined ? 'is-outlined,' : '';
	str += isInverted ? 'is-inverted,' : '';
	str += isRounded ? 'is-rounded,' : '';
	str += isFocused ? 'is-focused,' : '';
	str += isLoading ? 'is-loading,' : '';
	str += isFullWidth ? 'is-fullwidth,' : '';

	const classes = getStyles(str.split(','));

	return (
		<button
			type={type}
			className={classes}
			disabled={disabled}
			onClick={onClick}>
			{children}
		</button>
	);
};

Button.defaultProps = defaultProps;

export default Button;
