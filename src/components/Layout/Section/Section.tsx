import React from 'react';
import { SectionProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Section: React.FC<SectionProps> = ({ children, size }) => {
	let sectionClassesStr = 'section,';

	size !== 'default' && (sectionClassesStr += `is-${size},`);

	const classes = getStyles(sectionClassesStr.split(','));
	return <div className={classes}>{children}</div>;
};

export default Section;
