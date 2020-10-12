import React from 'react';
import { getStyles } from '../../../styles/getStyles';
import { ColProps } from './types';

const Col: React.FC<ColProps> = ({ children, colSize }) => {
	let clsStr = 'column,';
	colSize && (clsStr += colSize);

	const classes = getStyles(clsStr.split(','));

	return <div className={classes}>{children}</div>;
};

export default Col;
