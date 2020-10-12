import React from 'react';
import { ContainerProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Container: React.FC<ContainerProps> = ({
	children,
	isFluid,
	isFullHD,
	isMaxDesktop,
	isMaxWideScreen,
	isWideScreen
}) => {
	let containerClassesStr = 'container,';

	isFluid && (containerClassesStr += `is-fluid,`);
	isFullHD && (containerClassesStr += `is-fullhd`);
	isMaxDesktop && (containerClassesStr += `is-max-desktop,`);
	isMaxWideScreen && (containerClassesStr += `is-max-widescreen,`);
	isWideScreen && (containerClassesStr += `is-widescreen,`);

	const classes = getStyles(containerClassesStr.split(','));

	return <div className={classes}>{children}</div>;
};

export default Container;
