import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { ProgressBarProps, defaultProps } from './types';

const ProgressBar: React.FC<ProgressBarProps> = ({
	children,
	value,
	color,
	size,
	...otherProgessBarProps
}) => {
	let progressBarClassesStr = 'progress,';
	color !== 'default' && (progressBarClassesStr += `is-${color},`);
	size !== 'default' && (progressBarClassesStr += `is-${size},`);

	const classes = getStyles(progressBarClassesStr.split(','));
	return (
		<progress className={classes} value={value} {...otherProgessBarProps}>
			{`${value}%`}
		</progress>
	);
};

ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
