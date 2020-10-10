import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Notification from './Notification';
import { NotificationProps } from './types';

const backgroundColor = [
	'default',
	'primary',
	'link',
	'info',
	'success',
	'warning',
	'danger'
];

export default {
	argTypes: {
		bgColor: {
			control: {
				options: backgroundColor,
				type: 'inline-radio'
			}
		},

		isLight: {
			control: {
				type: 'boolean'
			}
		}
	},
	component: Notification,
	title: 'Elements/Notification'
};

const defaultNotificationTemplate: Story<NotificationProps> = args => (
	<Notification {...args}>
		{/* replace p with text component after all merge */}
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
			eum temporibus numquam deserunt, quos fugiat ea, tenetur voluptatum ut
			modi sed? Quo soluta modi eius possimus adipisci harum sequi cumque!
		</p>
	</Notification>
);

export const Default = defaultNotificationTemplate.bind({});

Default.args = {
	bgColor: 'default',
	isLight: false
};
