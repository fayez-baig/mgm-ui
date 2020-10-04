import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { TextAreaProps, defaultProps } from './types';
import LoadingWrapper from './../LoadingWrapper/LoadingWrapper';

const TextArea: React.FC<TextAreaProps> = ({
	color,
	isFocused,
	size,
	isLoading,
	hasFixedSize,
	loaderSize,
	rows,
	...textAreaProps
}) => {
	let textAreaClassesStr = 'textarea,';
	color !== 'default' && (textAreaClassesStr += `is-${color},`);
	size !== 'default' && (textAreaClassesStr += `is-${size},`);
	isFocused && (textAreaClassesStr += 'is-focused,');
	hasFixedSize && (textAreaClassesStr += 'has-fixed-size');
	const classes = getStyles(textAreaClassesStr.split(','));

	const textAreaComponent = (
		<textarea className={classes} {...textAreaProps} rows={rows} />
	);

	return isLoading ? (
		<LoadingWrapper loaderSize={`is-${loaderSize}`}>
			{textAreaComponent}
		</LoadingWrapper>
	) : (
		textAreaComponent
	);
};

TextArea.defaultProps = defaultProps;

export default TextArea;
