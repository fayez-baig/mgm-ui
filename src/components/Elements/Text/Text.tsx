import React from 'react';
import { TextProps, defaultProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Text: React.FC<TextProps> = ({ children, textSize }) => {
	let textClassesStr = 'content,';

	textSize !== 'default' && (textClassesStr += `is-${textSize},`);

	const classes = getStyles(textClassesStr.split(','));

	return <div className={classes}>{children}</div>;
};

Text.defaultProps = defaultProps;

export default Text;
