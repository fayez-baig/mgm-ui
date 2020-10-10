import React from 'react';
import { SubTitleProps, defaultProps } from './types';
import { getStyles } from '../../styles/getStyles';

const SubTitle: React.FC<SubTitleProps> = ({ children, fontSize }) => {
	let subTitleClassesStr = 'subtitle,';

	fontSize && (subTitleClassesStr += `is-${fontSize},`);

	const classes = getStyles(subTitleClassesStr.split(','));
	return <h1 className={classes}>{children}</h1>;
};

SubTitle.defaultProps = defaultProps;

export default SubTitle;
