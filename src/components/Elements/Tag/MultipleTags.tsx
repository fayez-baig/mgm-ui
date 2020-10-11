import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { MultipleTagsProps } from './types';

const MultipleTags: React.FC<MultipleTagsProps> = ({ children, hasAddons }) => {
	let tagClassesStr = 'tags,';
	hasAddons && (tagClassesStr += `has-addons`);

	const classes = getStyles(tagClassesStr.split(','));

	return (
		<div className={getStyles(['control'])}>
			<div className={classes}>{children}</div>
		</div>
	);
};

export default MultipleTags;
