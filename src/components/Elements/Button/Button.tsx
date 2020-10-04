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
	bgColor !== 'default' && (str += `is-${bgColor},`);
	size !== 'default' && (str += `is-${size},`);
	isLightBg && (str += 'is-light,');
	isOutlined && (str += 'is-outlined,');
	isInverted && (str += 'is-inverted,');
	isRounded && (str += 'is-rounded,');
	isFocused && (str += 'is-focused,');
	isLoading && (str += 'is-loading,');
	isFullWidth && (str += 'is-fullwidth,');

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
