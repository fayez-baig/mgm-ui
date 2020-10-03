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
	isRounded
}) => {
	const btnStylesArr = ['button'];
	if (bgColor !== 'default') btnStylesArr.push(`is-${bgColor}`);
	if (size !== 'default') btnStylesArr.push(`is-${size}`);
	if (isLightBg) btnStylesArr.push('is-light');
	if (isOutlined) btnStylesArr.push('is-outlined');
	if (isInverted) btnStylesArr.push('is-inverted');
	if (isRounded) btnStylesArr.push('is-rounded');
	if (isFocused) btnStylesArr.push('is-focused');
	if (isLoading) btnStylesArr.push('is-loading');
	const classes = getStyles(btnStylesArr);

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
