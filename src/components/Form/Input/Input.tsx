import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { InputProps, defaultProps } from './types';

const Input: React.FC<InputProps> = ({
	color,
	isFocused,
	isRounded,
	isStatic,
	size,
	...inputProps
}) => {
	let str = 'input,';
	color !== 'default' && (str += `is-${color},`);
	size !== 'default' && (str += `is-${size},`);
	isStatic && (str += 'is-static,');
	isRounded && (str += 'is-rounded,');
	isFocused && (str += 'is-focused,');

	const classes = getStyles(str.split(','));

	return <input className={classes} {...inputProps} />;
};

Input.defaultProps = defaultProps;

export default Input;
