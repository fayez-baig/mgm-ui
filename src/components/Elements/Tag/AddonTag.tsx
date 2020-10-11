import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { AddonTagProps } from './types';

const AddonTag: React.FC<AddonTagProps> = ({ children, hasAddons }) => {
	let addonClassesStr = 'tags,';
	hasAddons && (addonClassesStr += `has-addons`);

	const classes = getStyles(addonClassesStr.split(','));

	return (
		<div className={getStyles(['control'])}>
			<div className={classes}>{children}</div>
		</div>
	);
};

export default AddonTag;
