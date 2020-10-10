import React from 'react';
import { TitleProps, defaultProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Title: React.SFC<TitleProps> = ({ children, fontSize, isSpaced }) => {
	let titleClassesStr = 'title,';

	fontSize && (titleClassesStr += `is-${fontSize},`);
	isSpaced && (titleClassesStr += `is-spaced,`);

	const classes = getStyles(titleClassesStr.split(','));
	return <h1 className={classes}>{children}</h1>;
};

Title.defaultProps = defaultProps;

export default Title;
