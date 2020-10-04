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
	...inputProps
}) => {
	let inputClassesStr = 'input,';
	color !== 'default' && (inputClassesStr += `is-${color},`);
	size !== 'default' && (inputClassesStr += `is-${size},`);
	isStatic && (inputClassesStr += 'is-static,');
	isRounded && (inputClassesStr += 'is-rounded,');
	isFocused && (inputClassesStr += 'is-focused,');

	const classes = getStyles(inputClassesStr.split(','));

	const LoadingWrapper = ({ children }: any) => (
		<div className={getStyles(['control', 'is-loading'])}>{children}</div>
	);

	const inputComponent = <input className={classes} {...inputProps} />;

	return isLoading ? (
		<LoadingWrapper>{inputComponent}</LoadingWrapper>
	) : (
		inputComponent
	);
};

Input.defaultProps = defaultProps;

export default Input;
