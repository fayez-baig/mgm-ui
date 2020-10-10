import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import SubTitle from './SubTitle';
import { SubTitleProps } from './types';
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
		}
	},
	component: SubTitle,
	title: 'Elements/SubTitle'
};

const defaultSubTitleTemplate: Story<SubTitleProps> = args => (
	<SubTitle {...args} />
);

export const Default = defaultSubTitleTemplate.bind({});

Default.args = {
	children: 'SubTitle',
	fontSize: 5
};
