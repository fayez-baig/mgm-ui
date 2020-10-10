import React from 'react';
import { NotificationProps, defaultProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Notification: React.FC<NotificationProps> = ({
	children,
	bgColor,
	isLight,
	onClick
}) => {
	let notificationClassesStr = 'notification,';
	bgColor !== 'default' && (notificationClassesStr += `is-${bgColor},`);
	isLight && (notificationClassesStr += 'is-light,');

	const classes = getStyles(notificationClassesStr.split(','));

	return (
		<div className={classes}>
			<button className={getStyles(['delete'])} onClick={onClick}></button>
			{children}
		</div>
	);
};

Notification.defaultProps = defaultProps;

export default Notification;
