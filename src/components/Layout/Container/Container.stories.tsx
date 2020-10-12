import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Container from './Container';
import Notification from './../../Elements/Notification/Notification';
import { ContainerProps } from './types';

export default {
	argTypes: {
		isFluid: {
			control: {
				type: 'boolean'
			}
		},
		isFullHd: {
			control: {
				type: 'boolean'
			}
		},
		isMaxDesktop: {
			control: {
				type: 'boolean'
			}
		},
		isMaxWideScreen: {
			control: {
				type: 'boolean'
			}
		},
		isWideScreen: {
			control: {
				type: 'boolean'
			}
		}
	},
	component: Container,
	title: 'Layout/Container'
};

const defaultContainerTemplate: Story<ContainerProps> = args => (
	<Container {...args}>
		<Notification bgColor='primary'>This is a container</Notification>
	</Container>
);

export const Default = defaultContainerTemplate.bind({});
