import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { InputProps, defaultProps } from './types';

const Input: React.FC<InputProps> = ({
	color,
	disabled,
	isFocused,
	isRounded,
	isStatic,
	onChange,
	placeHolder,
	readOnly,
	size,
	type,
	value,
	name,
	id
}) => {
	let str = 'input,';
	color !== 'default' && (str += `is-${color},`);
	size !== 'default' && (str += `is-${size},`);
	isStatic && (str += 'is-static,');
	isRounded && (str += 'is-rounded,');
	isFocused && (str += 'is-focused,');

	const classes = getStyles(str.split(','));

	return (
		<input
			className={classes}
			type={type}
			value={value}
			placeholder={placeHolder}
			disabled={disabled}
			readOnly={readOnly}
			onChange={onChange}
			name={name}
			id={id}
		/>
	);
};

Input.defaultProps = defaultProps;

export default Input;
