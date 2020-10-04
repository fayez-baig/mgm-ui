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

	return (
		<div className={isLoading ? getStyles(['control', 'is-loading']) : ''}>
			<input
				className={classes}
				placeholder={placeHolder}
				{...inputProps}
			/>
		</div>
	);
};

Input.defaultProps = defaultProps;

export default Input;
