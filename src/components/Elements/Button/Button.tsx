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
	isOutLined,
	isInvertedText,
	type,
	isFocused,
	isLoading,
	isRounded
}) => {
	const arr = ['button'];
	if (bgColor !== 'default') arr.push(`is-${bgColor}`);
	if (size !== 'default') arr.push(`is-${size}`);
	if (isLightBg) arr.push('is-light');
	if (isOutLined) arr.push('is-outlined');
	if (isInvertedText) arr.push('is-inverted');
	if (isRounded) arr.push('is-rounded');
	if (isFocused) arr.push('is-focused');
	if (isLoading) arr.push('is-loading');
	const classes = getStyles(arr);

	return (
		<>
			<button
				type={type}
				className={classes}
				disabled={disabled}
				onClick={onClick}>
				{children}
			</button>
		</>
	);
};

Button.defaultProps = defaultProps;

export default Button;
