import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { TextAreaProps, defaultProps } from './types';

const TextArea: React.FC<TextAreaProps> = ({
	color,
	isFocused,
	isRounded,
	size,
	isLoading,
	fixedSize,
	loaderSize,
	placeHolder,
	rows,
	...textAreaProps
}) => {
	let textAreaClassesStr = 'textarea,';
	color !== 'default' && (textAreaClassesStr += `is-${color},`);
	size !== 'default' && (textAreaClassesStr += `is-${size},`);
	isRounded && (textAreaClassesStr += 'is-rounded,');
	isFocused && (textAreaClassesStr += 'is-focused,');
	fixedSize && (textAreaClassesStr += 'has-fixed-size');
	const classes = getStyles(textAreaClassesStr.split(','));

	return (
		<div
			className={getStyles([
				'control',
				isLoading ? 'is-loading' : '',
				loaderSize ? `is-${loaderSize}` : ''
			])}>
			<textarea
				className={classes}
				placeholder={placeHolder}
				rows={rows}
				{...textAreaProps}></textarea>
		</div>
	);
};

TextArea.defaultProps = defaultProps;

export default TextArea;
