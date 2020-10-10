import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Text from './Text';
import { TextProps } from './types';
const sizeValues = ['default', 'small', 'medium', 'large'];

export default {
	argTypes: {
		children: {
			control: {
				type: 'text'
			}
		},

		textSize: {
			control: {
				options: sizeValues,

				type: 'inline-radio'
			}
		}
	},
	component: Text,
	title: 'Elements/Text'
};

const defaultTextTemplate: Story<TextProps> = args => <Text {...args} />;

export const Default = defaultTextTemplate.bind({});

Default.args = {
	textSize: 'default'
};
