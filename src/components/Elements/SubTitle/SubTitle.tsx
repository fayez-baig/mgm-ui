import React from 'react';
import { SubTitleProps, defaultProps } from './types';
import { getStyles } from '../../styles/getStyles';

const SubTitle: React.SFC<SubTitleProps> = ({ children, fontSize }) => {
	let titleClassesStr = 'subtitle,';

	fontSize && (titleClassesStr += `is-${fontSize},`);

	const classes = getStyles(titleClassesStr.split(','));
	return <h1 className={classes}>{children}</h1>;
};

SubTitle.defaultProps = defaultProps;

export default SubTitle;
