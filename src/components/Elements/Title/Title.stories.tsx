import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Title from './Title';
import { TitleProps } from './types';
const sizeValues = [1, 2, 3, 4, 5, 6];

export default {
	argTypes: {
		children: {
			control: {
				type: 'text'
			}
		},

		fontSize: {
			control: {
				options: sizeValues,
				type: 'inline-radio'
			}
		},
		isSpaced: {
			control: {
				type: 'boolean'
			}
		}
	},
	component: Title,
	title: 'Elements/Title'
};

const defaultTitleTemplate: Story<TitleProps> = args => <Title {...args} />;

export const Default = defaultTitleTemplate.bind({});

Default.args = {
	children: 'Title',
	fontSize: 3
};
