import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { ProgressBarProps, defaultProps } from './types';

const ProgressBar: React.FC<ProgressBarProps> = ({
	children,
	value,
	color,
	progressBarSize,
	...otherProgessBarProps
}) => {
	let progressBarClassesStr = 'progress,';
	color !== 'default' && (progressBarClassesStr += `is-${color},`);
	progressBarSize !== 'default' &&
		(progressBarClassesStr += `is-${progressBarSize},`);

	const classes = getStyles(progressBarClassesStr.split(','));
	return (
		<progress className={classes} value={value} {...otherProgessBarProps}>
			{`${value}%`}
		</progress>
	);
};

export default ProgressBar;
