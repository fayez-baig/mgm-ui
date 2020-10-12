import React from 'react';
import { ContainerProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Container: React.FC<ContainerProps> = ({
	children,
	isFluid,
	isFullHd,
	isMaxDesktop,
	isMaxWideScreen,
	isWideScreen
}) => {
	let containerClassesStr = 'container,,';

	isFluid && (containerClassesStr += `is-fluid,`);
	isFullHd && (containerClassesStr += `is-fullhd`);
	isMaxDesktop && (containerClassesStr += `is-max-desktop,`);
	isMaxWideScreen && (containerClassesStr += `is-max-widescreen,`);
	isWideScreen && (containerClassesStr += `is-widescreen,`);

	const classes = getStyles(containerClassesStr.split(','));

	return <div className={classes}>{children}</div>;
};

export default Container;
