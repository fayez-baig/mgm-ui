import React from 'react';
import { SectionProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Section: React.FC<SectionProps> = ({ children, Size }) => {
	let sectionClassesStr = 'section,';

	Size !== 'default' && (sectionClassesStr += `is-${Size},`);

	const classes = getStyles(sectionClassesStr.split(','));
	return <div className={classes}>{children}</div>;
};

export default Section;
