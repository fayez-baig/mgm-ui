import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { InputProps, defaultProps } from './types';

const Input: React.FC<InputProps> = ({
	color,
	isFocused,
	isRounded,
	isStatic,
	size,
	isLoading,
	placeHolder,
	...inputProps
}) => {
	let intutClassesStr = 'input,';
	color !== 'default' && (intutClassesStr += `is-${color},`);
	size !== 'default' && (intutClassesStr += `is-${size},`);
	isStatic && (intutClassesStr += 'is-static,');
	isRounded && (intutClassesStr += 'is-rounded,');
	isFocused && (intutClassesStr += 'is-focused,');

	const classes = getStyles(intutClassesStr.split(','));

	const Wrapper = ({ children }: any) => (
		<div className={getStyles(['control', 'is-loading'])}>{children}</div>
	);

	const inputComponent = (
		<input className={classes} placeholder={placeHolder} {...inputProps} />
	);

	return isLoading ? <Wrapper>{inputComponent}</Wrapper> : inputComponent;
};

Input.defaultProps = defaultProps;

export default Input;
